import React from 'react'
import Material from '../../../assets/image/material.png'
import Material3 from '../../../assets/image/material3.png'
import Material4 from '../../../assets/image/material4.png'
import { Link } from 'react-router-dom'

const Spareparts = () => {
  return (
    <div className='w-screen text-center 2xl:px-56 xl:px-44 lg:px-32 md:px-20 xs:px-10 m-auto pt-36'>
      <h1>Spareparts</h1>
      <div className='flex flex-wrap gap-5 justify-center items-center my-12'>
         <img className='w-32 lg:w-52' src={Material} alt="Material" />
         <img className='w-32 lg:w-52' src={Material3} alt="Material" />
         <img className='w-32 lg:w-52' src={Material4} alt="Material" />
      </div>
      <p className='mb-12'>Kami menyediakan Sparepart berkualitas tinggi dalam berbagai ukuran sesuai pesanan Anda. Pita ini sangat cocok untuk kecepatan mesin rokok yang sedang berjalan di pabrik Anda. Klik untuk membaca detail selengkapnya.</p>
      <Link className="bg-[#FFD700] px-8 py-3 rounded-full" to='/detail-spareparts'>Baca Selengkapanya</Link>
    </div>
  )
}

export default Spareparts