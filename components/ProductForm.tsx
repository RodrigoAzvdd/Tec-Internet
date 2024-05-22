'use client'

import { ProductType, useProducts } from "@/hooks/UseProducts"
import { useRef, useState } from "react"

export default function ProductForm() {
    const { addProduct } = useProducts()
    const [counter, setCounter] = useState<number>(0)

    const inputDescription = useRef<HTMLInputElement>(null)
    const inputName = useRef<HTMLInputElement>(null)
    const inputQuant = useRef<HTMLInputElement>(null)

    return (
        <form className="flex flex-col gap-6">
            <input ref={inputName} className="py-2 ps-3 border-2 rounded-md p-1 bg-transparent" type="text" placeholder="Nome" name="name" id="name" />
            <input ref={inputDescription} className="py-2 ps-3 border-2 rounded-md p-1 bg-transparent" type="text" placeholder="Descrição" name="description" id="description" />
            <input ref={inputQuant} className="py-2 ps-3 border-2 rounded-md p-1 bg-transparent" type="number" placeholder="Quantidade" name="quantidade" id="quantidade" />
            <button className="border-2 p-1 rounded-md hover:bg-cyan-500 hover:border-cyan-500 duration-150" type="button" onClick={() => {
                if (!inputDescription.current || !inputName.current || !inputQuant.current) {
                    alert('Erro')
                    return
                }
                const newProduct: ProductType = {
                    id: counter,
                    description: inputDescription.current.value,
                    name: inputName.current.value,
                    quantity: Number(inputQuant.current.value)
                }
                setCounter(currentValue => currentValue + 1)
                addProduct(newProduct)

                inputDescription.current.value = ''
                inputName.current.value = ''
                inputQuant.current.value = ''
            }}>add</button>
        </form>
    )
}