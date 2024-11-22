import React from 'react';
import { motion } from 'framer-motion';

const MenuBanner = () => {
    const titleText = "MENU";
    const descriptionText =
        "Prej recetave tradicionale që t’kujtojnë shtëpinë, te pjatat moderne plot kreativitet – menuja jonë ka diçka për secilen shije. Çdo përbërës është përzgjedhë me kujdes, çdo pjatë është gatuar me dashni.";

    return (
        <div className="flex flex-col lg:flex-row lg:h-[307px] 2xl:h-[35vh] px-6 py-12 lg:py-0 lg:items-center bg-[#1F1634] lg:px-[60px]">
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
                            hidden: { opacity: 0.2, y: 10 },
                            visible: { opacity: 1, y: 0 },
                        }}
                    >
                        {char}
                    </motion.span>
                ))}
            </motion.div>

            <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { staggerChildren: 0.02 } },
                }}
                className="text-[16px] font-custom1 leading-[21.6px] tracking-[1px] lg:tracking-[2px] lg:w-[625px] text-[#FADEEA] lg:pl-20"
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
    );
};

export default MenuBanner;
