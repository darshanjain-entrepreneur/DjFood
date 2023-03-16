import React from 'react'
import Delivery from "../img/delivery.png"
import HeroBg from "../img/heroBg.png" 
import { heroData } from '../utils/data'



const HomeContainer = () => {





  return (
    <section  className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full ' id='home' >
    <div className=' py-2  flex-1 flex flex-col items-start justify-center gap-6'>
       <div className='flex items-center gap-2 justify-center bg-emerald-100 px-4 py-1 rounded-full'>
         <p className='text-base font-semibold text-emerald-500 '>Two-wheeler Delivery</p>
         <div className='w-8 bg-white h-8 rounded-full overflow-hidden drop-shadow-xl'>
           <img src={Delivery}  className="w-full h-full object-contain" alt="delivery" />
         </div>
       </div >
       <p className='text-[2.5rem] lg:text-[4.5rem] font-bold
       tracking-wide text-headingColor'> The Fastest Delivery in <span className='text-[3rem] text-yellow-400 lg:text-[5rem]'>Your Area</span></p>

       <p className='text-base text-gray-500 text-center md:text-left md:w-[80%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eligendi possimus ad ea voluptate minima inventore fugit expedita excepturi quo magni, corrupti mollitia? Eos sit fugiat error autem labore quidem!</p>

       <button type='button' className='  w-full px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-blue-500 hover:shadow-lg transition-all ease-in-out duration-100 md:w-auto'>Order</button>
    </div>

    <div className='py-2 flex-1 flex items-center relative'>
        

            <img src={HeroBg} alt="hero-bg" className=' ml-auto h-420 w-full lg:w-auto lg:h-650' />
        
        <div className='w-full h-full absolute top-0 left-0 flex items-center justify-center lg:px-32 py-4 
        gap-4 flex-wrap'>

            {heroData && heroData.map(n => (
               <div key={n.id} className='   lg:w-190  p-4 bg-cyan-100 backdrop-blur-md rounded-3xl
               flex flex-col items-center justify-center drop-shadow-lg' >
                 <img src={n.imageSrc} alt="I1" className='w-20 lg:w-40 -mt-10 lg:-mt-20 transition-all hover:translate-y-2 duration-500' />
                 <p className='text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4'>{n.name}</p>
                 <p className='text-[12px] lg:text-sm text-gray-400 font-semibold my-1 lg:my-3'>
                   {n.decp}
                 </p>
                    <p className='text-sm font-semibold text-headingColor'>
                     <span className='text-xs text-pink-500'>$</span>{n.price}</p>
               </div>

            ))}
              </div>
              </div>
          
          

 </section>
  )    
}

export default HomeContainer