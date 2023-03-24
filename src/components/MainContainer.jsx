import React from 'react'
import HomeContainer from './HomeContainer'
import {motion} from "framer-motion"
import {AiFillLeftCircle , AiFillRightCircle} from "react-icons/ai"
import RowContainer from './RowContainer'

const MainContainer = () => {
  return (
    <div  className='w-full h-auto flex flex-col items-center justify-center' >
      <HomeContainer/>

      <section  className='w-full my-6 '>
        <div className='w-full flex items-center justify-between'>
         <p className='text-2xl font-semibold capitalize text-headingColor relative
         before:absolute before:rounded-lg before:content before:w-32 before:h-1
         before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-green-400 to-emerald-600 transition-all ease-in-out
         duration-100'>
          Healthy & Fresh Fruits
         </p>

         <div className='hidden md:flex gap-3 items-center'>
         <motion.div whileTap={{scale:0.75}} className='w-8 h-8  rounded-lg bg-emerald-400 hover:bg-emerald-600 cursor-pointer
         transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center' > <AiFillLeftCircle className='text-lg text-white' /> </motion.div>
         <motion.div whileTap={{scale:0.75}} className='w-8 h-8  rounded-lg bg-emerald-400 hover:bg-emerald-600 cursor-pointer
         transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center' ><AiFillRightCircle className='text-lg text-white' /></motion.div>
         </div>
        </div>
        <RowContainer flag={true}/>
      </section>
      </div>

       

    
  )
}

export default MainContainer