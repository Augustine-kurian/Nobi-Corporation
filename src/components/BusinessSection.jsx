  import { useState,useEffect, useRef } from 'react'
  import { Canvas } from '@react-three/fiber'
  import { businessData } from '../data/business';
  import useScrollAnimation  from '../hooks/useScrollAnimation';
  import Jellyfish from './JellyFish';
import Tower from './Tower';
import Ball from './Ball';
 

  function BusinessSection({heading, headingDesc, topics, image, type, category, index}) {

    const bgClass = index % 2 === 0 ? 'bg-radial-ellipse-even' : 'bg-radial-ellipse';
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedDesc, setSelectedDesc] = useState('');
    const [activeTopicIndex, setActiveTopicIndex] = useState(null);

    const headingId = heading.toLowerCase().replace(/\s+/g,"-")

  const triggerRef = useRef(null);
  const modalRef = useRef(null);

  const topicRefs = useRef([]);
  const typeCategoryRef = useRef(null)


  useScrollAnimation({ref:typeCategoryRef,
                      animationClass:'animate-slideInLeft',
                      threshold:0.1
                    })


useEffect(() => {
  if (topicRefs.current.every(ref => ref !== null)) {
    const callback = (entries) => {
      entries.forEach((entry) => {
        const target = entry.target;
        if (entry.isIntersecting) {
          target.classList.add('animate-slideInRight');
        } else {
          target.classList.remove('animate-slideInRight');
        }
      });
    };

    const observer = new IntersectionObserver(callback, { threshold: 0.1 });

    topicRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }
}, [topics]);


    return (
      <section id='business' className={`${bgClass} w-full`}>
  
          <div className="flex relative flex-col items-center justify-center py-[50px]">
            <h1 id={`${headingId}`} className="text-4xl md:text-8xl font-thin mb-6 tracking-[0.2em] md:tracking-[0.3em] text-gray-500 w-full mt-[0px] md:mt-[150px] text-center relative">
              {heading}  
            </h1>   
            <p className='md:text-center md:w-1/2 px-5 md:px-0'>
              {headingDesc}
            </p>
          {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none w-full h-full">
          {/* <Canvas
            camera={{ position: [0, 0, 10], fov: 35 }}
            style={{ background: 'transparent' }}
            className="w-full h-full"
          > */}
            {/* 👇 JELLYFISH — Top Left */}
             {/* <Jellyfish src={image} size={220} />  */}

            {/* 👇 TOWER — Center Right */}
             {/* <Tower src="./images/img2.png" size={200} />  */}

            {/* 👇 BALL — Bottom Left */}
             {/* <Ball src={image} size={180} />  */}

            {/* Optional: Add ambient light for softness */}
        
{/*         
            <ambientLight intensity={0.4} />
            <directionalLight position={[1, 1, 1]} intensity={0.6} />
          </Canvas> */}
        {/* </div>       */} 
        </div>

        <div className="flex flex-col md:flex-row items-center items-stretch justify-center">
          <div className='w-1/2 flex items-end justify-center'>
          <div ref={typeCategoryRef} className='flex gap-4 mb-4 slideLeft'>

          </div>
        </div>



          <div className='w-full md:w-1/2 flex flex-col items-start justify-start mb-4'> 
            <ul className='list-style-none text-xl ms-[3rem] md:mt-5 gap-3 flex flex-col'>
              {
                topics.map((topic, index) => (  
                  <li key={index} ref={(ele) => topicRefs.current[index] = ele}
                  className='slideRight'>
                  <a href='#'
                  onMouseEnter={(e) =>{
                    e.preventDefault();
                    setIsModalOpen(true);
                    setActiveTopicIndex(index);
                    setSelectedDesc(topic.desc)
                  }}
                  
                  onMouseLeave = {(e) =>{
                    e.preventDefault();
                    setIsModalOpen(false);
                  }}>{topic.topic}</a>

                {((activeTopicIndex === index) && isModalOpen) ? (
                 <div ref={modalRef} className="p-2 animate-fadeInUp rounded shadow-lg max-w-lg">
                  {/* <button
                    id={`closeModalButton${index}`}
                    onMouseEnter={() => {
                      setIsModalOpen(false);
                      setActiveTopicIndex(null);
                    }}
                    className="flex absolute top-2 right-4 justify-end bg-transparent border-none text-black font-bold text-lg cursor-pointer hover:text-#ffffff-500"
                  >
                  ×
                </button> */}
            <p className="mt-8 text-sm md:text-xl">{selectedDesc}</p>
          </div>) : null}
                  </li>
                ))
              }
            </ul>
          </div> 
        </div>
      </section>
    )
  }

  export default BusinessSection
