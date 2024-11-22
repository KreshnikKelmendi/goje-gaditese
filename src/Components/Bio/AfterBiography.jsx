import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import imageCatering from '../assets/iamge-catering.png';

const AfterBiography = () => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger only once when it enters the view
        threshold: 0.5, // Trigger when 50% of the component is in view
    });

    return (
        <div className="relative w-full">
            {/* Image Section */}
            <div className="w-full mt-12 lg:mt-24">
                <img className="w-full object-cover h-[794px] 2xl:h-[75vh] rounded-[10px]" alt="" src={imageCatering} />
            </div>

            {/* Text Section */}
            <motion.div
                ref={ref} // Connect the intersection observer
                initial={{ scale: 0.8, opacity: 0 }} // Start with scaled down and invisible
                animate={{
                    scale: inView ? 1 : 0.8, // Scale up to full size when in view
                    opacity: inView ? 1 : 0, // Fade in when in view
                    transition: { duration: 1, ease: "easeOut" }, // Smooth transition
                }}
                className="absolute inset-0 flex justify-center items-center px-5"
            >
                <div className="bg-[#FADEEA] flex flex-col justify-center lg:items-center lg:w-[778px] h-[476px] text-white px-6 py-3 rounded-md">
                    <h1 className="text-[29px] lg:text-[50px] tracking-[1px] lg:tracking-[2px] font-custom lg:w-[652px] text-[#4A296A] uppercase leading-tight lg:leading-[62px]">
                        SHËRBIMI I CATERING-UT NGA SHTËPIA NË BIZNES
                    </h1>
                    <p className='lg:w-[652px] mt-4 text-[#4A296A] font-custom1 tracking-[1px] lg:tracking-[3px] text-[16px] lg:text-[16px] font-bold'>
                        Ne, me pasionin dhe përkushtimin tonë, krijojmë tavolina që ju shtojnë oreksin dhe e shndërrojnë çdo festë në një përvojë të paharrueshme. 
                        <br /> <br />
                        Ushqimet tona janë të gjitha të përsonalizuara në fokus me risitë dhe trendet e fundit në gastronomi. Organizimi i festave me ne nënkupton më shumë se thjesht ushqim të mirë – është arti i detajeve, prezantimi estetik dhe dashuri për mikpritjen.
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default AfterBiography;
