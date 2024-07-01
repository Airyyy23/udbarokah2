import React from 'react'
import Card from '../common/cardProduct'
import MK9 from '../../assets/image/mesin.png'
import MK8 from '../../assets/image/hero.png'

const product = () => {
  return (
   <div className='mt-12 flex flex-col lg:flex-row xs:gap-5 items-center justify-between'>
      <Card image={MK9} title='Mesin Rokok MK9' description='Kami menyediakan mesin rokok MK9 berkualitas tinggi dalam berbagai ukuran sesuai pesanan Anda. Mesin ini sangat cocok untuk kecepatan mesin rokok yang sedang berjalan di pabrik Anda. ' link='/detail-mk9' />
      <Card image={MK8} title='Mesin Rokok MK8' description='Kami menyediakan mesin rokok MK8 berkualitas tinggi dalam berbagai ukuran sesuai pesanan Anda. Mesin ini sangat cocok untuk kecepatan mesin rokok yang sedang berjalan di pabrik Anda. ' link='/detail-mk8' />
      <Card image={MK8} title='Mesin Rokok MK8' description='Kami menyediakan mesin rokok MK8 berkualitas tinggi dalam berbagai ukuran sesuai pesanan Anda. Mesin ini sangat cocok untuk kecepatan mesin rokok yang sedang berjalan di pabrik Anda. ' link='/detail-mk8' />
 </div>
  )
}

export default product