import React from 'react';
import firstImage from "../assets/two-woman-are-making-turkish-ravioli-with-meatball-2023-11-27-05-17-17-utc.png"

const BannerQuote = () => {
  return (
    <div className='relative w-full mt-8 lg:mt-80 lg:px-[60px]'>
      <div className='bg-[#FADEEA] h-auto py-12 px-5 lg:px-[150px] rounded-[10px] flex flex-col lg:flex-row lg:justify-between lg:items-center'>
        {/* Large text */}
        <p className='text-[32px] font-custom uppercase font-medium lg:text-[55px] text-[#1F1634] lg:leading-[60px]'>
          Great fo<span className='ml-[0.8px]'>o</span>d, <br /> and a great story
        </p>
        
        <p className='text-[20px] lg:w-[481px] lg:text-[18px] text-gray-800 leading-[21.96px]'>
          <span className='text-[#D53D6E]'>Gojë Gaditëse është një projekt i cili ofron shërbim catering dhe organizim eventesh!</span><br /> <br />
          Të gjitha produktet e cateringut janë të gatuara në shtëpi nga ne, dhe si të tilla mbajnë cilësinë e produkteve që përdor çdo njeri në shtëpi.
        </p>
      </div>
      <div className='w-full mt-8'>
        <img src={firstImage} alt='' className='w-full h-[426px] object-cover rounded-[10px]' />
      </div>
    </div>
  );
}

export default BannerQuote;
