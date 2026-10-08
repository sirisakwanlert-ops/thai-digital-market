import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[60vh] items-center justify-center px-6">
      <div className="max-w-lg text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-500">404</p>
        <h1 className="mt-4 text-4xl font-bold text-slate-900">ไม่พบหน้าเว็บนี้</h1>
        <p className="mt-3 text-slate-600">
          ลิงก์ที่คุณเปิดอาจเสียหายหรือหน้าดังกล่าวยังไม่มีอยู่ในระบบ
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
        >
          กลับสู่หน้าหลัก
        </Link>
      </div>
    </main>
  );
}
