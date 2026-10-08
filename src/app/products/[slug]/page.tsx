import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle, ShoppingCart, Star } from "lucide-react";
import { notFound } from "next/navigation";

import { Navbar } from "@/components/layout/navbar";
import { Button } from "@/components/ui/button";
import { featuredProducts } from "@/lib/site-data";

export function generateStaticParams() {
  return featuredProducts.map((product) => ({ slug: product.slug }));
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = featuredProducts.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <Link href="/products" className="inline-flex items-center gap-2 text-sm font-medium text-violet-600">
          <ArrowLeft className="h-4 w-4" />
          กลับไปสินค้าทั้งหมด
        </Link>

        <section className="mt-6 grid gap-8 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-2 md:p-8">
          <div className="relative h-[420px] overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
            <Image src={product.image} alt={product.name} fill className="object-cover" />
          </div>

          <div className="space-y-5">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-violet-600">
              {product.category}
              {product.badge ? (
                <span className="rounded-full bg-amber-100 px-2 py-1 font-medium text-amber-700">{product.badge}</span>
              ) : null}
            </div>

            <div>
              <h1 className="text-3xl font-extrabold text-slate-900 md:text-4xl">{product.name}</h1>
              <p className="mt-2 text-slate-500">โดย {product.seller}</p>
            </div>

            <div className="flex items-center gap-2 text-sm text-slate-600">
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              {product.rating} · {product.sales} คนซื้อแล้ว
            </div>

            <p className="text-4xl font-extrabold text-slate-900">฿{product.price}</p>

            <p className="text-slate-600">{product.description}</p>

            <div className="space-y-3 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-emerald-500" />
                ไฟล์พร้อมใช้งานทันทีหลังชำระเงิน
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-emerald-500" />
                ลิขสิทธิ์ใช้งานชัดเจนและรองรับงานจริง
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-emerald-500" />
                อัปเดตและการสนับสนุนจากผู้ขาย
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button className="rounded-full px-6">
                <ShoppingCart className="h-4 w-4" />
                เพิ่มลงตะกร้า
              </Button>
              <Link href="/cart">
                <Button variant="outline" className="rounded-full px-6">ดูตะกร้า</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
