import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import image from "../assets/gg-animation.mp4";
import { Link } from 'react-router-dom';

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.5,
      },
    },
  };

  const wordAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 6,
      },
    },
  };

  const textDescription = "Gojë Gaditëse është një markë e njohur në fushën e catering-ut, duke kombinuar përkushtimin ndaj cilësisë dhe shijes me një qasje tërheqëse për klientët që kërkojnë diçka më shumë për eventet e tyre.";

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="w-full flex flex-col-reverse lg:flex-row items-center lg:h-[725px] relative"
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

      <div className="lg:w-[70%] bg-[#4A296A] h-[55vh] z-10 lg:rounded-r-full lg:h-full px-6 lg:px-[60px] flex flex-col justify-center">
        <motion.div
          variants={containerVariants}
          className="font-custom text-[38px] tracking-[2px] lg:tracking-[3.5px] w-fit 2xl:w-[1041px] lg:text-[84px] leading-tight lg:leading-[83.7px] text-white flex flex-wrap"
        >
          <motion.span
            variants={wordAnimation}
            className="inline-block mr-2"
            whileHover={{ scale: 1, color: '#D53D6E' }}
            onMouseEnter={() => setCursorActive(true)}
            onMouseLeave={() => setCursorActive(false)}
          >
            SHËRBIMI I CATERING-UT NGA SHTËPIA NË BIZNES!
          </motion.span>
        </motion.div>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0.2 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.03,
                ease: 'easeInOut',
              },
            },
          }}
          className="text-white tracking-[1px] lg:tracking-[2px] mt-10 lg:w-[541px] text-[16px] font-custom1 font-bold leading-[21.6px]"
        >
          {textDescription.split("").map((char, index) => (
            <motion.span
              key={index}
              variants={{
                hidden: { opacity: 0.2, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              {char}
            </motion.span>
          ))}
        </motion.p>
        <Link to="/kush-jemi" onClick={handleClick}>
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: '#C22E5E' }}
            className="w-full lg:w-[157px] flex justify-center items-center font-custom lg:h-[34px] bg-[#D53D6E] py-3 lg:py-0 rounded-[20px] text-[#FADEEA] mt-10"
            onMouseEnter={() => setCursorActive(true)}
            onMouseLeave={() => setCursorActive(false)}
          >
            Shiko më shumë
          </motion.button>
        </Link>
      </div>
      <div className="lg:w-[35%] 2xl:w-[30%] bg-white flex justify-center items-center">
        <video muted playsInline loop autoPlay className="p-8 object-cover" src={image} alt="" />
      </div>
    </motion.div>
  );
};

export default Banner;
