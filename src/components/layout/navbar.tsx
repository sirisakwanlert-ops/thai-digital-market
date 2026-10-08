import Link from "next/link";
import { ShoppingCart, Menu, Search } from "lucide-react";

import { Button } from "@/components/ui/button";

const navItems = [
  { label: "หน้าแรก", href: "/" },
  { label: "สินค้า", href: "/products" },
  { label: "หมวดหมู่", href: "/categories" },
  { label: "ร้านค้า", href: "/stores" },
  { label: "เริ่มขาย", href: "/seller" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-violet-500 text-lg font-bold text-white shadow-sm">
            T
          </div>
          <div>
            <p className="text-lg font-bold text-slate-900">ThaiDigital</p>
            <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">Market</p>
          </div>
        </div>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-slate-900">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-500">
            <Search className="h-4 w-4" />
            <input
              type="search"
              aria-label="ค้นหา"
              placeholder="ค้นหาสินค้า"
              className="w-32 border-0 bg-transparent text-sm outline-none placeholder:text-slate-400"
            />
          </div>
          <Link href="/cart" aria-label="ตะกร้าสินค้า">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-4 w-4" />
            </Button>
          </Link>
          <Link href="/login">
            <Button variant="outline" className="rounded-full">เข้าสู่ระบบ</Button>
          </Link>
        </div>

        <Button variant="ghost" size="icon" className="md:hidden" aria-label="เมนู mobile">
          <Menu className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
}
