import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import { useInView } from 'react-intersection-observer'; // Import the hook
import bioImage from '../assets/benida-sanida.png';
import TextBiography from './TextBiography';

const Biography = () => {
    // Set up the inView hook
    const { ref, inView } = useInView({
        triggerOnce: true, // Ensure it triggers only once
        threshold: 0.3, // Trigger when 30% of the component is visible
    });

    return (
        <div className="w-full flex flex-col lg:flex-row lg:px-[130px] 2xl:px-[211px] mt-20 lg:mt-44 relative">
            {/* Image */}
            <img src={bioImage} alt="" className="lg:w-[523px] lg:h-[497px] object-cover" />

            {/* SVG Drawing and Fill Animation */}
            <div className="absolute top-[-15px] left-[58px]" ref={ref}>
                <svg width="388" height="155" viewBox="0 0 388 155" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            <div className='absolute bottom-60 left-[110px]'>
                <svg className='' width="49" height="55" viewBox="0 0 49 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <motion.path
                        initial={{ pathLength: 0 }}
                        animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
                        transition={{ duration: 3, ease: 'easeInOut' }} d="M43.6531 43.384C30.8275 38.7257 17.9544 32.1903 5.75344 26.1598C4.5561 25.568 3.18382 24.996 2.13502 24.137C1.91283 23.955 7.08289 23.2871 7.48662 23.2461C17.894 22.1874 28.0908 19.5752 38.5547 18.9567C40.7185 18.8288 42.8859 18.8487 45.0514 18.7686C45.0956 18.7669 47.2978 18.5773 46.5758 18.9848C45.4125 19.6413 44.5371 20.4146 43.5186 21.3164C37.2608 26.8574 30.9587 32.3051 25.1063 38.2844C21.3364 42.1361 18.2549 46.7603 14.2743 50.3622C14.121 50.5009 11.3533 53.0197 11.0668 52.6898C10.2459 51.745 15.0663 44.3223 15.3828 43.594C17.3921 38.9689 18.4954 33.9157 19.4243 28.9823C20.4507 23.5312 21.4878 18.0312 22.3704 12.5555C22.9589 8.90467 23.1366 5.05718 24.4094 1.55274C24.5197 1.24907 24.8673 3.45738 24.9699 3.86538C26.2076 8.78713 28.1964 13.6855 30.2081 18.338C32.9457 24.6692 37.2588 30.0563 40.2211 36.2489C41.3391 38.5861 42.8027 40.9327 43.6531 43.384ZM43.6531 43.384C43.854 43.9632 44.3346 44.6452 44.3976 45.1898" stroke="#4A296A" stroke-width="3" stroke-linecap="round" />
                </svg>
            </div>

            <div className='absolute top-[-100px] left-[470px]'>
                <svg className='' width="88" height="75" viewBox="0 0 88 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <motion.path
                        initial={{ pathLength: 0 }}
                        animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
                        transition={{ duration: 1.5, ease: 'easeInOut', delay: 4 }} d="M41.4854 23.6958C45.9977 17.2803 59.3742 -1.73576 66.6241 13.1436C68.3283 16.6411 65.8841 22.1964 64.4747 25.4135C60.623 34.2055 56.3545 41.8959 50.7179 49.6394C47.1366 54.5593 42.0677 59.8516 40.2001 65.5936" stroke="#4A296A" stroke-width="3" stroke-linecap="round" />
                    <motion.path initial={{ pathLength: 0 }}
                        animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
                        transition={{ duration: 1.5, ease: 'easeInOut', delay: 4 }} d="M40.4245 23.7035C36.2461 19.5855 29.2856 17.8783 23.6455 17.2273C19.5599 16.7558 17.8465 17.2328 17.0411 21.7655C16.7705 25.3949 17.4619 28.1728 18.803 31.8146C22.7089 42.4211 31.9403 50.2045 36.5677 60.3766C38.2143 63.9961 40.6522 64.368 40.094 69.0784" stroke="#4A296A" stroke-width="3" stroke-linecap="round" />
                </svg>

            </div>
            <div className='absolute bottom-16 left-[150px]'>
                <svg width="54" height="55" viewBox="0 0 54 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M34.6136 15.7765C34.7781 16.3024 32.8462 15.9503 34.0746 15.368C34.6336 15.103 34.7185 15.7355 34.8865 16.0898" stroke="#4A296A" stroke-width="3" stroke-linecap="round" />
                    <path d="M17.4969 21.3604C17.7586 21.9125 15.796 23.3088 15.8597 22.4584C15.9115 21.7663 17.0656 20.8642 17.5592 21.4918" stroke="#4A296A" stroke-width="3" stroke-linecap="round" />
                    <path d="M37.6404 26.5014C38.5692 28.9132 36.4402 32.1189 35.3742 34.2982C33.5794 37.9676 27.6031 39.2283 23.9774 38.0378C22.9264 37.6927 21.5777 36.6071 21.0799 35.6163C20.9429 35.3434 20.1339 34.3028 20.3385 34.0522" stroke="#4A296A" stroke-width="3" stroke-linecap="round" />
                    <path d="M23.4883 7.42804C24.6376 6.88326 25.776 6.26273 26.9683 5.8191C28.7348 5.16184 31.0429 5.24728 32.8606 5.67649C35.9881 6.415 38.3845 8.69232 40.2062 11.2425C42.1255 13.9292 43.9902 16.718 45.4664 19.6757C48.5821 25.9181 49.2616 34.6874 44.1197 40.1058C41.4864 42.8808 37.6346 44.824 34.1008 46.2258C32.1061 47.0171 29.9079 47.4345 27.7685 47.5925C21.9037 48.0255 15.6916 44.6917 11.9112 40.4151C9.23336 37.3857 7.64303 34.0657 7.55478 30.0099C7.4773 26.4492 8.04957 22.6277 9.08275 19.2323C9.95043 16.3808 11.0681 13.5924 13.3232 11.5559C14.4558 10.5331 15.7943 9.74075 17.1313 9.01967C18.0081 8.5468 18.8193 8.47147 19.7544 8.20281C20.1345 8.09358 22.7622 6.76319 23.1276 7.05066" stroke="#4A296A" stroke-width="3" stroke-linecap="round" />
                </svg>


            </div>
            <div className='flex flex-col lg:flex-row justify-center items-center lg:pl-16'>
                <TextBiography />
            </div>
        </div>
    );
};

export default Biography;
