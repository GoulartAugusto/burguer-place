import React from 'react'
import Image from 'next/image'

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

import Pizza from '@/images/pizza-2.jpg'
import { ProductCard } from './ProductCard'

const Products = ({ heading, data }) => {
  return (
    <main className='text-white'>
        <div className='flex flex-col items-center'>
            <h1 className='font-black text-2xl mb-8'>
                {heading}
            </h1>
        </div>
        

        
            <div className=''>
                {data.map((product) => {
                    return (
                        <div className=''>
                            <ProductCard
                                name={product.name}
                                img={product.img}
                                desc={product.desc}
                                price={product.price}
                                button={product.button}
                                key={product.alt}
                            />
                        </div>
                    )
                })}
            </div>
    </main>
  )
}

export default Products

/*
                    <section className='leading-4 w-[300px] border-4 border-indigo-500' key={index}>
                        <div>
                            <Image src={product.img} height={300} alt={product.alt} />
                        </div>
                        <div className='w-[300px] flex flex-col justify-center items-center p-4 text-center'>
                            <h2 className='text-2xl '>{product.name}</h2>
                            <p className='mb-2 w-[300px]'>{product.desc}</p>
                            <h1 className='text-3xl'>{product.price}</h1>
                            <button className='text-lg pt-4 pb-4 pl-16 pr-16 bg-[#e31837] text-white rounded-sm'>{product.button}</button>
                        </div>
                    </section>


                    ___________________

                                        <Card key={index}>
                        <Image src={product.img} height={300} alt={product.alt} />
                    <CardHeader>
                      <CardTitle>{product.name}</CardTitle>
                      <CardDescription>{product.desc}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>{product.price}</p>
                    </CardContent>
                    <CardFooter>
                      <p>{product.button}</p>
                    </CardFooter>
                  </Card>


                  ___________



                  
                {data.map((product, index) => {
                    return (
                        <section className='w-[300px] h-[500px] border-4 border-white' key={index}>
                        </section>
                    )
                })}

*/