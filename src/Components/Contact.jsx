import React from 'react'

const Contact = () => {

  
  return (
    <section id="contact" className="py-20 text-amber-50 text-center h-screen flex flex-col justify-center items-center">
      
      <h1 className="font-bold text-3xl md:text-4xl lg:text-7xl leading-relaxed mb-4"

>
          Want to get in Touch?
          

        </h1>

      <div className="relative flex flex-col md:flex-row items-center justify-center p-6 m-6 w-full max-w-5xl gap-6">


        <div className="flex flex-col w-full md:w-1/2 items-center md:items-start text-center md:text-left">
          <h1 className="whitespace-normal leading-relaxed">
            Ready to collaborate with Zeenat, invite her to speak, or have an inquiry? <br />
            Let’s connect and take the next step together.
          </h1>
        </div>


        <div className="flex w-full md:w-1/2 flex-col items-center justify-center">
          <h2 className="text-2xl md:text-3xl font-bold">Let's connect.</h2>



          <p className="mt-4">Email: zeenatislam011@gmail.com</p>


          <a
            href="mailto:zeenatislam011@gmail.com"
            className="mt-4 px-6 py-3 rounded-md border-2 border-indigo-500 shadow-2xl shadow-indigo-500 
                   hover:bg-indigo-500 transition duration-300"
          >
            Send Email
          </a>
        </div>
      </div>
    </section>

  )
}

export default Contact
