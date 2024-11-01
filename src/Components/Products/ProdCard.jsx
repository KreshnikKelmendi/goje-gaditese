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
      className="flex flex-col lg:flex-row p-4 mb-4 rounded-[10px]"
      style={{ backgroundColor: product.backgroundColor }}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      custom={index}
    >
      <img
        src={product.image}
        alt={product.title}
        className="lg:w-1/2 2xl:h-[290px] rounded-[10px] object-cover"
      />
      <div className="flex flex-col justify-center mt-2 lg:mt-0 lg:p-4 lg:w-2/3">
        <div>
          <p className="text-[32px] font-custom leading-[38.8px]" style={{ color: product.titleColor }}>
            {product.title}
          </p>
          <p className="mt-5 text-[15px] leading-[18px] font-custom1" style={{ color: product.descriptionColor }}>
            {product.description}
          </p>
        </div>
        <button
          className="w-[131px] h-[32px] bg-[#D53D6E] rounded-[20px] text-[#F3CCE7] text-[14px] font-custom1 mt-6"
          style={{
            backgroundColor: product.buttonColor,
            color: product.buttonTextColor,
          }}
        >
          View More
        </button>
      </div>
    </motion.div>
  );
};

export default ProdCard;
