import { z } from "zod";

// here field are by default required.

const zodVarient = z.object({
    type: z.string(),
    value: z.string(),
});

const zodInventory = z.object({
    quantity: z.number(),
    inStock: z.boolean(),
});

const zodProduct = z.object({
    name: z.string(),
    description: z.string(),
    price: z.number(),
    category: z.string(),
    tags: z.array(z.string()),
    variants: z.array(zodVarient),
    inventory: zodInventory,
});

export const ProductValidators = { zodProduct };
