import React from 'react';

const MenuBanner = () => {
    return (
        <div className="flex flex-col lg:flex-row lg:h-[307px] px-5 py-12 lg:py-0 lg:items-center  bg-[#1F1634] lg:px-[60px]">
            <p className="text-[44px] lg:text-[84px] font-custom1 mb-2 text-[#FADEEA]">MENU</p>
            <p className="text-[18px] font-custom leadiang-[21.6px] text-justify tracking-tighter lg:w-[625px] text-[#FADEEA] lg:pl-20">
            Prej recetave tradicionale që t’kujtojnë shtëpinë, te pjatat moderne plot kreativitet – menuja jonë ka diçka për secilen shije. Çdo përbërës është përzgjedhë me kujdes, çdo pjatë është gatuar me dashni.
            </p>
        </div>
    );
}

export default MenuBanner;
