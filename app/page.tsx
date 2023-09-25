"use client"

import { GlobalStyle } from '@/GlobalStyle'

import Hero from '@/components/Hero'
import Products from '@/components/Products/Products'
import { productData, productDataTwo } from "@/components/Products/data.js";
import Feature from '@/components/Feature/Feature';

export default function Home() {
  return (
    <main className="bg-[#000]">
      <Hero />
      <Products heading='Hamburguers' data={productData} />
      <Feature /> 
      <GlobalStyle />
    </main>
  )
}
