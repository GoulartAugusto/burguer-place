import React, { useState } from 'react'
import Image from 'next/image';
import Header from "./Header"

import HeroBackground from '@/images/hamburguer-01.jpeg'

const Hero = () => {
  return (
      <div className='h-screen'>
        <div className='z-10'>
            <Image
                src={HeroBackground}
                alt=""
                layout="fill"
                objectFit="cover"
                className=""
            />
        </div>
        <div className='max-h-full w-screen relative pl-8'>
        <Header />
          <div className='flex flex-col justify-center items-start h-screen max-h-full uppercase leading-none font-bold text-white'>
            <h1 className='text-6xl font-black mb-4 w-[600px] h-[200px]'>Melhor Hamburguer de Floripa</h1>
            <p className='text-3xl font-black mb-8 truncate'>Pronto em 10 minutos</p>
            <button className='text-lg pt-4 pb-4 pl-16 pr-16 bg-[#e31837] text-white rounded-sm'>Faça seu pedido</button>
          </div>
        </div>
      </div>
  )
}

export default Hero