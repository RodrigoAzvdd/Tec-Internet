'use client'

import UpdateProductForm from "@/components/UpdateProductForm";
import { ProductType, useProducts } from "@/hooks/UseProducts";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page({ params }: { params: { id: string } }) {
    const { products } = useProducts();
    const [productToUpdate, setProductToUpdate] = useState<ProductType | undefined>(undefined);
    const router = useRouter()

    useEffect(() => {
        const product = products.find((product: ProductType) => product.id === Number(params.id));
        if (!product) {
            router.push('/products')
        } else {
            setProductToUpdate(product);
        }
    }, [products, params.id]);

    return (
        <section className="text-white">
            <UpdateProductForm product={productToUpdate} />
        </section>
    );
}
