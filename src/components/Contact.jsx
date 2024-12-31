import React from "react"
import {motion} from 'framer-motion'
// import Reveal from "./Reveal"

const Contact = () => {
  return (
    <div className="px-7 max-w-[1200px] mx-auto my-12 " id="contact">
        {/* <Reveal> */}
        <div className="grid md:grid-cols-2 place-items-center">
            <motion.div
                initial={{opacity:0, x:-50}}
                whileInView={{opacity:1,x:0}}
                viewport={{once:true}}
                transition={{duration:1}}
            >
                <div className="text-gray-200 my-3">
                    <h3 className="text-4xl font-semibold mb-5">About <span>Me</span></h3>
                    <p className="text-justify leading-7 mx-auto text-gray-300">
                    A Computer Science student with exposure in C, C++, HTML, CSS, JS, REACT. I am currently learning Node and aspiring to become a skilled MERN stack developer. Dedicated to continuous growth, strong problem-solving skills, and an eye for detail. A driven Computer Science Student and an aspiring Web Developer.
                    </p>
                </div>

                {/* <div className="flex mt-10 items-center gap-7">
                    <div className="bg-gray-800/40 p-4 rounded-lg">
                        <h3 className="md:text-4xl text-2xl font-semibold text-white">11
                            <span>+</span>
                        </h3>
                        <p className="text-xs md:text-base"><span>Projects</span></p>
                    </div>

                    <div className="bg-gray-800/40 p-5 rounded-lg">
                        <h3 className="md:text-4xl text-2xl font-semibold text-white">5
                            <span>+</span>
                        </h3>
                        <p className="text-xs md:text-base"><span>years of experience</span></p>
                    </div>

                    <div className="bg-gray-800/40 p-5 rounded-lg">
                        <h3 className="md:text-4xl text-2xl font-semibold text-white">30
                            <span>+</span>
                        </h3>
                        <p className="text-xs md:text-base"><span>happy clients</span></p>
                    </div>
                </div> */}

            </motion.div>

            <motion.form
                initial={{opacity:0, x:50}}
                whileInView={{opacity:1,x:0}}
                viewport={{once:true}}
                transition={{duration:1}}

                action="https://getform.io/f/placeYourEndpointHere"
                method="POST"
                className=" max-w-6xl pt-5 md:p-12"
                id="form"
            >
            <p className="text-gray-100 font-bold text-3xl mb-2">
              Let´s connect!
            </p>
            <input
                type="text"
                id="name"
                placeholder="Your Name ..."
                name="name"
                className="mb-2 w-full rounded-md border border-red-700 py-2 pl-2 pr-4"
            />
            <input
              type="email"
              id="email"
              placeholder="Your Email ..."
              name="email"
              className="mb-2 w-full rounded-md border border-red-700 py-2 pl-2 pr-4"
            />
            <textarea
              name="textarea"
              id="textarea"
              cols="30"
              rows="4"
              placeholder="Your Message ..."
              className="mb-2 w-full rounded-md border border-red-700 py-2 pl-2 pr-4"
            />
            <button
              type="submit"
              className="w-full py-3 rounded-md text-gray-100 font-semibold text-xl bg-primary-color"
            >
              Send Message
            </button>
            
          </motion.form>

        </div>
        
        {/* </Reveal> */}
    </div>
  )
}

export default Contact