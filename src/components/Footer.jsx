import React from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <hr className='hidden dark:block' />

      <div className='w-full flex flex-col md:flex-row py-20 px-8 md:px-10 gap-10 lg:gap-20 justify-between '>
        <p className='text-lg text-white font-semibold '>
          SAS Nagar, Mohali, PUNJAB
        </p>

        <div className='flex flex-col md:flex-row text-md gap-5 md:gap-20 text-white '>
          <a href='#home'>Home</a>
          <a href='#about'>About</a>
          <a href='#projects'>Projects</a>
        </div>

        <div className='flex flex-col gap-5 text-md text-white '>
          <p>anubhavkumar406@gmail.com</p>
          <p>+91 8544 219 211</p>
        </div>
      </div>

      <div className='flex flex-col gap-10 items-center justify-center pb-20 '>
        <p className='text-white font-semibold tracking-wider'>Social Media</p>

        <div className='flex gap-10 text-white text-2xl mb-10'>
          <a href='https://github.com/Ak6355' target='_blank' rel='noopener noreferrer'>
            <FaGithub className='hover:scale-125' />
          </a>

          <a href='https://www.linkedin.com/in/anubhav-kumar-045676230/' target='_blank' rel='noopener noreferrer'>
            <BsLinkedin className='hover:scale-110' />
          </a>

          <a href='https://x.com/itsak_27' target='_blank' rel='noopener noreferrer'>
            <AiFillTwitterCircle className='hover:scale-125' />
          </a>
        </div>

        <p className='text-gray-400 text-md tracking-wider'>@2025 Anubhav</p>
      </div>
    </footer>
  );
};

export default Footer;