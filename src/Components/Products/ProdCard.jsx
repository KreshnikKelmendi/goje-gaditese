import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

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

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
        className="lg:w-[250px] 2xl:h-[250px] rounded-[10px] object-cover"
      />
      <div className="flex flex-col justify-center mt-2 lg:mt-0 lg:p-4 lg:w-2/3 2xl:ml-5">
        <div>
          <p className="text-[32px] font-custom leading-[30.8px]" style={{ color: product.titleColor }}>
            {product.title}
          </p>
          <p className="mt-5 text-[15px] leading-[18px] font-custom1" style={{ color: product.descriptionColor }}>
            {product.description}
          </p>
        </div>
        <Link to={`/produktet/${product.id}`} onClick={handleClick}>
          <button
            className="lg:w-[131px] w-full py-3 lg:py-0 lg:h-[32px] bg-[#D53D6E] rounded-[20px] text-[#F3CCE7] text-[14px] font-custom1 mt-6"
            style={{
              backgroundColor: product.buttonColor,
              color: product.buttonTextColor,
            }}
          >
            Shiko më shumë
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

export default ProdCard;
