import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";


export default function Hero() {
  return (
    <section id='home' className="flex  items-center pt-[120px] bg-radial-ellipse justify-left text-left">
     <div className="flex flex-col md:flex-row mx-5">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl ms-3 md:text-8xl w-full md:w-2/3 font-customFont-100 mb-6 tracking-[0.1em] text-gray-500"
      >
        ONE STOP DESTINATION FOR YOUR BUSINESS SOLUTIONS
      </motion.h1>

      <div className="flex flex-col justify-center items-center">
      <motion.img src="/images/N_Logo.png" alt="Nobi Logo" 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-[150px] h-[100px] md:w-[300px] md:h-[250px] object-contain mb-4 md:w-1/3"/>
         <motion.p className="text-center w-full px-5"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}>
          A team of experts<br/>
          providing you business solutions<br/>
          to exporsure rapid growth.<br/>
          We provide 360<sup>°</sup> total branding solutions<br/>
          and ensure that there is no part of<br/>
          your brand's story that's left untold.<br/>
          Working closely with your sales team<br/>
          We develop strategies that takes<br/>
          your business closer to the customer.
          {/* A dedicated team <br/>of professionals working together<br/> on your brand.
          <br/>Providing a 360<sup>°</sup> total branding solution for your business.<br/>
          And ensuring there is no part of the brand’s story
          that’s left untold. Extensive brainstorming sessions with your sales team
          ensures every idea is expressed in the most of effective way. */}
         </motion.p> 
      </div> 
      </div>
    </section>
  );
}