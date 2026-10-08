import Link from "next/link";

import { Navbar } from "@/components/layout/navbar";
import { Button } from "@/components/ui/button";

const sellingBenefits = [
  "สมัครและเปิดร้านได้ฟรี ไม่มีค่าใช้จ่ายรายเดือน",
  "อัปโหลดสินค้าและจัดการคำสั่งซื้อได้ในหน้า Dashboard",
  "ระบบ Commission คำนวณบน Server เพื่อความโปร่งใส",
  "รองรับ Creator ทุกประเภท ตั้งแต่ Template ถึง Audio Asset",
];

const steps = [
  { title: "สร้างร้าน", description: "ตั้งชื่อร้านและเพิ่มรายละเอียดของแบรนด์" },
  { title: "อัปโหลดสินค้า", description: "บรรจุไฟล์และรายละเอียดสินค้าให้พร้อมขาย" },
  { title: "รับคำสั่งซื้อ", description: "ติดตามออเดอร์และรายได้แบบเรียลไทม์" },
];

export default function SellerPage() {
  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <section className="grid gap-6 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-[1.2fr_0.8fr] md:p-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">Seller</p>
            <h1 className="mt-2 text-3xl font-extrabold text-slate-900 md:text-5xl">เริ่มขาย Digital Product ได้ฟรี</h1>
            <p className="mt-4 max-w-xl text-lg text-slate-600">
              เปิดร้านของคุณบน ThaiDigital Market และเริ่มสร้างรายได้จากความสร้างสรรค์โดยไม่ต้องเสียค่าใช้จ่ายรายเดือน
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/register">
                <Button className="rounded-full px-6">สมัครเป็นผู้ขาย</Button>
              </Link>
              <Link href="/products">
                <Button variant="outline" className="rounded-full px-6">ดูสินค้า</Button>
              </Link>
            </div>
          </div>

          <div className="rounded-2xl bg-slate-900 p-6 text-white">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-300">Business model</p>
            <div className="mt-5 space-y-4 text-sm text-slate-200">
              <div className="rounded-xl bg-slate-800 p-4">
                <p className="text-slate-400">ราคาสินค้า</p>
                <p className="mt-2 text-2xl font-bold text-white">฿100</p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl bg-slate-800 p-4">
                  <p className="text-slate-400">Marketplace</p>
                  <p className="mt-2 text-xl font-bold text-white">10%</p>
                </div>
                <div className="rounded-xl bg-slate-800 p-4">
                  <p className="text-slate-400">Seller</p>
                  <p className="mt-2 text-xl font-bold text-white">90%</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {sellingBenefits.map((benefit) => (
            <div key={benefit} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-3 h-10 w-10 rounded-lg bg-violet-50 text-center text-xl leading-10 text-violet-600">✓</div>
              <p className="text-sm text-slate-700">{benefit}</p>
            </div>
          ))}
        </section>

        <section className="mt-12 rounded-[2rem] border border-dashed border-violet-200 bg-violet-50 p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">How it works</p>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step.title} className="rounded-2xl bg-white p-5 shadow-sm">
                <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">
                  {index + 1}
                </div>
                <h2 className="text-xl font-bold text-slate-900">{step.title}</h2>
                <p className="mt-2 text-sm text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
