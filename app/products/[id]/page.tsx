'use client'

import UpdateProductForm from "@/components/UpdateProductForm";
import { ProductType, useProducts } from "@/hooks/UseProducts";
import { useEffect, useState } from "react";

export default function Page({ params }: { params: { id: string } }) {
    const { products } = useProducts();
    const [productToUpdate, setProductToUpdate] = useState<ProductType | undefined>(undefined);

    useEffect(() => {
        const product = products.find((product: ProductType) => product.id === Number(params.id));
        if (product) {
            setProductToUpdate(product);
        }
    }, [products, params.id]);

    return (
        <section className="text-white">
            {productToUpdate ? (
                <UpdateProductForm product={productToUpdate} />
            ) : (
                <p>Loading...</p>
            )}
        </section>
    );
}
