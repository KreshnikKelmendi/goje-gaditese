import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ProdCard = ({ product, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation only triggers once when in view
    threshold: 0.2, // Triggers when 20% of the card is in view
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.2, // Stagger effect based on index
        duration: 0.6,
        type: 'spring',
        damping: 20,
      },
    }),
  };

  return (
    <motion.div
      ref={ref}
      className="flex flex-col lg:flex-row py-6 px-4 lg:py-4 mb-4 rounded-[10px] transition-all duration-300"
      style={{
        backgroundColor: '#FADEEA', // Default color for all cards
        transition: 'background-color 0.3s ease-in-out', // Smooth transition
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = product.backgroundColor; // Change to product-specific color
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = '#FADEEA'; // Revert to default color
      }}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      custom={index}
    >
      <img
        src={product.image}
        alt={product.title}
        className="h-[30vh] lg:w-[250px] lg:h-full 2xl:h-[250px] rounded-[10px] object-cover"
      />
      <div className="flex flex-col justify-center mt-2 lg:mt-0 lg:p-4 lg:w-2/3 2xl:ml-5">
        <div>
          <p
            className="text-[32px] font-custom leading-[30.8px]"
            // style={{ color: product.titleColor }}
          >
            {product.title}
          </p>
          <p
            className="mt-5 text-[16px] tracking-[1px] lg:tracking-[2px] leading-[18px] font-custom1 font-bold"
            // style={{ color: product.descriptionColor }}
          >
            {product.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ProdCard;
