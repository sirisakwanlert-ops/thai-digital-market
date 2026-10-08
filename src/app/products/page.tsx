import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Filter, Search, Star } from "lucide-react";

import { Navbar } from "@/components/layout/navbar";
import { Button } from "@/components/ui/button";
import { featuredProducts } from "@/lib/site-data";

export default function ProductsPage() {
  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">Marketplace</p>
              <h1 className="mt-2 text-3xl font-extrabold text-slate-900 md:text-4xl">สินค้าทั้งหมด</h1>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-500">
              <Search className="h-4 w-4" />
              <input
                type="search"
                aria-label="ค้นหาสินค้า"
                placeholder="ค้นหาสินค้า"
                className="w-40 border-0 bg-transparent text-sm outline-none placeholder:text-slate-400"
              />
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "ทั้งหมด",
              "Template",
              "Education",
              "Business",
              "Music",
              "AI",
              "Graphics",
            ].map((item) => (
              <Button key={item} variant={item === "ทั้งหมด" ? "default" : "outline"} className="rounded-full">
                {item}
              </Button>
            ))}
          </div>
        </section>

        <section className="mt-8">
          <div className="mb-5 flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
              <Filter className="h-4 w-4" />
              เรียงตาม: ความนิยม
            </div>
            <p className="text-sm text-slate-500">{featuredProducts.length} ผลการค้นหา</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featuredProducts.map((product) => (
              <article key={product.id} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <div className="relative h-52 w-full">
                  <Image src={product.image} alt={product.name} fill className="object-cover" />
                </div>
                <div className="space-y-4 p-4">
                  <div className="flex items-center justify-between gap-3 text-xs text-slate-500">
                    <span>{product.category}</span>
                    {product.badge ? (
                      <span className="rounded-full bg-amber-100 px-2 py-1 font-medium text-amber-700">{product.badge}</span>
                    ) : null}
                  </div>

                  <div>
                    <h2 className="text-lg font-bold text-slate-900">{product.name}</h2>
                    <p className="mt-1 text-sm text-slate-500">โดย {product.seller}</p>
                  </div>

                  <p className="line-clamp-2 text-sm text-slate-600">{product.description}</p>

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
          </div>
        </section>
      </main>
    </>
  );
}
