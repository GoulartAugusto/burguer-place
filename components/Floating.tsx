import React from 'react'
import Link from 'next/link';
import { FaWhatsapp } from "react-icons/fa";



const Floating = () => {
  return (
    <div className='bg-[#41e318] mt-8 h-[80px] end-10 ml-8 pt-6 px-4 rounded-lg text-white z-10 fixed font-black'>
      <Link href="/" className='text-xl flex'>Faça seu pedido &nbsp;&nbsp; <FaWhatsapp /></Link>
    </div>
  )
}

export default Floating