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
                className="w-full transform transition-all duration-500 hover:scale-105 rounded-[10px]"
                whileHover={{ rotate: 2, scale: 1.05 }}
            />
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: inView ? 1 : 0, y: 0 }}
                transition={{
                    delay: index * 0.15 + 0.1,
                    duration: 0.6,
                }}
                className="mt-4 text-[16px] font-custom text-[#1F1634] px-1"
            >
                {item.title}
            </motion.p>
        </motion.div>
    );
};

const Galery = () => {
    return (
        <>
            {/* Header Section */}
            <div className="flex flex-col lg:flex-row lg:h-[307px] px-5 py-16 lg:py-0 lg:items-center bg-[#1F1634] lg:px-[60px]">
                <p className="text-[44px] lg:text-[84px] font-custom1 mb-2 text-[#FADEEA]">GALERIA</p>
                <p className="text-[18px] font-custom leading-[21.6px] text-justify tracking-tighter lg:w-[625px] text-[#FADEEA] lg:ml-44">
                    Të gjitha produktet e cateringut janë të gatuara në shtëpi nga ne, dhe si të tilla mbajnë cilësinë e produkteve që përdor çdo njeri në shtëpi
                </p>
            </div>

            {/* Gallery Grid */}
            <div className="w-full px-5 lg:px-[60px] mt-12">
                <div className="grid lg:grid-cols-2 gap-x-6 gap-y-12">
                    {dataGalery?.map((item, index) => (
                        <GalleryItem key={item.title} item={item} index={index} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Galery;
