import React from 'react';
import imageCatering from '../assets/iamge-catering.png';

const AfterBiography = () => {
    return (
        <>
        <div className="relative w-full">
            {/* Image Section */}
            <div className="w-full lg:mt-36">
                <img className="w-full object-cover h-[794px] rounded-[10px]" alt="" src={imageCatering} />
            </div>

            {/* Text Section */}
            <div className="absolute inset-0 flex justify-center items-center px-9">
                <div className="bg-[#FADEEA] flex flex-col justify-center lg:items-center lg:w-[778px] h-[476px] text-white px-6 py-3 rounded-md">
                    <h1 className="text-[29px] lg:text-[55px] font-custom lg:w-[652px] text-[#4A296A] uppercase leading-tight lg:leading-[62px]">SHËRBIMI I CATERING-UT NGA SHTËPIA NË BIZNES</h1>
                    <p className='lg:w-[652px] mt-4 text-[#4A296A] font-custom text-sm lg:text-[18px]'>Ne, me pasionin dhe përkushtimin tonë, krijojmë tavolina që ju shtojnë oreksin dhe e shndërrojnë çdo festë në një përvojë të paharrueshme. Nga shija e ushqimeve, deri te dekorimi dhe mënyra e servirjes, janë të përsonalizuara për çdo event tuajin.
                        <br /> <br />
                        Ushqimet tona janë të gjitha të përsonalizuara në fokus me risitë dhe trendet e fundit në gastronomi. Organizimi i festave me ne nënkupton më shumë se thjesht ushqim të mirë – është arti i detajeve, prezantimi estetik dhe dashuri për mikpritjen.</p>
                </div>
                
            </div>
            
        </div>
        
        </>
    );
};

export default AfterBiography;
