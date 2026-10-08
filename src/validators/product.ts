import { z } from "zod";

export const createProductSchema = z.object({
  title: z.string().min(3).max(120),
  description: z.string().min(20).max(4000),
  price: z.number().int().positive().min(1),
  categoryId: z.string().min(1),
  fileType: z.string().min(1),
  tags: z.array(z.string()).max(10).default([]),
});

export type CreateProductInput = z.infer<typeof createProductSchema>;
