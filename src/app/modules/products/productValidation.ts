import { z } from "zod";

const productValidationSchema = z.object({
  name: z.string().min(3).max(50),
  description: z.string().min(10).max(200),
  price: z.number().positive(),
  category: z.string(),
  tags: z.array(z.string()),
  variants: z.array(
    z.object({
      type: z.string(),
      value: z.string(),
    })
  ),
  inventory: z.object({
    quantity: z.number().int().positive(),
    inStock: z.boolean(),
  }),
});

export default productValidationSchema;
