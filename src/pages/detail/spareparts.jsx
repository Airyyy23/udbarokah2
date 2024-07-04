import Material from '../../assets/image/material.png'
import Material3 from '../../assets/image/material3.png'
import Material4 from '../../assets/image/material4.png'
import sparepartsList from '../../utils/spareparts'
import CustomButton from '../../components/common/customButton'

const Spareparts = () => {
   let No = 1;
  return (
    <div>
      <div className="bg-[#314747] w-screen py-10 2xl:px-56 xl:px-44 lg:px-32 md:px-20 xs:max-md:flex-col-reverse xs:max-md:text-center m-auto flex justify-between items-center">
         <div className='w-5/12 xs:max-md:w-4/5 text-[#FFD700]'>
            <h1 className='mb-2 mt-5'>Spareparts</h1>
         </div>
         <div className='w-11/12 md:w-2/5 flex flex-wrap gap-5 justify-center items-center my-12'>
            <img className='w-24 lg:w-32' src={Material} alt="Material" />
            <img className='w-24 lg:w-32' src={Material3} alt="Material" />
            <img className='w-24 lg:w-32' src={Material4} alt="Material" />
         </div>
      </div>
      <div className='w-screen 2xl:px-56 xl:px-44 lg:px-32 md:px-20 xs:px-10 m-auto pt-36'>
         <p>Kami menyediakan spareparts berkualitas sangat tinggi, seperti pita garnitur, filter, dan kertas rokok, dalam berbagai ukuran yang Anda inginkan.</p>
         <table className='table-auto my-12'>
            <thead>
               <tr>
                  <th>No.</th>
                  <th>Nama</th>
               </tr>
            </thead>
            <tbody>
            {sparepartsList.map((item, index) => (
               <tr key={index}>
                  <td>{No++}.</td>
                  <td>{item.name}</td>
               </tr>
            ))}
            </tbody>
         </table>
         <ul className='list-disc mb-12'>
            <p className='font-bold'>NB :</p>
            <li>Harga tidak mengikat (sewaktu-waktu dapat berubah tanpa pemberitahuan)</li>
            <li>harga bellum termasuk <span>biaya kirim</span></li>
            <li>Harga sudah include PPN 11%</li>
            <li>Pembayaran sebelum barang dikirim</li>
         </ul>
         <ul className='list-disc'>
            <p className='font-bold'>Hubungi Kami :</p>
            <li>Email: info@mesinrokok.com</li>
            <li>Telepon: +62 123 456 789</li>
            <li>Alamat: Jalan Industri No. 123, Jakarta, Indonesia</li>
         </ul>
         <CustomButton />
      </div>
    </div>
  )
}

export default Spareparts