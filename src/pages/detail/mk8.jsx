import MK8 from '../../assets/image/hero.png'
import CustomButton from '../../components/common/customButton'

const mk9 = () => {
  return (
    <div>
      <div className="bg-[#314747] w-screen py-10 2xl:px-56 xl:px-44 lg:px-32 md:px-20 xs:max-md:flex-col-reverse xs:max-md:text-center m-auto flex justify-between items-center">
         <div className='w-5/12 xs:max-md:w-4/5 text-[#FFD700]'>
            <h1 className='mb-2'>Mesin Rokok MK8</h1>
         </div>
         <img src={MK8} className='md:max-xl:w-1/3 xs:max-md:w-4/5 w-1/2' alt="masin rokok" />
      </div>
      <div className='w-screen 2xl:px-56 xl:px-44 lg:px-32 md:px-20 xs:px-10 m-auto pt-36'>
         <p>Kami menyediakan Kevlar Garniture Tape dengan kualitas yang sangat tinggi dan berbagai ukuran yang Anda inginkan. Ini digunakan untuk mesin rokok dijalankan dengan kecepatan tinggi. Masa pakai Kevlar Garniture Tape sangat lama karena kekuatan Kevlar sangat kuat. Kekuatan tarik Fiber Kevlar lebih kuat dari baja 4,7 kali.</p>
         <ul className='my-12 list-disc'>
            <h1>Spesifik dalam mesin ini adalah</h1>
               <li>Kapasitas Produksi: Hingga 9.000 batang rokok per menit</li>
               <li>Tipe Rokok: Filter dan non-filter</li>
               <li>Dimensi Mesin: Panjang 5.000 mm x Lebar 1.500 mm x Tinggi 2.000 mm</li>
               <li>Berat Mesin: 3.500 kg</li>
               <li>Konsumsi Daya: 50 kW</li>
         </ul>
         <p>Untuk informasi lebih lanjut atau untuk mengatur demonstrasi produk, jangan ragu untuk menghubungi kami. Kami siap membantu Anda meningkatkan produktivitas dan kualitas produksi rokok Anda dengan Mesin Rokok MK 9.</p>
         <ul className='mt-12 list-disc'>
            <h1>Hubungi Kami:</h1>
            <li>Email: info@mesinrokok.com</li>
            <li>Telepon: +62 123 456 789</li>
            <li>Alamat: Jalan Industri No. 123, Jakarta, Indonesia</li>
         </ul>
         <CustomButton />
      </div>
    </div>
  )
}

export default mk9