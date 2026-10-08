export type CategoryItem = {
  name: string;
  slug: string;
  description: string;
};

export type ProductItem = {
  id: string;
  slug: string;
  name: string;
  price: number;
  seller: string;
  rating: number;
  sales: number;
  category: string;
  badge?: "ใหม่" | "ขายดี" | "แนะนำ";
  image: string;
  description: string;
};

export const categories: CategoryItem[] = [
  { name: "Template", slug: "template", description: "Template สำหรับงานเอกสารและการตลาด" },
  { name: "Education", slug: "education", description: "สื่อการเรียนรู้และเอกสารประกอบการสอน" },
  { name: "Design", slug: "design", description: "Assets และธีมสำหรับงานออกแบบ" },
  { name: "Music", slug: "music", description: "MIDI, loops และ audio asset" },
  { name: "Productivity", slug: "productivity", description: "เครื่องมือและแพลตฟอร์มทำงาน" },
  { name: "Business", slug: "business", description: "สื่อธุรกิจและพรีเซนต์สำหรับทีม" },
  { name: "AI", slug: "ai", description: "Prompt และ workflow สำหรับ AI" },
  { name: "Graphics", slug: "graphics", description: "กราฟิก, icon และ illustration" },
  { name: "Audio", slug: "audio", description: "Sound effect และเพลงสั้น" },
  { name: "Other", slug: "other", description: "Digital product อื่น ๆ" },
];

export const featuredProducts: ProductItem[] = [
  {
    id: "p-1",
    slug: "thai-study-planner-2026",
    name: "Thai Study Planner 2026",
    price: 299,
    seller: "Studio Noon",
    rating: 4.9,
    sales: 1200,
    category: "Education",
    badge: "แนะนำ",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
    description: "แผนการเรียนและเครื่องมือจัดการเวลาให้คุณทำงานและเรียนต่อเนื่องแบบมีระบบ",
  },
  {
    id: "p-2",
    slug: "canva-resume-kit",
    name: "Canva Resume Kit",
    price: 199,
    seller: "Creative Lane",
    rating: 4.8,
    sales: 980,
    category: "Template",
    badge: "ขายดี",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
    description: "ชุดเทมเพลตเรซูเม่และพอร์ตโฟลิโอที่ปรับใช้ได้ทั้งผลงานและธุรกิจส่วนตัว",
  },
  {
    id: "p-3",
    slug: "business-pitch-deck",
    name: "Business Pitch Deck",
    price: 450,
    seller: "Pitch Forge",
    rating: 5.0,
    sales: 740,
    category: "Business",
    badge: "ใหม่",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
    description: "เทมเพลตนำเสนอธุรกิจและแผนงานที่ออกแบบให้สวยงามและนำเสนอได้ง่าย",
  },
  {
    id: "p-4",
    slug: "lo-fi-beat-pack",
    name: "Lo-fi Beat Pack",
    price: 349,
    seller: "Signal Sound",
    rating: 4.7,
    sales: 640,
    category: "Music",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=900&q=80",
    description: "ชุด beat, loop และ sound design สำหรับงานสร้างสรรค์และคอนเทนต์สั้น",
  },
  {
    id: "p-5",
    slug: "ai-prompt-vault",
    name: "AI Prompt Vault",
    price: 249,
    seller: "Prompt Lab",
    rating: 4.9,
    sales: 820,
    category: "AI",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
    description: "ชุด prompt และ workflow สำหรับงานสร้างสรรค์และประสิทธิภาพทีมด้วย AI",
  },
  {
    id: "p-6",
    slug: "modern-icon-set",
    name: "Modern Icon Set",
    price: 129,
    seller: "Pixel Thread",
    rating: 4.6,
    sales: 510,
    category: "Graphics",
    badge: "ใหม่",
    image: "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=900&q=80",
    description: "ชุดไอคอนสไตล์ทันสมัยพร้อม export สำหรับงาน UI, branding และ social media",
  },
];

export const stores = [
  { name: "Studio Noon", slug: "studio-noon", specialty: "Education", products: 34, sales: "12.4k", rating: 4.9, accent: "from-amber-400 to-orange-500" },
  { name: "Creative Lane", slug: "creative-lane", specialty: "Template", products: 18, sales: "9.8k", rating: 4.8, accent: "from-violet-400 to-purple-500" },
  { name: "Pitch Forge", slug: "pitch-forge", specialty: "Business", products: 22, sales: "11.1k", rating: 4.9, accent: "from-sky-400 to-cyan-500" },
  { name: "Signal Sound", slug: "signal-sound", specialty: "Music", products: 41, sales: "8.7k", rating: 4.7, accent: "from-emerald-400 to-teal-500" },
];

export const topSellers = stores.map((store) => ({
  name: store.name,
  products: store.products,
  sales: store.sales,
  accent: store.accent,
}));
