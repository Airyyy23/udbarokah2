import React from 'react'

const buttonWhatsapp = ({image}) => {
  return (
    <a className="bg-[#FFD700] px-8 py-3 rounded-full flex w-max" href='https://api.whatsapp.com/send/?phone=6281230784317&text&type=phone_number&app_absent=0' target='_blank'>
      Baca Selengkapanya
    </a>
  )
}

export default buttonWhatsapp