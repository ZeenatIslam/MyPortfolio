import React from 'react'
import {motion} from 'framer-motion'
const Hero = () => {
  return (
    <section className='h-screen flex flex-col justify-center items-center text-white text-center '>
      <motion.img
      initial={{scale:1.1 ,opacity:0}}
      animate={{scale:1,opacity:1}}
      transition={{duration:1 ,ease:"easeIn"}}
      src="image01.png" alt="" width={450} className=''/>
       
       
       <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-white text-5xl lg:text-7xl font-bold text-left"
        >
         Zeenat Islam
        </motion.div>

    </section>
  )
}

export default Hero
