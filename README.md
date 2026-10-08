# ThaiDigital Market

ThaiDigital Market คือ Marketplace สำหรับ Digital Product ของคนไทยที่ออกแบบเพื่อให้ผู้สร้างสรรค์สามารถอัปโหลดและขายสินค้าได้ฟรี โดยใช้แนวทางสถาปัตยกรรมที่พร้อมขยายไปสู่ธุรกิจจริงในอนาคต

## สถาปัตยกรรมและเทคโนโลยีที่เลือก

- Next.js 16 + TypeScript
- Tailwind CSS
- shadcn/ui foundation
- Prisma ORM
- PostgreSQL
- Authentication architecture สำหรับ Next.js
- Vercel-friendly deployment setup

## โครงสร้างหลัก

```text
.
├── app/
├── components/
├── docs/
├── lib/
├── prisma/
├── public/
├── src/
├── .env.example
├── .gitignore
├── components.json
├── next.config.ts
├── package.json
├── README.md
├── tsconfig.json
└── eslint.config.mjs
```

## เริ่มต้นใช้งาน

```bash
npm install
cp .env.example .env
npm run db:generate
npm run dev
```

จากนั้นเปิด http://localhost:3000

## Environment Variables

คัดลอก .env.example แล้วปรับค่าให้ตรงกับ environment ของคุณ เช่น:

```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/thaidigital_market?schema=public"
AUTH_SECRET="your-secret"
NEXTAUTH_URL="http://localhost:3000"
```

## ขั้นตอนต่อไป

1. เพิ่ม Prisma migration และ PostgreSQL local setup
2. สร้าง auth flow สำหรับสมัครสมาชิกและเข้าสู่ระบบ
3. สร้าง seller dashboard และ store page
4. เพิ่ม product CRUD และ admin moderation
5. เพิ่ม cart, checkout และ mock payment
6. เพิ่ม download security และ review system

## หมายเหตุ

เวอร์ชันนี้เป็น foundation phase เท่านั้น โดยยังไม่ได้ implement ระบบ payment จริง, payout จริง หรือ marketplace business flow แบบสมบูรณ์
