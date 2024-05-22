'use client'

import { ProductType, useProducts } from "@/hooks/UseProducts";
import { useState, useEffect } from "react";

export default function UpdateProductForm({ product }: { product: ProductType }) {
    const { updateProduct } = useProducts();
    const [formState, setFormState] = useState<ProductType>(product);

    useEffect(() => {
        if (product) {
            setFormState(product);
        }
    }, [product]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormState(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (formState) {
            updateProduct(formState);
        }
    };

    return (
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <input
                className="py-2 ps-3 border-2 rounded-md p-1 bg-transparent"
                type="text"
                placeholder="Nome"
                name="name"
                id="name"
                value={formState.name}
                onChange={handleChange}
            />
            <input
                className="py-2 ps-3 border-2 rounded-md p-1 bg-transparent"
                type="text"
                placeholder="Descrição"
                name="description"
                id="description"
                value={formState.description}
                onChange={handleChange}
            />
            <input
                className="py-2 ps-3 border-2 rounded-md p-1 bg-transparent"
                type="number"
                placeholder="Quantidade"
                name="quantity"
                id="quantity"
                value={formState.quantity}
                onChange={handleChange}
            />
            <button
                className="border-2 p-1 rounded-md hover:bg-cyan-500 hover:border-cyan-500 duration-150"
                type="submit"
            >
                Update
            </button>
        </form>
    );
}
