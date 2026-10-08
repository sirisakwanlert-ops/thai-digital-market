import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

import { Navbar } from "@/components/layout/navbar";
import { Button } from "@/components/ui/button";
import { stores } from "@/lib/site-data";

export default function StoresPage() {
  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">Creators</p>
              <h1 className="mt-2 text-3xl font-extrabold text-slate-900 md:text-4xl">ร้านค้าแนะนำ</h1>
            </div>

            <Link href="/seller">
              <Button className="rounded-full">เริ่มขายฟรี</Button>
            </Link>
          </div>
        </section>

        <section className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {stores.map((store) => (
            <article key={store.slug} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${store.accent} text-lg font-bold text-white`}>
                {store.name.charAt(0)}
              </div>

              <div className="flex items-center justify-between gap-3">
                <h2 className="text-lg font-bold text-slate-900">{store.name}</h2>
                <span className="rounded-full bg-violet-50 px-2 py-1 text-xs font-medium text-violet-700">
                  {store.specialty}
                </span>
              </div>

              <p className="mt-2 text-sm text-slate-500">ร้านค้า Digital Creator ที่ขายสินค้าคุณภาพให้กับคนไทย</p>

              <div className="mt-4 flex items-center gap-1 text-sm text-slate-600">
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                {store.rating}
              </div>

              <div className="mt-4 flex items-center justify-between text-sm text-slate-500">
                <span>{store.products} สินค้า</span>
                <span>{store.sales} ยอดขาย</span>
              </div>

              <Link href={`/stores/${store.slug}`} className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-violet-600">
                เข้าชมร้านค้า <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </section>
      </main>
    </>
  );
}
