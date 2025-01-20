import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { SlArrowUpCircle } from "react-icons/sl";
import { Link } from 'react-scroll';

const UpButton = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll); 
    return () => window.removeEventListener('scroll', handleScroll); 
  }, []); 

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 ,y: 20 }}
      animate={isScrolled ? { opacity: 1, x:0 , y: 0 } : { opacity: 0, x: 20 , y: 20 }}
      transition={{duration:1.1}}
      className="fixed z-80 bottom-[3%] right-[4%]"
    >
      <Link to="home" offset={-100} smooth={true} duration={500}>
        <SlArrowUpCircle className="text-3xl text-red-800" />
      </Link>
    </motion.div>
  );
};

export default UpButton;
