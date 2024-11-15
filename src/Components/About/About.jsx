import React from 'react';
import img from "../assets/employee-puts-plate-with-tasty-fresh-croissant-ont-2023-11-27-05-13-42-utc.png"
import firstImg from "../assets/image 7.png"
import secondImg from "../assets/image8.png"

const About = () => {
    return (
        <>
            <div className='w-full container mx-auto'>
                <div className="w-full flex flex-col lg:flex-row justify-between items-start px-5 lg:px-[60px] mt-16 lg:mt-28">
                    <div className="lg:w-1/2">
                        <p className='text-[32px] leading-tight lg:text-[55px] lg:leading-[62px] uppercase font-custom text-[#4A296A]'>Shërbimi i Catering-ut nga Shtëpia në Biznes</p>
                    </div>
                    <div className='lg:w-1/2'>
                        <p className=' font-custom1 text-[18px] leading-[21.6px] text-[#1F1634] pt-6 lg:pl-8 text-justify tracking-tighter lg:pt-0 2xl:mr-16'>
                        Pas disa muajve suksesi si start-up, Goje Gaditese mori hapat e parë drejt profesionalizimit dhe transformimit në një biznes të plotë. Me kalimin e kohës, kompania ka ndërtuar një reputacion të fortë për organizimin e eventeve të ndryshme, si dasma, festa private, konferenca dhe ngjarje korporative, duke ofruar menu të personalizuara për çdo mundësi. <br /> <br />Ne ofrojmë një gamë të gjerë opsionesh ushqimore, nga gatime tradicionale shqiptare deri tek kuzhina ndërkombëtare dhe mundësi për dieta te vecanta.
                        </p>
                    </div>
                </div>
            </div>

            <div className='w-full px-5 lg:px-[60px] pt-10 lg:pt-0 lg:my-16'>
                <div className='w-full'>
                    <img src={img} alt='' className='w-full h-[25vh] lg:h-[476px] object-cover' />
                </div>
            </div>

            <div className='w-full px-5 lg:px-[60px] mt-10 lg:mt-0'>
                <p className='text-[28px] lg:text-[48px] text-[#D53C6F] font-custom font-extralight uppercase lg:w-[1126px] 2xl:w-[1540px] lg:leading-[62.85px]'>Gojë Gaditëse është një projekt i cili ofron shërbim catering dhe organizim eventesh!</p>
                <p className='text-[18px] text-[#1F1634] font-custom1 lg:w-[732px] leading-[21.16px] mt-2'>Biznesi tani përfshin një ekip të dedikuar dhe pajisje moderne, që mundësojnë një përvojë të shkëlqyer dhe shërbim të shpejtë dhe të besueshëm. <br /> <br />Gojë Gaditëse ka investuar gjithashtu në menaxhimin e cilësisë dhe logjistikës, duke siguruar që çdo event të jetë pa stres dhe e organizuar në mënyrë perfekte, nga transportimi i ushqimit deri tek dekorimi i hapësirës.</p>
            </div>

            <div className='w-full lg:px-[60px] px-5 mt-14'>
                <div className='grid lg:grid-cols-2 gap-x-6 gap-y-6'>
                    <img src={firstImg} alt='' className='w-full lg:h-[480px] 2xl:h-[55vh] object-cover rounded-[10px]' />
                    <img src={secondImg} alt='' className='w-full lg:h-[480px] 2xl:h-[55vh] object-cover rounded-[10px]' />

                </div>
            </div>
        </>
    );
};

export default About;
