import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import image from "../assets/gg-animation.mp4";

const Banner = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorActive, setCursorActive] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.6,
      },
    },
  };

  const letterAnimation = {
    hidden: { opacity: 0, y: 50, scale: 0.8, rotate: -15 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 6,
      },
    },
  };

  const bgVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.4, 0.01, 0.2, 1],
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="w-full flex flex-col lg:flex-row items-center lg:h-[725px] relative" // Added relative for positioning cursor
      onMouseEnter={() => setCursorActive(true)}
      onMouseLeave={() => setCursorActive(false)}
    >
      {/* Custom Cursor */}
      {cursorActive && (
        <div
          style={{
            position: 'fixed',
            top: cursorPosition.y - 15,
            left: cursorPosition.x - 15,
            width: '30px',
            height: '30px',
            borderRadius: '50%',
            backgroundColor: '#D53D6E',
            border: '2px solid #F3CCE7',
            pointerEvents: 'none',
            transition: 'transform 0.2s ease, background-color 0.2s ease',
            zIndex: 1000,
          }}
        />
      )}

      <div className="lg:w-[70%] bg-[#4A296A] h-[50vh] z-10 lg:rounded-r-full lg:h-full px-5 lg:px-[60px] flex flex-col justify-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="font-custom text-[38px] w-fit 2xl:w-[841px] lg:text-[84px] lg:leading-[83.7px] text-white flex flex-wrap"
        >
          {'GREAT FOOD, AND A GREAT STORY'.split('').map((letter, index) => (
            <motion.span
              key={index}
              variants={letterAnimation}
              className="inline-block"
              whileHover={{ scale: 1.2, color: '#D53D6E' }}
              onMouseEnter={() => setCursorActive(true)}
              onMouseLeave={() => setCursorActive(false)}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}
        </motion.div>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.6, ease: 'easeOut' }}
          className="text-[#D53D6E] mt-10 lg:w-[541px] text-[18px]"
        >
          Si një shpikje e momentit e mamit duke provuar me format prerëse të biskotave.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: '#C22E5E' }}
          className="w-[131px] h-[32px] bg-[#D53D6E] rounded-[20px] text-[#F3CCE7] text-[14px] mt-10"
          onMouseEnter={() => setCursorActive(true)}
          onMouseLeave={() => setCursorActive(false)}
        >
          View More
        </motion.button>
      </div>
      <div className="lg:w-[30%] flex justify-center items-center">
        <video muted playsInline loop autoPlay className="p-8 object-cover" src={image} alt="" />
      </div>
    </motion.div>
  );
};

export default Banner;
