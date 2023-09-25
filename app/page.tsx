"use client"

import { GlobalStyle } from '@/GlobalStyle'

import Hero from '@/components/Hero'
import Products from '@/components/Products/Products'
import { productData, productDataTwo } from "@/components/Products/data.js";
import Feature from '@/components/Feature/Feature';
import FeatureTwo from '@/components/Feature/FeatureTwo';
import Footer from '@/components/Footer';
import Floating from '@/components/Floating';

export default function Home() {
  return (
    <main className="bg-[#000]">
      <Floating />
      <Hero />
      <Products heading='Hamburguers' data={productData} />
      <Feature /> 
      <Products heading='Bebidas' data={productDataTwo} />
      <FeatureTwo />
      <Footer />
      <GlobalStyle />
    </main>
  )
}
