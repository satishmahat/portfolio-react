import React from "react";
import {motion} from 'framer-motion'
import { FaGithub, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <motion.div 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        viewport={{once:true}}
        transition={{duration:2.5}}
        className="max-w-[1300px] mx-auto grid md:grid-cols-3 gap-10 px-7 md:px-20"
      >
        {/* Brand and About */}
        <div className="space-y-4">
          <h3 className="text-2xl text-red-600 font-semibold">Satish Mahat</h3>
          <p className="text-sm md:text-base">
            Passionate full-stack developer focused on building modern and responsive web applications. 
            Connect with me to bring ideas to life.
          </p>
          <div className="flex gap-6 text-red-600 text-2xl">
            <a href="#" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" aria-label="Facebook">
              <FaFacebook />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-2xl text-red-600 font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm underline">
            <li>
              <a href="#home" className="hover:text-red-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-red-400 transition">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-red-400 transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-red-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-2xl text-red-600 font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>Email: <a href="mailto:satishmahat@gmail.com" className="hover:text-red-400 transition">mahatsatish@gmail.com</a></li>
            <li>Phone: <a href="tel:+1234567890" className="hover:text-red-400 transition">+977-9846089890</a></li>
            <li>Location: Kathmandu, Nepal</li>
          </ul>
        </div>
      </motion.div>

      {/* Footer Bottom */}
      <div className="text-center mt-10 border-t border-gray-700 pt-6">
        <p className="text-sm text-gray-400">
          © 2024 Satish Mahat. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
