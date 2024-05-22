'use client'

import { ProductType, useProducts } from "@/hooks/UseProducts"
import Link from "next/link"

export default function Products() {
    const { products, removeProduct } = useProducts()

    return (
        <section className="text-white gap-5 flex flex-col px-24 pt-10">
            <h1 className="text-2xl">Lista de Produtos</h1>
            {products.map((product: ProductType) => (
                <div className="text-white" key={product.id}>
                    <h1>Nome do Produto: {product.name}</h1>
                    <p>Descrição do Produto: {product.description}</p>
                    <p>Quantidade do Produto: {product.quantity}</p>
                    <button className="border-2 p-1 rounded-md hover:bg-cyan-500 hover:border-cyan-500 duration-150" type="button" onClick={() => removeProduct(Number(product.id))}>Remover</button>
                    <Link href={`/products/${product.id}`}>Editar</Link>
                </div>
            ))}
        </section>

    )
}