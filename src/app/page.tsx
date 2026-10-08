import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Star } from "lucide-react";

import { Navbar } from "@/components/layout/navbar";
import { Button } from "@/components/ui/button";
import { categories, featuredProducts, topSellers } from "@/lib/site-data";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 lg:px-8">
        <section className="grid items-center gap-8 overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-2 md:p-10">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-700">
              <Sparkles className="h-3.5 w-3.5" />
              Marketplace สำหรับ Creator ไทย
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
                ตลาดรวม Digital Product ของคนไทย
              </h1>
              <p className="max-w-xl text-lg text-slate-600">
                ค้นหาและขาย Template, Planner, Design Asset, MIDI, Prompt และ Digital Product
                จาก Creator ไทยที่เชื่อถือได้
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link href="/products">
                <Button className="rounded-full px-6 text-base">เลือกซื้อสินค้า</Button>
              </Link>
              <Link href="/seller">
                <Button variant="outline" className="rounded-full px-6 text-base">
                  เริ่มขายฟรี
                </Button>
              </Link>
            </div>

            <div className="flex items-center gap-6 pt-2 text-sm text-slate-500">
              <div>
                <p className="text-xl font-bold text-slate-900">15k+</p>
                <p>สินค้าทั้งหมด</p>
              </div>
              <div>
                <p className="text-xl font-bold text-slate-900">4.9/5</p>
                <p>คะแนนความพึงพอใจ</p>
              </div>
              <div>
                <p className="text-xl font-bold text-slate-900">2.3k</p>
                <p>ผู้ขายในระบบ</p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {featuredProducts.slice(0, 4).map((product) => (
              <div key={product.id} className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
                <div className="relative h-32 w-full">
                  <Image src={product.image} alt={product.name} fill className="object-cover" />
                </div>
                <div className="space-y-2 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs font-medium text-violet-600">{product.category}</span>
                    <span className="text-xs font-medium text-amber-500">{product.badge ?? "ใหม่"}</span>
                  </div>
                  <p className="line-clamp-2 text-sm font-semibold text-slate-900">{product.name}</p>
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                    {product.rating}
                  </div>
                  <p className="text-base font-bold text-slate-900">฿{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <div className="mb-6 flex items-end justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Categories</p>
              <h2 className="mt-2 text-2xl font-bold text-slate-900">หมวดหมู่ยอดนิยม</h2>
            </div>
            <Link href="/categories" className="text-sm font-medium text-violet-600">
              ดูทั้งหมด
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/categories/${category.slug}`}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-violet-200 hover:shadow-md"
              >
                <div className="mb-4 inline-flex rounded-xl bg-violet-50 p-2 text-violet-600">
                  <Sparkles className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">{category.name}</h3>
                <p className="mt-2 text-sm text-slate-600">{category.description}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <div className="mb-6 flex items-end justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Featured</p>
              <h2 className="mt-2 text-2xl font-bold text-slate-900">สินค้าราคานิยม</h2>
            </div>
            <Link href="/products" className="text-sm font-medium text-violet-600">
              ดูสินค้าเพิ่มเติม
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {featuredProducts.map((product) => (
              <article key={product.id} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <div className="relative h-48 w-full">
                  <Image src={product.image} alt={product.name} fill className="object-cover" />
                </div>
                <div className="space-y-4 p-4">
                  <div className="flex items-center justify-between gap-3 text-xs text-slate-500">
                    <span>{product.category}</span>
                    {product.badge ? <span className="rounded-full bg-amber-100 px-2 py-1 font-medium text-amber-700">{product.badge}</span> : null}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{product.name}</h3>
                    <p className="mt-1 text-sm text-slate-500">โดย {product.seller}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-sm text-slate-600">
                      <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                      {product.rating}
                    </div>
                    <span className="text-sm text-slate-500">ขายแล้ว {product.sales}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-xl font-extrabold text-slate-900">฿{product.price}</p>
                    <Link href="/products" className="inline-flex items-center gap-1 text-sm font-semibold text-violet-600">
                      ดูสินค้า <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] bg-slate-900 px-6 py-10 text-white md:px-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">Creator</p>
              <h2 className="mt-2 text-2xl font-bold">Creator แนะนำ</h2>
            </div>
            <Link href="/stores">
              <Button variant="secondary" className="rounded-full bg-white text-slate-900 hover:bg-slate-100">
                ดูร้านค้าทั้งหมด
              </Button>
            </Link>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {topSellers.map((seller) => (
              <div key={seller.name} className="rounded-2xl border border-slate-700 bg-slate-800/80 p-5">
                <div className={`mb-4 h-12 w-12 rounded-xl bg-gradient-to-br ${seller.accent}`} />
                <h3 className="text-lg font-bold">{seller.name}</h3>
                <p className="mt-2 text-sm text-slate-300">{seller.products} สินค้า • {seller.sales} ยอดขาย</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] border border-dashed border-violet-200 bg-violet-50 p-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">CTA</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900">มี Digital Product ที่อยากขาย?</h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-600">
            สร้างร้านของคุณฟรีและเริ่มขายได้ทันทีโดยไม่มีค่าใช้จ่ายรายเดือน
          </p>
          <Link href="/seller" className="mt-6 inline-flex rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
            เริ่มขายฟรี
          </Link>
        </section>
      </main>
    </>
  );
}
