import React from 'react'
import { motion, useScroll, useTransform } from "framer-motion";
import { section } from 'framer-motion/client';
import FloatingBall from './FloatingBall'
const Project = () => {

  

  const projects = [
    {
      id: 1,
      title: "Leave Automation Management System (.NET, SQL Server)",
      description: "Designed and implemented a system to automate employee leave requests.Developed using .NET Framework and Microsoft SQL Server Express."
    },
    {
      id: 2,
      title: "Serena – Virtual Desktop Assistant (Python, AI, NLP)",
      description: "Built a voice recognition-based virtual assistant for automation tasks.Integrated text-to-speech conversion for enhanced user interaction."
    }, {
      id: 3,
      title: "Flappy Bird Game Application (.NET, C#)",
      description: "Developed a C#-based arcade game featuring dynamic obstacle avoidance.Implemented persistent game mechanics and scoring systems."
    },
    {
      id: 4,
      title: "Smart Vehicle Tracking System (Machine Learning, Web App, Embedded System)",
      description: "Developed a live driver monitoring system using machine learning.Features include fuel theft detection, GPS tracking, expense management, and real-time alerts for safety violations."
    }
  ]

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <>
      <section id='project' className=' text-amber-50 py-20 text-center  '>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}

          className="font-bold text-3xl md:text-4xl lg:text-7xl leading-relaxed mb-4"
        >

          Project work
        </motion.div>



        <div className="mt-6 flex lg:flex-row flex-col  justify-center gap-4 m-6 p-4 ">
          {projects.map((project) => (
            <div key={project.id} className="relative  text-center shadow-indigo-500 border-4 border-amber-50 p-4 rounded-2xl shadow-xl ">
              <h3 className="lg:text-2xl  md:text-xl sm:text-xl">{project.title}</h3>
              <p className="mt-2 text-amber-50">{project.description}</p>
            </div>
          ))}
        </div>

      </section>
    </>
  )
}

export default Project
