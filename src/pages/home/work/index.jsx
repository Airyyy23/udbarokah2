import workList from "../../../utils/work";

const Work = () => {
   let No = 1;
  return (
    <div className="w-screen 2xl:px-56 xl:px-44 lg:px-32 md:px-20 text-center mt-36">
      <h1>Bagaimana Kami Bekerja</h1>
      <div className="flex flex-wrap xl:justify-between justify-center items-center md:items-start gap-20 mt-12">
        {
         workList.map((work, index) => (
            <div key={index} className="w-80 lg:w-[340px] xl:w-[480px] flex flex-col items-center justify-center text-center gap-3">
               <div className="w-20 h-20 bg-[#314747] flex justify-center items-center rounded-full text-[#FFD700]">
                  <h1>{No++}</h1>
               </div>
               <h1>{work.title}</h1>
               <p>{work.description}</p>
            </div>
         ))
        }
      </div>
    </div>
  )
};

export default Work;