import React from 'react'
import profilepic from "../assets/sm.png"
import {TypeAnimation} from "react-type-animation"
import {motion} from 'framer-motion'
import {
    AiOutlineGithub,
    AiOutlineLinkedin
} from 'react-icons/ai'
import{
    DiCss3,
    DiHtml5,
    DiJavascript1,
    DiNodejsSmall,
    DiReact
} from 'react-icons/di'

import pdfFile from '../assets/Satish-Resume.pdf';



const Hero = () => {
  return (
    <div>
    <div className='mt-28 max-w-[1200px] mx-auto relative' id='home'>
        <div className='grid md:grid-cols-2 place-items-center gap-8 px-7'>
            <motion.div
                initial={{opacity:0,y:-50}}
                whileInView={{opacity:1,y:0}}
                viewport={{once: true}}
                transition={{duration:1}}
            >
                <TypeAnimation
                    sequence={[
                        "FullStack Developer",
                        1000,
                        "CS Student",
                        1000
                    ]}
                    speed={50}
                    repeat={Infinity}
                    className='font-bold text-red-800 opacity-70 text-2xl md:text-5xl italic '
                />

                <motion.p
                    initial={{opacity:0}}
                    whileInView={{opacity:1}}
                    viewport={{once: true}}
                    transition={{duration:1, delay:0.5}}
                    className='text-gray-200 md:text-7xl text-5xl tracking-tight mb-4'
                >
                    HEY, I AM <br />
                    <span>SATISH MAHAT</span>
                </motion.p>

                <motion.p
                    initial={{opacity:0}}
                    whileInView={{opacity:1}}
                    viewport={{once: true}}
                    transition={{duration:1, delay:1}}
                    className='text-gray-300 max-w-[300px] md:max-w-[500px] md:text-3xl text-lg mb-6'
                >
                    I am a passionate fullstack developer with few projects to showcase.
                </motion.p>

                <motion.div
                    initial={{opacity:0,y:50}}
                    whileInView={{opacity:1,y:0}}
                    viewport={{once: true}}
                    transition={{duration:1, delay:1.2}}
                    className='flex flex-row items-center gap-4 my-4 md:mb-0'
                >
                        <motion.button whileHover={{scale:1.02,boxShadow:"0px 0px 8px rgba(0,0,0,0.3)"}}
                            className='z-10 cursor-pointer font-bold text-gray-300 md:w-auto p-3 border border-red-700 rounded-2xl text-[18px]'
                        >
                            <a href={pdfFile} download="Satish-Resume.pdf">Download CV</a>
                        </motion.button>

                        <div className='flex gap-4 flex-row text-5xl text-red-700 z-20'>
                            <motion.a whileHover={{scale:1.1}} href='https://github.com/satishmahat' target="_blank">
                                <AiOutlineGithub/>
                            </motion.a>
                            <motion.a whileHover={{scale:1.1}} href='https://www.linkedin.com/in/satishmahat/' target="_blank">
                                <AiOutlineLinkedin/>
                            </motion.a>
                        </div>

                </motion.div>

            </motion.div>

            <motion.img
                src={profilepic}
                className='w-[300px] md:w-[500px] border-b-2 border-gray-400'
                initial={{opacity:0, scale:0.8}}
                whileInView={{opacity:1, scale:1}}
                viewport={{once: true}}
                transition={{duration:1}}
            />
        </div>


        <p className='text-gray-200 flex flex-row text-4xl px-10 md:px-0 w-full justify-center items-center md:pt-24 pt-12'>My Tech Stack</p>        
        <motion.div
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            viewport={{once: true}}
            transition={{duration:1, delay:0.2}}
            className="flex flex-row text-7xl px-12 md:px-0 w-full justify-center items-center md:pb-20 pb-5 md:pt-4 pt-2"
        >
            <DiHtml5 className='text-orange-600 mx-1'/>
            <DiCss3 className='text-blue-600 mx-1'/>
            <DiJavascript1 className='text-yellow-500 mx-1'/>
            <DiReact className='text-blue-600 mx-1'/>
            <DiNodejsSmall className='text-green-600 mx-1'/>
        </motion.div>

    </div>
    </div>
  )
}

export default Hero