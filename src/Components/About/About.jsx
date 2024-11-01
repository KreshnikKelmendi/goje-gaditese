import React from 'react';
import img from "../assets/employee-puts-plate-with-tasty-fresh-croissant-ont-2023-11-27-05-13-42-utc.png"
import firstImg from "../assets/image 7.png"
import secondImg from "../assets/image8.png"

const About = () => {
    return (
        <>
            <div className='w-full'>
                <div className="w-full flex flex-col lg:flex-row justify-between items-start px-5 lg:px-[60px] mt-16 lg:mt-28">
                    <div className="lg:w-[631px]">
                        <p className='text-[55px] leading-[62px] uppercase font-custom text-[#4A296A]'>Great food, and a great story</p>
                    </div>
                    <div className=''>
                        <p className='lg:w-[631px] font-custom1 text-[18px] leading-[21.6px] text-[#1F1634]'>Ne, me pasionin dhe përkushtimin tonë, krijojmë tavolina që ju shtojnë oreksin dhe e shndërrojnë çdo festë në një përvojë të paharrueshme. Nga shija e ushqimeve, deri te dekorimi dhe mënyra e servirjes, janë të përsonalizuara për çdo event tuajin.
                            <br />Ushqimet tona janë të gjitha të përsonalizuara në fokus me risitë dhe trendet e fundit në gastronomi. Organizimi i festave me ne nënkupton më shumë se thjesht ushqim të mirë – është arti i detajeve, prezantimi estetik dhe dashuri për mikpritjen.</p>
                    </div>
                </div>
            </div>

            <div className='w-full px-5 lg:px-[60px] pt-10 lg:pt-0 lg:my-20'>
                <div className='w-full'>
                    <img src={img} alt='' className='w-full' />
                </div>
            </div>

            <div className='w-full px-5 lg:px-[60px] mt-10 lg:mt-0'>
                <p className='text-[28px] lg:text-[48px] text-[#D53C6F] font-custom uppercase lg:w-[1126px] lg:leading-[62.85px]'>Gojë Gaditëse është një projekt i cili ofron shërbim catering dhe organizim eventesh!</p>
                <p className='text-[18px] text-[#1F1634] font-custom1 lg:w-[632px] leading-[21.16px] mt-2'>Projekti u finalizua me 19 Korrik 2020, dhe mori emrin Gojë Gaditëse si diçka që do ju rregullojë Gojën apo zbukurojë ditën.</p>
            </div>

            <div className='w-full lg:px-[60px] px-5 mt-14'>
                <div className='grid lg:grid-cols-2 gap-x-6 gap-y-6'>
                    <img src={firstImg} alt='' className='w-full lg:h-[480px] object-cover rounded-[10px]' />
                    <img src={secondImg} alt='' className='w-full lg:h-[480px] object-cover rounded-[10px]' />

                </div>
            </div>
        </>
    );
};

export default About;
