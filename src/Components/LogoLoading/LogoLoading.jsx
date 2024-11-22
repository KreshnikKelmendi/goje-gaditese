import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import logoImage from '../assets/Layer_2.png'; // Replace with your logo path

function LogoLoading({ onComplete }) {
  const [progress, setProgress] = useState(0);

  // Handle progress simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          onComplete(); // Call onComplete when loading finishes
          return 100;
        }
        return prev + 1;
      });
    }, 20); 
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="flex items-center justify-center h-screen bg-gradient-to-r from-[#4A296A] to-[#D53C6F]"
      initial={{ opacity: 1 }}
      animate={{ opacity: progress === 100 ? 0 : 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="relative flex items-center justify-center">
        {/* Animated Circular Progress */}
        <motion.svg
          className="absolute"
          width="150"
          height="150"
          viewBox="0 0 120 120"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="60"
            cy="60"
            r="50"
            stroke="#D53C6F" // Color of the progress circle
            strokeWidth="6"
            fill="transparent"
            strokeDasharray="314" // Full perimeter of the circle (2 * π * r)
            strokeDashoffset={(314 * (100 - progress)) / 100} // Progress animation
            transition={{
              duration: 3,
              ease: "linear",
            }}
          />
        </motion.svg>

        {/* Logo Image with a subtle scale effect */}
        <motion.img
          src={logoImage}
          alt="Logo"
          className="w-20 h-20 object-contain"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>
      {/* Progress percentage */}
      <motion.div
        className="absolute bottom-20 text-white text-2xl font-semibold font-custom"
        animate={{ opacity: progress === 100 ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      >
        {progress}%
      </motion.div>
    </motion.div>
  );
}

export default LogoLoading;
