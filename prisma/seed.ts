import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.category.createMany({
    data: [
      { name: "Template", slug: "template", description: "Template และ mockup" },
      { name: "Education", slug: "education", description: "สื่อการเรียนรู้" },
      { name: "Design", slug: "design", description: "Asset และ design system" },
      { name: "Music", slug: "music", description: "MIDI, loop, sound effect" },
      { name: "Productivity", slug: "productivity", description: "เครื่องมือและชีท" },
      { name: "Business", slug: "business", description: "สื่อธุรกิจและ presentation" },
      { name: "AI", slug: "ai", description: "Prompt และ automation" },
      { name: "Graphics", slug: "graphics", description: "Icons, illustrations" },
      { name: "Audio", slug: "audio", description: "Audio asset" },
      { name: "Other", slug: "other", description: "หมวดหมู่ทั่วไป" },
    ],
    skipDuplicates: true,
  });

  const admin = await prisma.user.upsert({
    where: { email: "admin@thaidigital.market" },
    update: {},
    create: {
      name: "Admin ThaiDigital",
      username: "admin",
      email: "admin@thaidigital.market",
      passwordHash: "demo-admin-password",
      role: "ADMIN",
    },
  });

  const seller = await prisma.user.upsert({
    where: { email: "seller@thaidigital.market" },
    update: {},
    create: {
      name: "Creator Studio",
      username: "creatorstudio",
      email: "seller@thaidigital.market",
      passwordHash: "demo-seller-password",
      role: "USER",
    },
  });

  await prisma.store.upsert({
    where: { slug: "creatorstudio" },
    update: {},
    create: {
      ownerId: seller.id,
      name: "Creator Studio",
      slug: "creatorstudio",
      description: "Marketplace สำหรับ template และ asset ของคนไทย",
      rating: 4.9,
      salesCount: 1250,
    },
  });

  console.log("Seed complete:", { admin: admin.email, seller: seller.email });
}

main()
  .catch((error) => {
    console.error("Seed failed:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
