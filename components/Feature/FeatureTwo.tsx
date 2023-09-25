import React from 'react'
import Image from 'next/image'

import FeatureBackground from '@/images/hamburguer-03.jpg'

import { FaInstagram, FaWhatsapp } from "react-icons/fa";


const FeatureTwo = () => {
  return (
    <section className='h-3/4 relative'>
        <Image
          src={FeatureBackground}
          alt="alternative"
          fill={true}
          className="object-cover"
        />
        <div className='max-h-full w-screen relative pl-8 lg:pl-44'>
          <div className='flex flex-col justify-center items-start h-screen max-h-full uppercase leading-none font-bold text-white'>
            <h1 className='text-4xl lg:text-6xl text-[#e35818] font-black mb-4 w-[600px] h-[220px] leading-[4rem]'>Faça seu pedido por Whatsapp ou ligue</h1>
            <button className='text-4xl pt-4 pb-4 pl-16 pr-16 bg-[#e35818] text-white rounded-sm'><FaWhatsapp /></button>
          </div>
        </div>
    </section>
  )
}

export default FeatureTwo