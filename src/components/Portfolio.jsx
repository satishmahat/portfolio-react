import React from 'react'
import project1 from '../assets/project1.jpg'
import project2 from '../assets/project2.jpg'
import project3 from '../assets/project3.jpg'
import project4 from '../assets/project4.jpg'
import {AiOutlineGithub} from 'react-icons/ai'
import {motion} from 'framer-motion'

const projects = [
    {
        img: project1,
        title: "Website of OSD2",
        description: "A website for a company using React.",
        links: {
            site: "https://oshosustainable.netlify.app/",
            github: "https://github.com/satishmahat/OSD2"
        }
    },
    {
        img: project2,
        title: "Website of Grace Clinc",
        description: "A website for a company using React.",
        links: {
            site: "https://gracedentalcare.netlify.app/",
            github: "https://github.com/satishmahat/grace-react"
        }
    },
    {
        img: project3,
        title: "Personal Website",
        description: "A portfolio website using React",
        links: {
            site: "https://satishmahat.github.io/portfolio-react/",
            github: "https://github.com/satishmahat/portfolio-react"
        }
    },
    {
        img: project4,
        title: "Weather App",
        description: "A weather app using JavaScript.",
        links: {
            site: "#",
            github: "https://github.com/satishmahat/portfolio-react/js-weather-app"
        }
    },
]

const Portfolio = () => {
  return (
    <div className='max-w-[1200px] mx-auto p-7 ' id='portfolio'>
        <h2 className='text-5xl  text-gray-200 mb-9 text-center'>Portfolio</h2>

        {projects.map((project,index) => (
            <div key={index} className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse':''} mb-10 border-b border-red-700 rounded-md md:border-0`}>
                <motion.div 
                    initial={{opacity:0,x: index % 2 !== 0 ? 20 : -20}}
                    whileInView={{opacity:1,x:0}}
                    transition={{duration:1.4}}
                    className='w-full md:w-1/2 '
                >
                    <img 
                        src={project.img} 
                        alt={project.title} 
                        className='w-full h-full object-cover rounded-lg shadow-lg'
                    />
                </motion.div>
                <motion.div 
                    initial={{opacity:0,x: index % 2 !== 0 ? -20 : 20}}
                    whileInView={{opacity:1,x:0}} 
                    transition={{duration:1.4}}
                    className={`w-full md:w-1/2 pt-4 md:p-4 flex flex-col justify-center ${index % 2 !== 0 ? 'md:items-end':''}`}
                >

                    <h3 className='text-2xl font-semibold text-gray-200'>{project.title}</h3>
                    <p className='text-gray-300 mb-2'>{project.description}</p>
                    <div className='flex space-x-4 mb-4 md:mb-0'>
                        <a href={project.links.site} target='_blank' className='px-4 py-2 bg-red-700 text-gray-200 rounded-lg hover:bg-red-800 transition duration-300'>View Site</a>
                        <a href={project.links.github} target='_blank' className='px-3 py-3 bg-red-700 text-gray-200 rounded-lg hover:bg-red-800 transition duration-300 '><AiOutlineGithub/></a>
                    </div>
                </motion.div>
            </div>
        ))}
    </div>
  )
}

export default Portfolio