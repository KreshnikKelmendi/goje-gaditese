import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { dataGalery } from './dataGalery';

const GalleryItem = ({ item, index }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <motion.div
            ref={ref}
            key={item.title}
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={
                inView
                    ? {
                        opacity: 1,
                        scale: 1,
                        rotate: 0,
                    }
                    : {}
            }
            transition={{
                duration: 1,
                ease: [0.6, -0.05, 0.01, 0.99],
                delay: index * 0.15,
                type: "spring",
                stiffness: 120,
            }}
            className="overflow-hidden"
        >
            <motion.img
                src={item.image}
                alt={item.title}
                className="w-full h-[35vh] lg:h-[351px] 2xl:h-[40vh] object-cover transform transition-all duration-500 hover:scale-105 rounded-[10px] "
                whileHover={{ rotate: 2, scale: 1.05 }}
            />
            {/* <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: inView ? 1 : 0, y: 0 }}
                transition={{
                    delay: index * 0.15 + 0.1,
                    duration: 0.6,
                }}
                className="mt-4 text-[16px] font-custom text-[#1F1634] px-1"
            >
                {item.title}
            </motion.p> */}
        </motion.div>
    );
};

const Galery = () => {
    const titleText = "GALERIA";
    const descriptionText = "Shiko galerinë, zbulo shijen që po t’pret!";

    return (
        <>
            {/* Header Section */}
        
        <div className="flex flex-col lg:flex-row lg:h-[307px] 2xl:h-[35vh] px-6 py-16 lg:py-0 lg:items-center bg-[#1F1634] lg:px-[60px]">
            {/* Animated Title */}
            <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
                }}
                className="text-[44px] lg:text-[84px] font-custom tracking-[3px] mb-2 text-[#FADEEA]"
            >
                {titleText.split("").map((char, index) => (
                    <motion.span
                        key={index}
                        variants={{
                            hidden: { opacity: 0.6, y: 10 },
                            visible: { opacity: 1, y: 0 },
                        }}
                    >
                        {char}
                    </motion.span>
                ))}
            </motion.div>

            {/* Animated Description */}
            <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { staggerChildren: 0.02 } },
                }}
                className="text-[16px] font-custom1 leading-[21.6px] font-bold tracking-[1px] lg:tracking-[2px] lg:w-[625px] text-[#FADEEA] lg:ml-44"
            >
                {descriptionText.split("").map((char, index) => (
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
            </motion.div>
        </div>

            {/* Gallery Grid */}
            <div className="w-full px-6 lg:px-[60px] mt-12">
                <div className="grid lg:grid-cols-2 gap-x-6 gap-y-6">
                    {dataGalery?.map((item, index) => (
                        <GalleryItem key={item.title} item={item} index={index} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Galery;
