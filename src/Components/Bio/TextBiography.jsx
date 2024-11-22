import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TextBiography = () => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger animation only once
        threshold: 0.5, // Start animation when 50% of the element is in view
    });

    // Variants for the flip animation (whole title)
    const flipVariants = {
        hidden: { rotateX: -90, opacity: 0 },
        visible: {
            rotateX: 0,
            opacity: 1,
            transition: {
                delay: 0.3, // Delay for the whole text flip animation
                duration: 0.6, // Increase duration for smoother flip
                ease: [0.42, 0, 0.58, 1], // Custom cubic-bezier for easing
            },
        },
    };

    // Variants for paragraph fade-in animation
    const paragraphVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { delay: 1.5, duration: 0.8, ease: 'easeOut' },
        },
    };

    const title = 'NE JEMI GOJËGADITËSET.';

    return (
        <div className="w-full">
            <motion.div
                ref={ref}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={flipVariants}
                className="inline-block tracking-wide"
            >
                <span className="text-[#D53D6E] font-custom  tracking-[1px] lg:tracking-[3px] text-[38px] leading-tight lg:text-[55px] lg:leading-[66px]">
                    {title}
                </span>
            </motion.div>
            <motion.p
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={paragraphVariants}
                className="font-custom1 lg:tracking-[2px] mt-4 text-[16px] font-bold leading-[21.6px]"
            >
                Ne jemi dy shoqe, ku përkatësisht dashurojmë festat dhe ushqimet.
                <br />
                <br />
                Të gjitha produktet e cateringut janë të gatuara në shtëpi nga ne,
                dhe si të tilla mbajnë cilësinë e produkteve që përdor çdo njeri në shtëpi.
            </motion.p>
        </div>
    );
};

export default TextBiography;
