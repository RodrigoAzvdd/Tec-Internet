'use client'

import { ProductType, useProducts } from "@/hooks/UseProducts"
import Link from "next/link"

export default function Products() {
    const { products, removeProduct } = useProducts()

    return (
        <section className="text-white gap-5 flex flex-col px-24 pt-10">
            <h1 className="text-2xl">Lista de Produtos</h1>
            {products.map((product: ProductType) => (
                <div className="text-white border p-5 rounded-md" key={product.id}>
                    <h1 className="text-xl">Produto: {product.name}</h1>
                    <p className="pt-4">Descrição: {product.description}</p>
                    <p>Quantidade: {product.quantity}</p>
                    <div className="flex items-center gap-5 pt-5">
                        <button className="border-2 p-1 rounded-md hover:bg-cyan-500 hover:border-cyan-500 duration-150" type="button" onClick={() => removeProduct(Number(product.id))}>Remover</button>
                        <Link className="border-2 p-1 rounded-md hover:bg-cyan-500 hover:border-cyan-500 duration-150" href={`/products/${product.id}`}>Editar</Link>
                    </div>
                </div>
            ))}
        </section>
    )
}