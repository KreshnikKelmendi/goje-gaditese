import React from 'react';

const MenuBanner = () => {
    return (
        <div className="flex flex-col lg:flex-row lg:h-[307px] px-5 py-12 lg:py-0 lg:items-center  bg-[#1F1634] lg:px-[60px]">
            <p className="text-[44px] lg:text-[84px] font-custom1 mb-2 text-[#FADEEA]">MENU</p>
            <p className="text-[18px] font-custom leadiang-[21.6px] text-justify tracking-tigher lg:w-[625px] text-[#FADEEA] lg:pl-20">
                Të gjitha produktet e cateringut janë të gatuara në shtëpi nga ne , dhe si te tilla mbajnë cilësinë e produkteve që përdor çdo njeri në shtëpi
            </p>
        </div>
    );
}

export default MenuBanner;
