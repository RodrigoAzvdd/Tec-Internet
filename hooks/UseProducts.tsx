'use client'

import { ReactNode, createContext, useContext, useState } from "react";

export type ProductType = {
    id?: number,
    name: string,
    description: string,
    quantity: number
    // type: 'Brinquedo' | 'Roupa' | 'Tecnologia'
}

type ProductContextType = {
    addProduct: (newProduct: ProductType) => void,
    updateProduct: (updatedProduct: ProductType) => void,
    removeProduct: (productId: number) => void,
    products: ProductType[]
}

interface ProductContextProps {
    children: ReactNode
}

export const ProductContext = createContext<ProductContextType>({} as ProductContextType);

export const ProductProvider = ({ children }: ProductContextProps) => {

    const [products, setProducts] = useState<ProductType[]>([]);
    const [nextId, setNextId] = useState<number>(1);

    const addProduct = (newProduct: ProductType) => {
        if (!newProduct || newProduct.description === '' || newProduct.name === '') return;

        newProduct.id = nextId; 
        setNextId(nextId + 1); 

        setProducts(prevProducts => [...prevProducts, newProduct]);
    }

    const updateProduct = (updatedProduct: ProductType) => {
        setProducts(prevProducts =>
            prevProducts.map(product =>
                product.id === updatedProduct.id ? updatedProduct : product
            )
        );
    }

    const removeProduct = (productId: number) => {
        const updatedProductList = products.filter(product => product.id !== productId);
        setProducts(updatedProductList);
    }

    const contextValues = {
        products,
        addProduct,
        updateProduct,
        removeProduct
    }

    return (
        <ProductContext.Provider value={contextValues}>
            {children}
        </ProductContext.Provider>
    )
}

export const useProducts = () => useContext(ProductContext);
