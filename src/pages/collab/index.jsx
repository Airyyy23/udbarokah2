import React from 'react'
import collab1 from '../../assets/image/collab1.png'
import collab2 from '../../assets/image/collab2.png'
import collab3 from '../../assets/image/collab3.png'
import collab4 from '../../assets/image/collab4.png'
import collab5 from '../../assets/image/collab5.png'
import collab6 from '../../assets/image/collab6.png'
import collab7 from '../../assets/image/collab7.png'
import collab8 from '../../assets/image/collab8.png'
import collab9 from '../../assets/image/collab9.png'
import collab10 from '../../assets/image/collab10.png'
import collab11 from '../../assets/image/collab11.png'
import collab12 from '../../assets/image/collab12.png'

const collab = () => {
  return (
    <div className='w-screen text-center 2xl:px-56 xl:px-44 lg:px-32 md:px-20 xs:px-10 m-auto flex flex-col gap-12 mt-36'>
      <h1>Klien Kolaborasi Kami</h1>
      <div className='flex flex-wrap justify-center items-center gap-5'>
         <img className='w-44 lg:w-64' src={collab1} alt="collab" />
         <img className='w-44 lg:w-64' src={collab2} alt="collab" />
         <img className='w-44 lg:w-64' src={collab3} alt="collab" />
         <img className='w-44 lg:w-64' src={collab4} alt="collab" />
         <img className='w-44 lg:w-64' src={collab5} alt="collab" />
         <img className='w-44 lg:w-64' src={collab6} alt="collab" />
         <img className='w-44 lg:w-64' src={collab7} alt="collab" />
         <img className='w-44 lg:w-64' src={collab8} alt="collab" />
         <img className='w-44 lg:w-64' src={collab9} alt="collab" />
         <img className='w-44 lg:w-64' src={collab10} alt="collab" />
         <img className='w-44 lg:w-64' src={collab11} alt="collab" />
         <img className='w-44 lg:w-64' src={collab12} alt="collab" />
      </div>
    </div>
  )
}

export default collab