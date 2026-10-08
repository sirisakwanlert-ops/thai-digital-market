import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { notFound } from "next/navigation";

import { Navbar } from "@/components/layout/navbar";
import { Button } from "@/components/ui/button";
import { categories, featuredProducts } from "@/lib/site-data";

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export default async function CategoryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = categories.find((item) => item.slug === slug);

  if (!category) {
    notFound();
  }

  const products = featuredProducts.filter(
    (product) => product.category.toLowerCase() === category.name.toLowerCase(),
  );

  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <Link href="/categories" className="inline-flex items-center gap-2 text-sm font-medium text-violet-600">
            <ArrowLeft className="h-4 w-4" />
            กลับไปหมวดหมู่
          </Link>

          <div className="mt-4 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">Category</p>
              <h1 className="mt-2 text-3xl font-extrabold text-slate-900 md:text-4xl">{category.name}</h1>
            </div>
            <Button className="rounded-full">{products.length} รายการ</Button>
          </div>

          <p className="mt-4 max-w-2xl text-slate-600">{category.description}</p>
        </section>

        <section className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <article key={product.id} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="relative h-52 w-full">
                <Image src={product.image} alt={product.name} fill className="object-cover" />
              </div>
              <div className="space-y-4 p-4">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>{product.category}</span>
                  {product.badge ? (
                    <span className="rounded-full bg-amber-100 px-2 py-1 font-medium text-amber-700">{product.badge}</span>
                  ) : null}
                </div>
                <div>
                  <h2 className="text-lg font-bold text-slate-900">{product.name}</h2>
                  <p className="mt-1 text-sm text-slate-500">โดย {product.seller}</p>
                </div>
                <div className="flex items-center justify-between text-sm text-slate-600">
                  <span className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                    {product.rating}
                  </span>
                  <span>ขายแล้ว {product.sales}</span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-2xl font-extrabold text-slate-900">฿{product.price}</p>
                  <Link href={`/products/${product.slug}`} className="inline-flex items-center gap-1 text-sm font-semibold text-violet-600">
                    ดูสินค้า <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </section>
      </main>
    </>
  );
}
