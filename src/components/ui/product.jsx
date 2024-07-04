import React from 'react'
import Card from '../common/cardProduct'
import MK8 from '../../assets/image/hero.png'
import Material from '../../assets/image/material.png'
import Spareparts from '../../assets/image/material3.png'

const product = () => {
  return (
   <div className='mt-12 flex flex-col lg:flex-row xs:gap-5 items-center justify-between'>
      <Card image={MK8} title='Mesin Rokok MK8' description='Kami menyediakan mesin rokok MK8 berkualitas tinggi dalam berbagai ukuran sesuai pesanan Anda. Mesin ini sangat cocok untuk kecepatan mesin rokok yang sedang berjalan di pabrik Anda.' link='/detail-mk8' />
      <Card image={Material} title='Material' description='Kami menyediakan material-material berkualitas tinggi dalam berbagai ukuran sesuai pesanan Anda. Pita ini sangat cocok untuk kecepatan mesin rokok yang sedang berjalan di pabrik Anda. Klik untuk membaca detail selengkapnya.' link='/detail-material' />
      <Card image={Spareparts} title='Spareparts' description='Kami menyediakan Sparepart berkualitas tinggi dalam berbagai ukuran sesuai pesanan Anda. Pita ini sangat cocok untuk kecepatan mesin rokok yang sedang berjalan di pabrik Anda. Klik untuk membaca detail selengkapnya.' link='/detail-spareparts' />
 </div>
  )
}

export default product