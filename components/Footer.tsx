import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='bg-[#e35818]'>
        <div className='px-4 py-5 flex flex-col justify-center items-center max-w-[1300px] m-auto'>
            <div className='max-w-[1300px] w-full'>
                <div className='flex justify-between items-center max-w-[1100px] mt-4 m-auto'>
                    <h1 className='text-2xl text-white font-black'>Burguer Place</h1>
                    <div className=' flex justify-between items-center w-60'>
                        <a href="/" className='text-white text-2xl'><FaFacebook /></a>
                        <a href="/" className='text-white text-2xl'><FaInstagram /></a>
                        <a href="/" className='text-white text-2xl'><FaWhatsapp /></a>
                        <a href="/" className='text-white text-2xl'><FaTwitter /></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer