import { body } from "framer-motion/client";
import {create} from "zustand";

export const useProductStore = create((set) => ({
    products: [],
    setProducts: (products) => set({ prodcuts }),
    createProduct: async (newProduct) => {
        if(!newProduct.name || !newProduct.image || !newProduct.price) {
            return {success:false, message:"Please full in all fields."}
        }
        const res = await fetch("/api/products", {
            method:"POST",
            headers:{
                "content-Type":"application/json"
            },
            body:JSON.stringify(newProduct)
        })
        const data = await res.json();
        set((state) => ({products: [...state.product, data.data] }))
        return {success:false, message:"Product created successfully"}
    },
}));
