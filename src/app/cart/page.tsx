import Link from "next/link";

import { Navbar } from "@/components/layout/navbar";
import { Button } from "@/components/ui/button";

const cartItems = [
  { name: "Thai Study Planner 2026", price: 299, quantity: 1 },
  { name: "Canva Resume Kit", price: 199, quantity: 1 },
];

export default function CartPage() {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">Cart</p>
              <h1 className="mt-2 text-3xl font-extrabold text-slate-900">ตะกร้าสินค้า</h1>
            </div>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-600">
              {cartItems.length} รายการ
            </span>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.name} className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div>
                    <p className="font-semibold text-slate-900">{item.name}</p>
                    <p className="mt-1 text-sm text-slate-500">จำนวน {item.quantity}</p>
                  </div>
                  <p className="text-lg font-extrabold text-slate-900">฿{item.price}</p>
                </div>
              ))}
            </div>

            <aside className="rounded-2xl bg-slate-900 p-5 text-white">
              <h2 className="text-xl font-bold">สรุปคำสั่งซื้อ</h2>
              <div className="mt-5 space-y-3 text-sm text-slate-300">
                <div className="flex justify-between">
                  <span>ยอดรวม</span>
                  <span>฿{subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>ค่าธรรมเนียม</span>
                  <span>฿0</span>
                </div>
                <div className="flex justify-between border-t border-slate-700 pt-3 text-base font-semibold text-white">
                  <span>รวมทั้งสิ้น</span>
                  <span>฿{subtotal}</span>
                </div>
              </div>

              <Button className="mt-6 w-full rounded-xl">ดำเนินการชำระเงิน</Button>
              <Link href="/products" className="mt-3 block text-center text-sm text-slate-300">
                เลือกซื้อสินค้าเพิ่ม
              </Link>
            </aside>
          </div>
        </section>
      </main>
    </>
  );
}
