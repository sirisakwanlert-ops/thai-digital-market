import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Star } from "lucide-react";
import { notFound } from "next/navigation";

import { Navbar } from "@/components/layout/navbar";
import { Button } from "@/components/ui/button";
import { featuredProducts, stores } from "@/lib/site-data";

export function generateStaticParams() {
  return stores.map((store) => ({ slug: store.slug }));
}

export default async function StoreDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const store = stores.find((item) => item.slug === slug);

  if (!store) {
    notFound();
  }

  const storeProducts = featuredProducts.filter((product) => product.seller === store.name);

  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <Link href="/stores" className="inline-flex items-center gap-2 text-sm font-medium text-violet-600">
          <ArrowLeft className="h-4 w-4" />
          กลับไปร้านค้า
        </Link>

        <section className="mt-6 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
          <div className={`h-36 bg-gradient-to-r ${store.accent}`} />
          <div className="p-6 md:p-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="flex items-center gap-4">
                <div className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${store.accent} text-2xl font-bold text-white`}>
                  {store.name.charAt(0)}
                </div>
                <div>
                  <h1 className="text-3xl font-extrabold text-slate-900">{store.name}</h1>
                  <p className="text-sm text-slate-500">{store.specialty} • {store.products} สินค้า</p>
                </div>
              </div>

              <Button className="rounded-full">ติดตามร้านค้า</Button>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-slate-600">
              <span className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                {store.rating} (คะแนนร้าน)
              </span>
              <span>{store.sales} ยอดขายรวม</span>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-slate-900">สินค้าในร้าน</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {storeProducts.map((product) => (
              <Link key={product.id} href={`/products/${product.slug}`} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <div className="relative h-40 w-full">
                  <Image src={product.image} alt={product.name} fill className="object-cover" />
                </div>
                <div className="space-y-3 p-4">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span>{product.category}</span>
                    {product.badge ? (
                      <span className="rounded-full bg-amber-100 px-2 py-1 font-medium text-amber-700">{product.badge}</span>
                    ) : null}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{product.name}</h3>
                  <div className="flex items-center justify-between text-sm text-slate-600">
                    <span className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                      {product.rating}
                    </span>
                    <span>฿{product.price}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
