'use client'

import ProductForm from "@/components/ProductForm"

export default function Home() {
  return (
    <main className="text-white m-5 flex flex-col items-center gap-5">
      <section className="flex flex-col gap-5 w-full px-20">
        <h2 className="text-xl">Cadastrar Produto</h2>
        <ProductForm />
      </section>
    </main>
  )
}