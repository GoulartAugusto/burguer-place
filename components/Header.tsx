import React from 'react'
import Link from 'next/link';


const Header = () => {
  return (
    <div className='bg-opacity-0 h-[80px] flex justify-center pt-4 text-white z-10 relative font-black'>
      <Link href="/" className='text-2xl'>Burguer Place</Link>
    </div>
  )
}

export default Header