import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaMobile } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";
import { CiMobile1 } from "react-icons/ci";

function Footer() {
  return <> 
     <div className='bg-radial-ellipse py-8 md:py-3'>
        <h1 className='text-brand text-center font-bold text-xl'>Contact</h1>
        <div className='flex flex-col md:flex-row items-center md:justify-around'>
        <div className='my-3'>
          <h3 className='text-xl'>India</h3>
          <p>No.10 Haddows Road,<br/>
          Thousands Lights West,<br/>
          Nungambakkam,<br/>
          Chennai - 600006<br/>
          <span  className='flex items-center gap-2'>
            <CiMobile1 color='text-gray'/>+91 98407 03111
          </span> 
          </p>
        </div>

        <div className='my-3'>
          <h3 className='text-xl'>USA</h3>
          <p>2652, Carrickton Circle,<br/>
          Orlando,<br/>
          Florida - 32824<br/>
          <span className='flex items-center gap-2'><CiMobile1 color='text-gray'/>+1 (937) 803-3828</span>
          <span className='flex items-center gap-2'><CiMobile1 color='text-gray'/>+1 (848) 219-3756</span>
          </p>
        </div>

        <div className='flex my-5 gap-4 justify-end items-end'>

            <a href='https://www.facebook.com/share/1GQ8B1y2T3/?mibextid=wwXIfr' target='_blank'><FaFacebookF color='#20576E' className='cursor-pointer' size={20}/></a>

            <a href='https://www.instagram.com/nobi_corporation?igsh=NHk1cjByOXZmd2Vs&utm_source=qr' target='_blank'><RiInstagramFill color='#20576E' className='cursor-pointer' size={20}/></a>

            <a href='https://www.linkedin.com/company/nobi-corporation/' target='_blank'><FaLinkedinIn color='#20576E' className='cursor-pointer' size={20}/></a>
            
            <a href='mailto:augustine@nobicorporation.com' target='_blank'><MdEmail color='#20576E' className='cursor-pointer' size={20}/></a>

        </div>
    
      </div>
      <hr className='mx-5 border-brand'/>
      <p className='text-gray-500 my-2 text-center text-sm md:text-base'>Copyrights 2025 © All rights reserved by Nobi Corporation.</p>
     </div>
  </>
}

export default Footer