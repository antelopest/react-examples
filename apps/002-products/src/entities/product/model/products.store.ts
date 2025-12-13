import { create } from "zustand";
import type { Product } from "./types";

type ProductStore = {
  products: Product[];
  getById: (id: string) => Product | undefined;
}

export const useProductStore = create<ProductStore>((set, get) => ({
  products: [
    { id: "1", title: "Iphone 17 pro max 1Tb Black", price: 1800 },
    { id: "2", title: "Iphone 17 pro max 512Gb Blue", price: 1600 },
    { id: "3", title: "Iphone 17 pro max 256Gb Blue", price: 1200 },
    { id: "4", title: "Iphone 17 pro 1Tb White", price: 1200 },
    { id: "5", title: "Iphone 17 pro 512Gb Blue", price: 1000 },
    { id: "6", title: "Iphone 17 pro 256Gb Pink", price: 800 },
    { id: "7", title: "Iphone 17 1Tb Black", price: 1000 }
  ],
  getById: (id) => get().products.find((p) => p.id === id),
}));