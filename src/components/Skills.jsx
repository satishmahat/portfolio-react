import React from 'react'
import { SiExpress, SiTailwindcss , SiFigma} from "react-icons/si";
import{
    DiCss3,
    DiHtml5,
    DiBootstrap,
    DiJavascript1,
    DiNodejsSmall,
    DiReact,
    DiMongodb,
    DiGithubBadge,
    DiPhp,
} from 'react-icons/di'


const skillItem = [
    {
      imgSrc: <SiFigma/>,
      label: 'Figma',
      desc: 'Design tool'
    },
    {
      imgSrc: <DiHtml5/>,
      label: 'HTML',
      desc: 'Markup Language'
    },
    {
      imgSrc: <DiCss3/>,
      label: 'CSS',
      desc: 'User Interface'
    },
    {
        imgSrc: <SiTailwindcss/>,
        label: 'TailwindCSS',
        desc: 'User Interface'
    },
    {
      imgSrc: <DiJavascript1/>,
      label: 'JavaScript',
      desc: 'Interaction'
    },
    {
        imgSrc: <DiReact/>,
        label: 'React',
        desc: 'Framework'
    },
    {
      imgSrc: <DiNodejsSmall/>,
      label: 'NodeJS',
      desc: 'Web Server'
    },
    {
      imgSrc: <SiExpress/>,
      label: 'ExpressJS',
      desc: 'Node Framework'
    },
    {
      imgSrc: <DiMongodb/>,
      label: 'MongoDB',
      desc: 'Database'
    },
    {
        imgSrc: <DiPhp/>,
        label: 'PHP',
        desc: 'Server Side Script'
    },
    {
      imgSrc: <DiGithubBadge/>,
      label: 'Github',
      desc: 'Version Control'
    },
  ];

const Skills = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-7 md:py-12 py-7">
        <h2 className="text-3xl md:text-5xl text-gray-200 font-semibold mb-3 md:mb-4 text-center"><span>Tools</span> I'm Familiar With</h2>
        <p className="text-center mb-9 text-sm md:text-xl text-gray-300">
        Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.
        </p>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill,minmax(250px,_1fr))]">
        {skillItem.map((skill, index) => (
            <div
            key={index}
            className="flex items-center gap-3 ring-2 ring-inset ring-red-700/40 rounded-xl p-3 hover:bg-zinc-800 transition-colors group"
            >
            <figure className="bg-zinc-800 rounded-lg overflow-hidden w-12 h-12 p-2 group-hover:bg-zinc-900 transition-colors">
                <span className="text-3xl">{skill.imgSrc}</span>
            </figure>
            <div>
                <h3 className='text-zinc-950 group-hover:text-gray-200 transition-colors' >{skill.label}</h3>
                <p className="text-gray-200 text-sm">{skill.desc}</p>
            </div>
            </div>
        ))}
        </div>
    </div>

  )
}

export default Skills