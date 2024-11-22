import React from 'react';
import img from "../assets/employee-puts-plate-with-tasty-fresh-croissant-ont-2023-11-27-05-13-42-utc.png"
import firstImg from "../assets/image 7.png"
import secondImg from "../assets/image8.png"
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
    const { ref, inView } = useInView({ triggerOnce: true });
    const { ref: leftRef, inView: leftInView } = useInView({ triggerOnce: true });
    const { ref: rightRef, inView: rightInView } = useInView({ triggerOnce: true });

    const waveAnimation = {
        hidden: { y: 50, opacity: 0 },
        visible: (i) => ({
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                delay: i * 0.2, // Staggered wave effect
                ease: "easeOut",
            },
        }),
    };

    const blurAnimation = {
        hidden: { filter: 'blur(20px)', opacity: 0 },
        visible: { 
            filter: 'blur(0px)', 
            opacity: 1, 
            transition: { duration: 0.8, ease: 'easeOut' } 
        },
    };

    const linearAnimation = {
        hidden: { x: -100, opacity: 0 },
        visible: { 
            x: 0, 
            opacity: 1, 
            transition: { duration: 0.8, ease: 'linear' } 
        },
    };

    
    return (
        <>
             
             <div className='w-full container mx-auto'>
            <div className="w-full flex flex-col lg:flex-row justify-between items-start px-6 lg:px-[60px] mt-12 lg:mt-28">
                {/* Left Section */}
                <motion.div
                    ref={leftRef}
                    className="lg:w-1/2"
                    initial="hidden"
                    animate={leftInView ? "visible" : "hidden"}
                    variants={waveAnimation}
                    custom={0} // Delay multiplier for wave effect
                >
                    <p className='text-[38px] leading-tight lg:text-[55px] tracking-[3px] lg:leading-[62px] uppercase font-custom text-[#4A296A]'>
                        Shërbimi i Catering-ut nga Shtëpia në Biznes
                    </p>
                </motion.div>

                {/* Right Section */}
                <motion.div
                    ref={rightRef}
                    className="lg:w-1/2"
                    initial="hidden"
                    animate={rightInView ? "visible" : "hidden"}
                    variants={waveAnimation}
                    custom={1} // Delay multiplier for wave effect
                >
                    <p className='font-custom1 text-[16px] leading-[21.6px] tracking-[1px] text-[#1F1634] pt-6 lg:pl-8 font-bold lg:tracking-[3px] lg:pt-0 2xl:mr-16'>
                        Pas disa muajve suksesi si start-up, Goje Gaditese mori hapat e parë drejt profesionalizimit dhe transformimit në një biznes të plotë. Me kalimin e kohës, kompania ka ndërtuar një reputacion të fortë për organizimin e eventeve të ndryshme, si dasma, festa private, konferenca dhe ngjarje korporative, duke ofruar menu të personalizuara për çdo mundësi. <br /><br />
                        Ne ofrojmë një gamë të gjerë opsionesh ushqimore, nga gatime tradicionale shqiptare deri tek kuzhina ndërkombëtare dhe mundësi për dieta të veçanta.
                    </p>
                </motion.div>
            </div>
        </div>

        <div className='w-full px-6 lg:px-[60px] pt-4 lg:pt-0 lg:my-16'>
            <motion.div
                ref={ref}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={blurAnimation}
                className='w-full'
            >
                <img
                    src={img}
                    alt=''
                    className='w-full h-[25vh] lg:h-[476px] 2xl:h-[55vh] object-cover rounded-[10px]'
                />
            </motion.div>
        </div>

            <div className='w-full px-6 lg:px-[60px] mt-10 lg:mt-0'>
            {/* Title */}
            <motion.p
                ref={ref}
                className='text-[28px] lg:text-[48px] text-[#D53C6F] font-custom tracking-[1px] lg:tracking-[3px] uppercase w-full lg:w-[1126px] 2xl:w-[1440px] leading-tight lg:leading-[62.85px]'
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={linearAnimation}
            >
                Gojë Gaditëse është një projekt i cili ofron shërbim catering dhe organizim eventesh!
            </motion.p>

            {/* Description */}
            <motion.p
                className='text-[16px] tracking-[1px] lg:tracking-[3px] font-bold text-[#1F1634] font-custom1 lg:w-[732px] leading-[21.16px] mt-2'
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={linearAnimation}
                transition={{ delay: 0.4 }} // Add delay for staggered effect
            >
                Biznesi tani përfshin një ekip të dedikuar dhe pajisje moderne, që mundësojnë një përvojë të shkëlqyer dhe shërbim të shpejtë dhe të besueshëm. <br /> <br />
                Gojë Gaditëse ka investuar gjithashtu në menaxhimin e cilësisë dhe logjistikës, duke siguruar që çdo event të jetë pa stres dhe e organizuar në mënyrë perfekte, nga transportimi i ushqimit deri tek dekorimi i hapësirës.
            </motion.p>
        </div>

            <div className='w-full lg:px-[60px] px-6 mt-6 lg:mt-14'>
                <div className='grid lg:grid-cols-2 gap-x-6 gap-y-6'>
                    <img src={firstImg} alt='' className='w-full lg:h-[480px] 2xl:h-[55vh] object-cover rounded-[10px]' />
                    <img src={secondImg} alt='' className='w-full lg:h-[480px] 2xl:h-[55vh] object-cover rounded-[10px]' />
                </div>
            </div>
        </>
    );
};

export default About;
