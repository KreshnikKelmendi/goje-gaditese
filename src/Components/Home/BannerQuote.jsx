import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import firstImage from "../assets/two-woman-are-making-turkish-ravioli-with-meatball-2023-11-27-05-17-17-utc.png";
import { Link } from 'react-router-dom';

const BannerQuote = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  // Variants for the text animation
  const waveVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
  };

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smoth' });
  };

  return (
    <div ref={ref} className="relative w-full mt-0 lg:mt-12 px-6 lg:px-[60px]">
      <motion.div
        className="bg-[#D53D6E] h-auto 2xl:h-[25vh] py-12 px-4 lg:px-[10px] rounded-[10px] flex flex-col lg:flex-row lg:justify-around lg:items-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* Large text */}
        <div className="text-[38px] font-custom tracking-[3px] uppercase font-medium lg:text-[60px] text-white leading-tight lg:leading-[60px]">
          {'MENU'.split('').map((char, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={waveVariant}
              initial="hidden"
              animate={inView ? 'visible' : ''}
            >
              {char}
            </motion.span>
          ))}
        </div>

        <motion.p
          className="text-[16px] lg:w-[481px] lg:text-[16px] font-bold text-white leading-[21.96px] mt-6 lg:mt-0 font-custom1 tracking-[1px] lg:tracking-[2px]"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
        >
          <span className="text-white">
            Gojë Gaditëse është një projekt i cili ofron shërbim catering dhe organizim eventesh!
          </span>
          <br /> <br />
          Të gjitha produktet e cateringut janë të gatuara në shtëpi nga ne, dhe si të tilla mbajnë
          cilësinë e produkteve që përdor çdo njeri në shtëpi.
        </motion.p>

        <div
          className=""
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6, ease: 'easeOut' }}
        >
          <Link to="/menu" onClick={handleClick}>
          <p>
            <button className="w-full lg:w-[157px] lg:h-[32px] flex py-3 lg:py-0 justify-center items-center rounded-[20px] mt-8 lg:mt-0 bg-[#1F1634] text-[#FADEEA] font-custom hover:bg-[#D53D6E]">
              Shiko më shumë
            </button>
            </p>
          </Link>
        </div>
      </motion.div>

      <motion.div
        className="w-full mt-8"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.8, duration: 0.6, ease: 'easeOut' }}
      >
        <img
          src={firstImage}
          alt=""
          className="w-full h-[426px] 2xl:h-[50vh] object-cover rounded-[10px]"
        />
      </motion.div>
    </div>
  );
};

export default BannerQuote;
