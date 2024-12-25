import React , {useEffect , useState} from 'react'
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


const Hero = () => {
  return (
    <div>
    <div className='mt-28 max-w-[1200px] mx-auto relative'>
        <div className='grid md:grid-cols-2 place-items-center gap-8'>
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
                    className='font-bold text-gray-400 text-2xl md:text-5xl italic '
                />

                <motion.p
                    initial={{opacity:0}}
                    whileInView={{opacity:1}}
                    viewport={{once: true}}
                    transition={{duration:1, delay:0.5}}
                    className='text-gray-200 md:text-7xl text-5xl tracking-tight mb-4'
                >
                    HEY, I AM <br />
                    <span className='text-purple-500'>SATISH MAHAT</span>
                </motion.p>

                <motion.p
                    initial={{opacity:0}}
                    whileInView={{opacity:1}}
                    viewport={{once: true}}
                    transition={{duration:1, delay:1}}
                    className='text-gray-300 max-w-[300px] md:max-w-[500px] md:text-3xl text-lg mb-6'
                >
                    I am a passionate fullstack developer with experience in few projects.
                </motion.p>

                <motion.div
                    initial={{opacity:0,y:50}}
                    whileInView={{opacity:1,y:0}}
                    viewport={{once: true}}
                    transition={{duration:1, delay:1.5}}
                    className='flex flex-row items-center gap-4 my-4 md:mb-0'
                >
                        <motion.button whileHover={{scale:1.05,boxShadow:"0px 0px 8px rgba(0,0,0,0.3)"}}
                            className='z-10 cursor-pointer font-bold text-gray-200 md:w-auto p-4 border border-purple-400 rounded-xl'
                        >
                            Download CV
                        </motion.button>

                        <div className='flex gap-4 flex-row text-4xl md:text-6xl text-purple-400 z-20'>
                            <motion.a whileHover={{scale:1.2}} href='#'>
                                <AiOutlineGithub/>
                            </motion.a>
                            <motion.a whileHover={{scale:1.2}} href='#'>
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

        <motion.div
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            viewport={{once: true}}
            transition={{duration:1, delay:2}}
            className="flex flex-row text-7xl px-12 md:px-0 w-full justify-center items-center py-24"
        >
            <p className='text-gray-200 mr-6'>My Tech Stack</p>
            <DiHtml5 className='text-orange-600 mx-2'/>
            <DiCss3 className='text-blue-600 mx-2'/>
            <DiJavascript1 className='text-yellow-500 mx-2'/>
            <DiReact className='text-blue-600 mx-2'/>
            <DiNodejsSmall className='text-green-600 mx-2'/>
        </motion.div>

    </div>
    </div>
  )
}

export default Hero