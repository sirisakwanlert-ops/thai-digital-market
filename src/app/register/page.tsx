import Link from "next/link";

import { Navbar } from "@/components/layout/navbar";
import { Button } from "@/components/ui/button";

export default function RegisterPage() {
  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-md px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">Signup</p>
          <h1 className="mt-2 text-3xl font-extrabold text-slate-900">สมัครสมาชิก</h1>

          <form className="mt-6 space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-slate-700">
                ชื่อเต็ม
              </label>
              <input
                id="name"
                type="text"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none ring-0 transition focus:border-violet-400"
                placeholder="ชื่อของคุณ"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-slate-700">
                อีเมล
              </label>
              <input
                id="email"
                type="email"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none ring-0 transition focus:border-violet-400"
                placeholder="name@example.com"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium text-slate-700">
                รหัสผ่าน
              </label>
              <input
                id="password"
                type="password"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none ring-0 transition focus:border-violet-400"
                placeholder="สร้างรหัสผ่าน"
              />
            </div>

            <Button type="submit" className="w-full rounded-xl">
              สร้างบัญชี
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-slate-600">
            มีบัญชีอยู่แล้ว? <Link href="/login" className="font-semibold text-violet-600">เข้าสู่ระบบ</Link>
          </p>
        </div>
      </main>
    </>
  );
}
