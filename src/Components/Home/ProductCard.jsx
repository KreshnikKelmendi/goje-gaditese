import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ProductCard = ({ 
    image, 
    title, 
    description, 
    index, // Pass an index prop for delay
    backgroundColor, // New prop for dynamic background color
}) => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger animation only once
        threshold: 0.1, // Trigger when 10% of the card is visible
    });

    // State to manage hover
    const [isHovered, setIsHovered] = useState(false);

    // Framer Motion animation variants
    const animationVariants = {
        hidden: { opacity: 0, y: 50 }, // Start off-screen below
        visible: { opacity: 1, y: 0 }, // Animate into view at original position
    };

    return (
        <motion.div
            ref={ref}
            className="w-full flex justify-center"
            variants={animationVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.2, // Delay each card based on its index
            }}
        >
            <div
                className="lg:w-[355px] 2xl:w-[465px] 2xl:mx-[5px] lg:h-[518px] 2xl:h-[529px] mb-10 lg:mb-0"
                style={{
                    padding: '15px',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: '10px',
                    backgroundColor: isHovered ? backgroundColor : '#FADEEA', // Change background color on hover
                    transition: 'background-color 0.3s ease',
                }}
                onMouseEnter={() => setIsHovered(true)} // Set hover state to true
                onMouseLeave={() => setIsHovered(false)} // Reset hover state
            >
                <img
                    src={image}
                    alt={title}
                    className="lg:w-[329px] 2xl:w-[459px] lg:h-[282px] 2xl:h-[302px] w-full h-[25vh] object-cover rounded-[10px]"
                />
                <p
                    className="font-custom tracking-[1px] lg:tracking-[3px] leading-[33px]"
                    style={{ color: '#000e5d', fontSize: '32px', margin: '20px 0 10px 0' }}
                >
                    {title}
                </p>
                <p
                    className="leading-[20px] lg:leading-[18px] font-custom1 font-bold tracking-[1px] text-[16px] lg:text-[16px]"
                >
                    {description}
                </p>
            </div>
        </motion.div>
    );
};

export default ProductCard;
