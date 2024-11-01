import React from 'react'
import { motion } from 'framer-motion'; // Import Framer Motion
import { useInView } from 'react-intersection-observer'; // Import the hook
import bioImage from '../assets/benida-sanida.png';

const AboutUs = () => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Ensure it triggers only once
        threshold: 0.3, // Trigger when 30% of the component is visible
    });
    return (
        <>
            <div className="flex flex-col lg:flex-row lg:h-[307px] px-5 py-16 lg:py-0 justify-between lg:items-center bg-[#1F1634] lg:px-[60px]">
                <p className="text-[44px] lg:text-[84px] font-custom1 mb-2 text-[#FADEEA]">KUSH JEMI NE</p>
                <p className="text-[18px] font-custom leading-[21.6px] text-justify tracking-tighter lg:w-[625px] text-[#FADEEA]">
                    Të gjitha produktet e cateringut janë të gatuara në shtëpi nga ne, dhe si të tilla mbajnë cilësinë e produkteve që përdor çdo njeri në shtëpi
                </p>
            </div>

            <div className="w-full flex flex-col justify-center items-center lg:flex-row px-5 lg:px-[130px] 2xl:px-[211px] mt-32 lg:mt-44 relative">
                {/* Image */}
                <img src={bioImage} alt="" className="lg:w-[523px] lg:h-[497px] object-cover" />

                {/* SVG Drawing and Fill Animation */}
                <div className="absolute top-[-70px] lg:top-[10px] ml-[-140px] lg:ml-[-650px]" ref={ref}>
                    <svg className='lg:w-[388px] w-[250px] lg:h-[155px]' viewBox="0 0 388 155" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* First path (draw the stroke) */}
                        <motion.path
                            d="M3.04372 60.2185C1.88294 31.824 23.9377 9.0285 57.0199 3.82951C68.7245 1.96321 131.6 3.8293 181.514 3.82951C226.156 3.8297 339.261 6.61603 364.046 15.827C389.874 25.4254 386.391 77.4152 381.748 94.6118C378.034 108.369 342.862 108.876 325.741 107.409C325.064 108.342 324.116 114.288 325.741 130.605C327.2 145.259 332.358 150.687 335.496 151.931C335.84 152.028 336.168 152.118 336.478 152.201C336.182 152.16 335.852 152.073 335.496 151.931C328.628 150.005 315.168 145.382 309.2 140.203C302.931 134.764 294.787 117.941 291.498 110.209H247.388C216.047 110.209 150.173 114.208 75.5926 110.209C1.01243 106.21 4.2045 88.613 3.04372 60.2185Z"
                            fill="none"
                            stroke="#FADEEA"
                            strokeWidth="5"
                            initial={{ pathLength: 0 }}
                            animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
                            transition={{ duration: 2, ease: 'easeInOut' }}
                        />

                        {/* Second path (fill background after stroke drawing) */}
                        <motion.path
                            d="M57.0199 3.82951C23.9377 9.0285 1.88294 31.824 3.04372 60.2185C4.2045 88.613 1.01243 106.21 75.5926 110.209C150.173 114.208 216.047 110.209 247.388 110.209C272.461 110.209 287.242 110.209 291.498 110.209C294.787 117.941 302.931 134.764 309.2 140.203C315.468 145.642 329.997 150.468 336.478 152.201C333.576 151.801 327.366 146.922 325.741 130.605C324.116 114.288 325.064 108.343 325.741 107.409C342.862 108.876 378.034 108.369 381.748 94.6118C386.391 77.4152 389.874 25.4254 364.046 15.827C339.261 6.61603 226.156 3.8297 181.514 3.82951C131.6 3.8293 68.7245 1.96321 57.0199 3.82951Z"
                            fill="#4A296A"
                            initial={{ opacity: 0 }}
                            animate={inView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ duration: 1, ease: 'easeInOut', delay: 2.2 }} // Delayed to start after stroke animation
                        />

                        {/* Text Animation Inside SVG */}
                        <motion.text
                            className="font-custom"
                            x="50%"
                            y="39%"
                            dominantBaseline="middle"
                            textAnchor="middle"
                            fill="white"
                            fontSize="20"
                            fontWeight="bold"
                            initial={{ opacity: 0 }}
                            animate={inView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ duration: 1, ease: 'easeInOut', delay: 3.5 }} // Delayed after background animation
                        >
                            Ne jemi Benida dhe Sanida
                        </motion.text>
                    </svg>
                </div>

                <div className='absolute bottom-60 ml-[-300px] lg:ml-[-850px]'>
                    <svg className='lg:w-[88px] w-[68px] h-[75px]' viewBox="0 0 88 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <motion.path
                            initial={{ pathLength: 0 }}
                            animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
                            transition={{ duration: 1.5, ease: 'easeInOut', delay: 4 }} d="M41.4854 23.6958C45.9977 17.2803 59.3742 -1.73576 66.6241 13.1436C68.3283 16.6411 65.8841 22.1964 64.4747 25.4135C60.623 34.2055 56.3545 41.8959 50.7179 49.6394C47.1366 54.5593 42.0677 59.8516 40.2001 65.5936" stroke="#4A296A" stroke-width="3" stroke-linecap="round" />
                        <motion.path initial={{ pathLength: 0 }}
                            animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
                            transition={{ duration: 1.5, ease: 'easeInOut', delay: 4 }} d="M40.4245 23.7035C36.2461 19.5855 29.2856 17.8783 23.6455 17.2273C19.5599 16.7558 17.8465 17.2328 17.0411 21.7655C16.7705 25.3949 17.4619 28.1728 18.803 31.8146C22.7089 42.4211 31.9403 50.2045 36.5677 60.3766C38.2143 63.9961 40.6522 64.368 40.094 69.0784" stroke="#4A296A" stroke-width="3" stroke-linecap="round" />
                    </svg>
                </div>

                <div className='absolute top-[-140px] lg:top-[-100px] ml-[-200px] lg:ml-[-620px]'>
                    <svg className='lg:w-[49px] w-[42px] h-[55px]' viewBox="0 0 49 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <motion.path
                            initial={{ pathLength: 0 }}
                            animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
                            transition={{ duration: 3, ease: 'easeInOut' }} d="M43.6531 43.384C30.8275 38.7257 17.9544 32.1903 5.75344 26.1598C4.5561 25.568 3.18382 24.996 2.13502 24.137C1.91283 23.955 7.08289 23.2871 7.48662 23.2461C17.894 22.1874 28.0908 19.5752 38.5547 18.9567C40.7185 18.8288 42.8859 18.8487 45.0514 18.7686C45.0956 18.7669 47.2978 18.5773 46.5758 18.9848C45.4125 19.6413 44.5371 20.4146 43.5186 21.3164C37.2608 26.8574 30.9587 32.3051 25.1063 38.2844C21.3364 42.1361 18.2549 46.7603 14.2743 50.3622C14.121 50.5009 11.3533 53.0197 11.0668 52.6898C10.2459 51.745 15.0663 44.3223 15.3828 43.594C17.3921 38.9689 18.4954 33.9157 19.4243 28.9823C20.4507 23.5312 21.4878 18.0312 22.3704 12.5555C22.9589 8.90467 23.1366 5.05718 24.4094 1.55274C24.5197 1.24907 24.8673 3.45738 24.9699 3.86538C26.2076 8.78713 28.1964 13.6855 30.2081 18.338C32.9457 24.6692 37.2588 30.0563 40.2211 36.2489C41.3391 38.5861 42.8027 40.9327 43.6531 43.384ZM43.6531 43.384C43.854 43.9632 44.3346 44.6452 44.3976 45.1898" stroke="#4A296A" stroke-width="3" stroke-linecap="round" />
                    </svg>
                </div>

                <div className='absolute bottom-2 top-32 lg:top-auto lg:bottom-16 ml-[330px] lg:ml-[-620px]'>
                    <svg className='lg:w-[55px] w-[45px] h-[54px]' viewBox="0 0 54 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M34.6136 15.7765C34.7781 16.3024 32.8462 15.9503 34.0746 15.368C34.6336 15.103 34.7185 15.7355 34.8865 16.0898" stroke="#4A296A" stroke-width="3" stroke-linecap="round" />
                        <path d="M17.4969 21.3604C17.7586 21.9125 15.796 23.3088 15.8597 22.4584C15.9115 21.7663 17.0656 20.8642 17.5592 21.4918" stroke="#4A296A" stroke-width="3" stroke-linecap="round" />
                        <path d="M37.6404 26.5014C38.5692 28.9132 36.4402 32.1189 35.3742 34.2982C33.5794 37.9676 27.6031 39.2283 23.9774 38.0378C22.9264 37.6927 21.5777 36.6071 21.0799 35.6163C20.9429 35.3434 20.1339 34.3028 20.3385 34.0522" stroke="#4A296A" stroke-width="3" stroke-linecap="round" />
                        <path d="M23.4883 7.42804C24.6376 6.88326 25.776 6.26273 26.9683 5.8191C28.7348 5.16184 31.0429 5.24728 32.8606 5.67649C35.9881 6.415 38.3845 8.69232 40.2062 11.2425C42.1255 13.9292 43.9902 16.718 45.4664 19.6757C48.5821 25.9181 49.2616 34.6874 44.1197 40.1058C41.4864 42.8808 37.6346 44.824 34.1008 46.2258C32.1061 47.0171 29.9079 47.4345 27.7685 47.5925C21.9037 48.0255 15.6916 44.6917 11.9112 40.4151C9.23336 37.3857 7.64303 34.0657 7.55478 30.0099C7.4773 26.4492 8.04957 22.6277 9.08275 19.2323C9.95043 16.3808 11.0681 13.5924 13.3232 11.5559C14.4558 10.5331 15.7943 9.74075 17.1313 9.01967C18.0081 8.5468 18.8193 8.47147 19.7544 8.20281C20.1345 8.09358 22.7622 6.76319 23.1276 7.05066" stroke="#4A296A" stroke-width="3" stroke-linecap="round" />
                    </svg>
                </div>

                <div className='absolute lg:bottom-60 bottom-3 ml-[-330px] lg:ml-[850px]'>
                    <svg className='lg:w-[52px] w-[45px] h-[52px]' viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M39.1563 23.4188C38.9026 23.9078 37.7793 22.2971 39.0614 22.7491C39.6449 22.9548 39.2597 23.4635 39.1293 23.8334" stroke="#4A296A" stroke-width="3" stroke-linecap="round" />
                        <path d="M23.0736 15.3253C22.8705 15.9015 20.4938 15.5102 21.1381 14.9514C21.6624 14.4966 23.117 14.6693 23.0252 15.4625" stroke="#4A296A" stroke-width="3" stroke-linecap="round" />
                        <path d="M33.75 33.1635C32.7104 35.5297 28.9411 36.3053 26.6494 37.1013C22.7907 38.4416 17.6607 35.1268 15.9257 31.7278C15.4228 30.7425 15.2302 29.0219 15.5748 27.968C15.6698 27.6778 15.8285 26.3694 16.1504 26.3356" stroke="#4A296A" stroke-width="3" stroke-linecap="round" />
                        <path d="M37.1402 9.65643C38.3397 10.0793 39.5848 10.4407 40.7437 10.9657C42.4605 11.7435 44.0386 13.43 45.0265 15.015C46.7262 17.7422 46.823 21.0467 46.3197 24.1401C45.7895 27.399 45.1486 30.692 44.113 33.8312C41.9274 40.4567 36.2326 47.1599 28.7661 47.384C24.9422 47.4987 20.8395 46.1648 17.3438 44.6706C15.3705 43.8272 13.5162 42.5751 11.8864 41.1802C7.41848 37.3563 5.35751 30.6142 5.68663 24.9157C5.91976 20.8792 7.12957 17.4024 9.92386 14.4614C12.3771 11.8795 15.4751 9.5701 18.6002 7.88782C21.2246 6.47502 23.9821 5.28304 27.0173 5.42606C28.5417 5.4979 30.0499 5.87828 31.5069 6.30828C32.4623 6.59027 33.0911 7.10818 33.9441 7.57615C34.2909 7.76642 37.0932 8.67306 37.15 9.13448" stroke="#4A296A" stroke-width="3" stroke-linecap="round" />
                    </svg>
                </div>

                <div className='absolute top-[-100px] ml-[200px] lg:ml-[650px]'>
                    <svg className='lg:w-[52px] w-[45px] h-[52px]' viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M39.1563 23.4188C38.9026 23.9079 37.7793 22.2972 39.0614 22.7492C39.6449 22.9549 39.2597 23.4636 39.1293 23.8334" stroke="#4A296A" stroke-width="3" stroke-linecap="round" />
                        <path d="M23.0736 15.3254C22.8705 15.9016 20.4938 15.5103 21.1381 14.9515C21.6624 14.4967 23.117 14.6694 23.0252 15.4626" stroke="#4A296A" stroke-width="3" stroke-linecap="round" />
                        <path d="M33.75 33.1636C32.7104 35.5298 28.9411 36.3054 26.6494 37.1014C22.7907 38.4417 17.6607 35.1269 15.9257 31.7279C15.4228 30.7426 15.2302 29.022 15.5748 27.9681C15.6698 27.6779 15.8285 26.3695 16.1504 26.3357" stroke="#4A296A" stroke-width="3" stroke-linecap="round" />
                        <path d="M37.1402 9.65652C38.3397 10.0794 39.5848 10.4408 40.7437 10.9658C42.4605 11.7436 44.0386 13.4301 45.0265 15.0151C46.7262 17.7423 46.823 21.0468 46.3197 24.1402C45.7895 27.3991 45.1486 30.6921 44.113 33.8313C41.9274 40.4568 36.2326 47.16 28.7661 47.3841C24.9422 47.4988 20.8395 46.1649 17.3438 44.6707C15.3705 43.8273 13.5162 42.5752 11.8864 41.1803C7.41848 37.3564 5.35751 30.6143 5.68663 24.9158C5.91976 20.8793 7.12957 17.4025 9.92386 14.4615C12.3771 11.8795 15.4751 9.57019 18.6002 7.88791C21.2246 6.47511 23.9821 5.28313 27.0173 5.42616C28.5417 5.49799 30.0499 5.87837 31.5069 6.30837C32.4623 6.59036 33.0911 7.10827 33.9441 7.57625C34.2909 7.76651 37.0932 8.67315 37.15 9.13457" stroke="#4A296A" stroke-width="3" stroke-linecap="round" />
                    </svg>
                </div>
                <div className='absolute top-8 lg:top-16 ml-[250px] lg:ml-[750px]'>
                    <svg className='lg:w-[57px] w-[47px] h-[51px]' viewBox="0 0 57 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.8884 47.723C21.9693 34.0778 23.8024 19.7576 25.3855 6.24014C25.5409 4.91361 25.6189 3.42893 26.0758 2.15256C26.1726 1.88216 28.5378 6.52775 28.7121 6.89424C33.204 16.3418 39.0887 25.0693 43.1851 34.7178C44.0322 36.7131 44.7413 38.7613 45.5439 40.7742C45.5603 40.8153 46.4784 42.8259 45.8522 42.2826C44.8432 41.4073 43.8208 40.8425 42.6293 40.186C35.3087 36.1522 28.0611 32.0454 20.4638 28.5407C15.5698 26.2831 10.1793 24.9333 5.44984 22.3935C5.26768 22.2957 1.9658 20.5345 2.18026 20.1538C2.79457 19.0633 11.405 21.1113 12.1973 21.1648C17.2285 21.5043 22.3588 20.8467 27.3176 20.065C32.7968 19.2013 38.3258 18.3312 43.7799 17.3238C47.4163 16.6521 51.1001 15.5275 54.8284 15.5496C55.1515 15.5516 53.1881 16.6205 52.8383 16.8542C48.618 19.6728 44.6719 23.191 40.9651 26.6482C35.9208 31.3528 32.2949 37.2245 27.4566 42.0942C25.6306 43.9322 23.9117 46.0988 21.8884 47.723ZM21.8884 47.723C21.4102 48.1068 20.9292 48.7884 20.4374 49.0307" stroke="#4A296A" stroke-width="3" stroke-linecap="round" />
                    </svg>

                </div>
                <div className='absolute bottom-2 top-60 lg:top-auto lg:bottom-16 ml-[300px] lg:ml-[620px]'>
                    <svg className='lg:w-[88px] w-[68px] h-[75px]' viewBox="0 0 88 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <motion.path
                            initial={{ pathLength: 0 }}
                            animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
                            transition={{ duration: 1.5, ease: 'easeInOut', delay: 4 }} d="M41.4854 23.6958C45.9977 17.2803 59.3742 -1.73576 66.6241 13.1436C68.3283 16.6411 65.8841 22.1964 64.4747 25.4135C60.623 34.2055 56.3545 41.8959 50.7179 49.6394C47.1366 54.5593 42.0677 59.8516 40.2001 65.5936" stroke="#4A296A" stroke-width="3" stroke-linecap="round" />
                        <motion.path initial={{ pathLength: 0 }}
                            animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
                            transition={{ duration: 1.5, ease: 'easeInOut', delay: 4 }} d="M40.4245 23.7035C36.2461 19.5855 29.2856 17.8783 23.6455 17.2273C19.5599 16.7558 17.8465 17.2328 17.0411 21.7655C16.7705 25.3949 17.4619 28.1728 18.803 31.8146C22.7089 42.4211 31.9403 50.2045 36.5677 60.3766C38.2143 63.9961 40.6522 64.368 40.094 69.0784" stroke="#4A296A" stroke-width="3" stroke-linecap="round" />
                    </svg>
                </div>


            </div>

        </>
    )
}

export default AboutUs