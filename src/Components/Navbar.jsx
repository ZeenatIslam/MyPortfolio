import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav className="bg-transparent text-amber-50 p-4 sm:p-1  w-full">
        <div className="container  flex justify-between items-center">
          <h1 className="lg:text-2xl md:text-xl  font-bold">My Portfolio</h1>
          <ul className="flex space-x-4 sm:font-light">
            <li><a href="#skills" >Skills</a></li>
            <li><a href="#project" className=''>Project</a></li>
            <li > <a href="#experience" className=''>Experience</a></li>
            <li><a href="#contact" className=''>Contact</a></li>
             

          </ul>
        </div>
      </nav>

    </>
  )
}

export default Navbar
