import MaterialAll from '../../assets/image/materialall.png'
import materialList from '../../utils/material'
import CustomButton from '../../components/common/customButton'
const material = () => {
   let No = 1;
  return (
    <div>
      <div className="bg-[#314747] w-screen py-10 2xl:px-56 xl:px-44 lg:px-32 md:px-20 xs:max-md:flex-col-reverse xs:max-md:text-center m-auto flex justify-between items-center">
         <div className='w-5/12 xs:max-md:w-4/5 text-[#FFD700]'>
            <h1 className='mb-2 mt-5'>Material</h1>
         </div>
         <img src={MaterialAll} className='md:max-xl:w-1/3 xs:max-md:w-4/5 w-1/2' alt="masin rokok" />
      </div>
      <div className='w-screen 2xl:px-56 xl:px-44 lg:px-32 md:px-20 xs:px-10 m-auto pt-36'>
         <p>Kami menyediakan material berkualitas sangat tinggi, seperti pita garnitur, filter, dan kertas rokok, dalam berbagai ukuran yang Anda inginkan.</p>
         <table className='table-auto my-12'>
            <thead>
               <tr>
                  <th>No.</th>
                  <th>Nama</th>
               </tr>
            </thead>
            <tbody>
            {materialList.map((item, index) => (
               <tr key={index}>
                  <td>{No++}.</td>
                  <td>{item.name}</td>
               </tr>
            ))}
            </tbody>
         </table>
         <ul className='list-disc'>
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

export default material