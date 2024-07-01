import React from 'react'

const about = () => {
  return (
    <div className='w-screen 2xl:px-56 xl:px-44 lg:px-32 md:px-20 xs:px-10 m-auto flex flex-col gap-12'>
      <p><span>CV UDBAROKAH</span> adalah perusahaan distributor mesin tembakau rokok dan suku cadang yang digunakan dalam industri produksi tembakau.</p>
      <ul className='list-decimal'>
        <p className='mb-5'>Kami menyediakan mesin tembakau rokok berkualitas tinggi dan suku cadang yang tahan lama. Produk kami mencakup berbagai jenis mesin dan suku cadang, termasuk:</p>
        <li>Mesin Rokok MK9</li>
        <li>Mesin Rokok MK8</li>
        <li>Suku Cadang dan Material</li>
      </ul>
      <p>Mesin tembakau kami dirancang dengan teknologi terkini untuk memastikan efisiensi dan kinerja optimal. Suku cadang yang kami sediakan terbuat dari bahan berkualitas tinggi untuk memastikan daya tahan dan kompatibilitas terbaik dengan mesin Anda.</p>
      <ul className='list-decimal'>
        <p className='mb-5'>Transaksi bisnis kami adalah sebagai berikut:</p>
        <li>Manufaktur dan pengiriman sesuai sampel yang dipesan dari pelanggan.</li>
        <li>Manufaktur dan pengiriman sesuai pesanan pelanggan dalam desain kami.</li>
      </ul>
      <ul className='list-disc'>
        <h1>CV UD.BAROKAH</h1>
        <li>Email: info@mesinrokok.com</li>
        <li>Telepon: +62 123 456 789</li>
        <li>Alamat: Jalan Industri No. 123, Jakarta, Indonesia</li>
      </ul>
    </div>
  )
}

export default about