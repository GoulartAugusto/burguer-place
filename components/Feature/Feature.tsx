import React from 'react'
import Image from 'next/image'

import FeatureBackground from '@/images/hamburguer-05.jpg'


const Feature = () => {
  return (
    <section className='h-3/4 relative mb-8'>
        <Image
          src={FeatureBackground}
          alt="alternative"
          fill={true}
          className="object-cover"
        />
        <div className='max-h-full w-screen relative pl-8 lg:pl-44'>
          <div className='flex flex-col justify-center items-start h-screen max-h-full uppercase leading-none font-bold text-white'>
            <h1 className='text-4xl lg:text-6xl font-black mb-4 w-[600px] h-[220px] leading-[4rem]'>Monte seu próprio Hamburguer</h1>
            <p className='w-96 md:text-md md:truncate md:w-[1000px] font-grey text-yellow-500 mb-8'>Com todas as opções disponiveis no cardapio monte seu Hamburguer perfeito.</p>
            <button className='text-lg pt-4 pb-4 pl-16 pr-16 bg-[#e35818] text-white rounded-sm'>Faça seu pedido</button>
          </div>
        </div>
    </section>
  )
}

export default Feature