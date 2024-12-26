import React from 'react'
import{
    DiCss3,
    DiHtml5,
    DiBootstrap,
    DiJavascript1,
    DiNodejsSmall,
    DiReact,
    DiMongodb,
    DiGithubBadge
} from 'react-icons/di'

const skills =[
    {
        category: 'Frontend',
        technologies: [
            {name: 'HTML',icon: <DiHtml5 className='text-orange-600'/>},
            {name: 'CSS',icon: <DiCss3 className='text-blue-600'/>},
            {name: 'BootStrap',icon: <DiBootstrap className='text-purple-600'/>},
            {name: 'JavaScript',icon: <DiJavascript1 className='text-yellow-500'/>},
            {name: 'React',icon: <DiReact className='text-blue-500'/>},

        ]
    },
    {
        category: 'Fullstack',
        technologies: [
            {name: 'Node JS',icon: <DiNodejsSmall className='text-green-500'/>},
            {name: 'MongoDB',icon: <DiMongodb className='text-green-600'/>},
            {name: 'React',icon: <DiReact className='text-blue-500'/>},
            {name: 'Github',icon: <DiGithubBadge className='text-gray-600'/>}
        ]
    }
]

const Skills = () => {
  return (
    <div className='flex flex-col justify-content px-7 text-gray-200 py-7 md:py-7' id='skills'>
        <h2 className="text-4xl font-bold mb-4 text-center">Skills</h2>
        <p className='text-center mb-7'>
            I worked on various frontend and fullstack projects.
        </p>
        
        <div className='flex flex-col md:flex-row justify-center sapce-y-8 md:space-y-0 md:space-x-8 max-w-[1000px] mx-auto gap-8'>
            {skills.map((skill,index) => (
                <div key={index} className='border border-red-500 p-6 rounded-lg bg-red-700/10 shadow-lg w-full md:w-1/2'>
                    <h3 className='text-3xl mb-5 text-center'>{skill.category}</h3>
                    <div className='grid grid-cols-2 gap-4'>
                        {skill.technologies.map((tech,idx) =>(
                            <div key={idx} className='flex items-center space-x-2'>
                                <span className='text-3xl'>{tech.icon}</span>
                                <span className='text-xl md:text-2xl'>{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Skills