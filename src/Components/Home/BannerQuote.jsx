import React from 'react';
import firstImage from "../assets/two-woman-are-making-turkish-ravioli-with-meatball-2023-11-27-05-17-17-utc.png"
import { Link } from 'react-router-dom';

const BannerQuote = () => {

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='relative w-full mt-8 lg:mt-80 lg:px-[60px]'>
      <div className='bg-[#FADEEA] h-auto py-12 px-5 lg:px-[10px] rounded-[10px] flex flex-col lg:flex-row lg:justify-around lg:items-center'>
        {/* Large text */}
        <p className='text-[32px] font-custom uppercase font-medium lg:text-[60px] text-[#1F1634] leading-tight lg:leading-[60px]'>
          MENU
        </p>

        <p className='text-[20px] lg:w-[481px] lg:text-[18px] text-gray-800 leading-[21.96px] mt-6 lg:mt-0 font-custom1 text-justify tracking-tighter'>
          <span className='text-[#D53D6E]'>Gojë Gaditëse është një projekt i cili ofron shërbim catering dhe organizim eventesh!</span><br /> <br />
          Të gjitha produktet e cateringut janë të gatuara në shtëpi nga ne, dhe si të tilla mbajnë cilësinë e produkteve që përdor çdo njeri në shtëpi.
        </p>
        <div className=''>
          <Link to="/menu" onClick={handleClick}>
            <button className='w-full lg:w-[157px] lg:h-[32px] flex py-3 lg:py-0 justify-center items-center rounded-[20px] mt-8 lg:mt-0 bg-[#1F1634] text-[#FADEEA] font-custom1 hover:bg-[#D53D6E] '>Shiko më shumë</button>
          </Link>
        </div>
      </div>

      <div className='w-full mt-8'>
        <img src={firstImage} alt='' className='w-full h-[426px] object-cover rounded-[10px]' />
      </div>
    </div>
  );
}

export default BannerQuote;
