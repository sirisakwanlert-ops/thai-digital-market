import Link from "next/link";

import { Navbar } from "@/components/layout/navbar";
import { categories, featuredProducts } from "@/lib/site-data";

export default function CategoriesPage() {
  const categoryCounts = categories.map((category) => ({
    ...category,
    count: featuredProducts.filter((product) => product.category.toLowerCase() === category.name.toLowerCase()).length,
  }));

  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">Browse</p>
          <h1 className="mt-2 text-3xl font-extrabold text-slate-900 md:text-4xl">หมวดหมู่สินค้า</h1>
        </section>

        <section className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {categoryCounts.map((category) => (
            <Link
              key={category.slug}
              href={`/categories/${category.slug}`}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-violet-200 hover:shadow-md"
            >
              <div className="mb-4 inline-flex rounded-xl bg-violet-50 p-3 text-violet-600">
                <span className="text-xl">✦</span>
              </div>
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-xl font-bold text-slate-900">{category.name}</h2>
                <span className="rounded-full bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600">
                  {category.count} รายการ
                </span>
              </div>
              <p className="mt-3 text-sm text-slate-600">{category.description}</p>
            </Link>
          ))}
        </section>
      </main>
    </>
  );
}
