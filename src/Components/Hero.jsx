import React from 'react'
import {motion} from 'framer-motion'
const Hero = () => {
  return (
    <section className='h-screen flex flex-col justify-center items-center text-white text-center '>
      <motion.img
      initial={{scale:1.1 ,opacity:0}}
      animate={{scale:1,opacity:1}}
      transition={{duration:1 ,ease:"easeIn"}}
      src="image01.png" alt="" width={420} className=''/>
       
       
       <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-white font-bold text-left "
        >
          <h1 className='name text-[8vw] font-bold' >

         Zeenat Islam
          </h1>
        </motion.div>

    </section>
  )
}

export default Hero
