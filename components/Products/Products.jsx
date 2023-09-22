"use client"

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
    <section className='text-white'>
        <div className='mt-8 flex justify-center'>
            <div>
                <div className='flex justify-center'>
                    <h1 className='font-black text-2xl mb-8'>
                        {heading}
                    </h1>
                </div>
                
                
                <div className='grid justify-between grid-flow-row gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 '>
                    {/* <div className='flex flex-row md:flex-col'>  flex justify-center */}
                        {data.map((product) => (
                            <ProductCard
                                name={product.name}
                                img={product.img}
                                desc={product.desc}
                                price={product.price}
                                button={product.button}
                                key={product.name}
                            />
                        ))}
                </div>
            </div>
        </div>
    </section>
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