import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    // State to manage the navbar's visibility
    const [nav, setNav] = useState(false);

    // Toggle function to handle the navbar's display
    const handleNav = () => {
        setNav(!nav);
    };

    // Array containing navigation items with corresponding links
    const navItems = [
        { id: 0, text: 'Ballina', link: '/' },
        { id: 1, text: 'Kush Jemi', link: '/kush-jemi' },
        { id: 2, text: 'Produktet', link: '/produktet' },
        { id: 3, text: 'Menu', link: '/menu' },
        { id: 4, text: 'Galeri', link: '/galeria' },
        { id: 5, text: 'Kontakt', link: '/kontakt' },
    ];

    return (
        <div className='bg-[#1F1634] sticky top-0 z-50 w-full flex justify-between items-center h-[67px] py-[40px] px-5 lg:px-[60px] text-white uppercase'>
            {/* Desktop Navigation */}
            <Link to="/">
                <svg width="97" height="45" viewBox="0 0 97 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_245_1632)">
                        <path d="M29.1575 30.4587C29.1541 32.3624 28.7704 34.2801 28.0346 36.044C27.2988 37.808 26.2142 39.4217 24.8646 40.763C23.515 42.1078 21.9039 43.1837 20.1393 43.9102C18.3782 44.6367 16.4706 45.007 14.577 45.0035C12.6834 45 10.7793 44.6193 9.0252 43.8822C7.27108 43.1487 5.66691 42.0659 4.33126 40.7211C2.99561 39.3763 1.925 37.766 1.20313 36.0091C0.843933 35.1323 0.568434 34.2172 0.387093 33.2846C0.35222 33.0505 0.289448 32.82 0.244113 32.586C0.205752 32.3519 0.160417 32.1179 0.125544 31.8839C0.0976452 31.6464 0.0662592 31.4123 0.0418479 31.1748L0 30.4587H5.49952L5.47859 30.9093V31.3599C5.49603 31.6603 5.503 31.9642 5.5588 32.2576C5.67737 32.8479 5.85522 33.4243 6.08887 33.9797C6.55269 35.0869 7.23969 36.1069 8.09409 36.9557C8.94848 37.8045 9.96678 38.4821 11.0758 38.9327C12.1812 39.3868 13.3739 39.6173 14.577 39.6138C15.7802 39.6068 16.9693 39.3658 18.0678 38.9048C19.1663 38.4437 20.1777 37.7626 21.0181 36.9103C21.8586 36.0615 22.5316 35.045 22.9815 33.9447C23.4314 32.8444 23.6615 31.6568 23.658 30.4587H29.1575Z" fill="#D43C5E" />
                        <path d="M14.5805 30.3819C6.53874 30.3819 0 23.8326 0 15.7778C0 7.72296 6.53874 1.17712 14.5805 1.17712C19.0443 1.17712 23.2012 3.18209 25.9841 6.68205C28.0311 9.25288 29.1575 12.4839 29.1575 15.7778C29.1575 23.8291 22.6188 30.3819 14.577 30.3819H14.5805ZM14.5805 6.68555C9.5762 6.68555 5.503 10.7653 5.503 15.7778C5.503 20.7902 9.5762 24.87 14.5805 24.87C19.5848 24.87 23.658 20.7902 23.658 15.7778C23.658 13.6959 22.9745 11.7364 21.6842 10.1156C19.9475 7.93603 17.3599 6.68555 14.5805 6.68555Z" fill="#F8E2EA" />
                        <path d="M46.5943 22.4913H45.3284V26.2183H46.5943V22.4913Z" fill="#F8E2EA" />
                        <path d="M42.5558 34.2766C40.3518 34.2766 38.5593 32.4812 38.5593 30.2736H39.8252C39.8252 31.7826 41.0493 33.0086 42.5558 33.0086C44.0623 33.0086 45.2864 31.7826 45.2864 30.2736H46.5523C46.5523 32.4812 44.7598 34.2766 42.5558 34.2766Z" fill="#F8E2EA" />
                        <path d="M57.9002 6.78336H56.6343V8.03384H57.9002V6.78336Z" fill="#F8E2EA" />
                        <path d="M67.3682 20.1754H66.1023V21.4504H67.3682V20.1754Z" fill="#F8E2EA" />
                        <path d="M71.6785 22.4459H70.4126V23.7208H71.6785V22.4459Z" fill="#F8E2EA" />
                        <path d="M72.3375 22.4459H71.6331V23.7208H72.3375V22.4459Z" fill="#F8E2EA" />
                        <path d="M51.5043 16.9235C49.3003 16.9235 47.5078 15.1281 47.5078 12.9205C47.5078 10.713 49.3003 8.91757 51.5043 8.91757C53.7083 8.91757 55.5008 10.713 55.5008 12.9205C55.5008 15.1281 53.7083 16.9235 51.5043 16.9235ZM51.5043 10.189C49.9978 10.189 48.7737 11.415 48.7737 12.924C48.7737 14.433 49.9978 15.659 51.5043 15.659C53.0108 15.659 54.2349 14.433 54.2349 12.924C54.2349 11.415 53.0108 10.189 51.5043 10.189Z" fill="#F8E2EA" />
                        <path d="M55.4973 26.2462H54.2314V30.1304H55.4973V26.2462Z" fill="#F8E2EA" />
                        <path d="M53.8896 19.7493V18.4813C55.3962 18.4813 56.6202 17.2553 56.6202 15.7463H57.8861C57.8861 17.9539 56.0936 19.7493 53.8896 19.7493Z" fill="#F8E2EA" />
                        <path d="M57.8863 9.11316H56.6204V15.7463H57.8863V9.11316Z" fill="#F8E2EA" />
                        <path d="M75.9715 20.1754H74.7056V21.4259H75.9715V20.1754Z" fill="#F8E2EA" />
                        <path d="M79.2845 20.1684H78.0186V21.3805H79.2845V20.1684Z" fill="#F8E2EA" />
                        <path d="M76.9933 30.2876C75.9017 30.2876 74.8172 29.844 74.029 28.9707C73.3141 28.1778 72.948 27.1544 73.0003 26.0855C73.0526 25.0167 73.5199 24.0352 74.3115 23.3191L75.1589 24.2587C74.6184 24.7477 74.3011 25.4219 74.2627 26.1484C74.2278 26.8784 74.4754 27.577 74.9636 28.1184C75.975 29.2362 77.7047 29.3235 78.8206 28.3106L79.6681 29.2502C78.9043 29.9418 77.9453 30.2806 76.9898 30.2806L76.9933 30.2876Z" fill="#F8E2EA" />
                        <path d="M77.0001 30.2841C74.7962 30.2841 73.0037 28.4887 73.0037 26.2811C73.0037 24.0736 74.7962 22.2782 77.0001 22.2782C79.2041 22.2782 80.9966 24.0736 80.9966 26.2811V26.9134L75.6331 26.9308V25.6629L79.6575 25.6489C79.3715 24.4438 78.2905 23.5461 77.0001 23.5461C75.4936 23.5461 74.2696 24.7722 74.2696 26.2811C74.2696 27.7901 75.4936 29.0161 77.0001 29.0161V30.2841Z" fill="#F8E2EA" />
                        <path d="M62.8625 16.9165C61.771 16.9165 60.6864 16.4729 59.8983 15.5996C58.4197 13.9649 58.5487 11.429 60.1808 9.948L61.0282 10.8876C59.9122 11.9006 59.8251 13.6331 60.8364 14.7508C61.8477 15.8686 63.5774 15.9559 64.6934 14.943L65.5408 15.8826C64.7771 16.5742 63.818 16.913 62.8625 16.913V16.9165Z" fill="#F8E2EA" />
                        <path d="M62.8695 16.9095C60.6655 16.9095 58.873 15.1141 58.873 12.9065C58.873 10.699 60.6655 8.90359 62.8695 8.90359C65.0735 8.90359 66.866 10.699 66.866 12.9065V13.5388L61.5025 13.5562V12.2883L65.5269 12.2743C65.2409 11.0692 64.1598 10.1715 62.8695 10.1715C61.363 10.1715 60.1389 11.3976 60.1389 12.9065C60.1389 14.4155 61.363 15.6415 62.8695 15.6415V16.9095Z" fill="#F8E2EA" />
                        <path d="M92.9965 30.2876C91.9049 30.2876 90.8204 29.844 90.0322 28.9707C89.3173 28.1778 88.9511 27.1544 89.0035 26.0855C89.0558 25.0167 89.5231 24.0352 90.3147 23.3191L91.1621 24.2587C90.6216 24.7477 90.3042 25.4219 90.2659 26.1484C90.231 26.8784 90.4786 27.577 90.9668 28.1184C91.9781 29.2362 93.7079 29.3235 94.8238 28.3106L95.6712 29.2502C94.9075 29.9418 93.9485 30.2806 92.993 30.2806L92.9965 30.2876Z" fill="#F8E2EA" />
                        <path d="M93.0036 30.2841C90.7996 30.2841 89.0071 28.4887 89.0071 26.2811C89.0071 24.0736 90.7996 22.2782 93.0036 22.2782C95.2076 22.2782 97 24.0736 97 26.2811V26.9134L91.6365 26.9308V25.6629L95.6609 25.6489C95.3749 24.4438 94.2939 23.5461 93.0036 23.5461C91.497 23.5461 90.273 24.7722 90.273 26.2811C90.273 27.7901 91.497 29.0161 93.0036 29.0161V30.2841Z" fill="#F8E2EA" />
                        <path d="M61.7571 6.78336H60.4912V8.03035H61.7571V6.78336Z" fill="#F8E2EA" />
                        <path d="M65.2478 6.82178H63.9819V8.03035H65.2478V6.82178Z" fill="#F8E2EA" />
                        <path d="M51.5043 30.3051C49.3003 30.3051 47.5078 28.5097 47.5078 26.3021C47.5078 24.0946 49.3003 22.2992 51.5043 22.2992C53.7083 22.2992 55.5008 24.0946 55.5008 26.3021C55.5008 28.5097 53.7083 30.3051 51.5043 30.3051ZM51.5043 23.5706C49.9978 23.5706 48.7737 24.7966 48.7737 26.3056C48.7737 27.8146 49.9978 29.0406 51.5043 29.0406C53.0108 29.0406 54.2349 27.8146 54.2349 26.3056C54.2349 24.7966 53.0108 23.5706 51.5043 23.5706Z" fill="#F8E2EA" />
                        <path d="M42.6046 30.3051C40.4006 30.3051 38.6082 28.5097 38.6082 26.3021C38.6082 24.0946 40.4006 22.2992 42.6046 22.2992C44.8086 22.2992 46.6011 24.0946 46.6011 26.3021C46.6011 28.5097 44.8086 30.3051 42.6046 30.3051ZM42.6046 23.5706C41.0981 23.5706 39.8741 24.7966 39.8741 26.3056C39.8741 27.8146 41.0981 29.0406 42.6046 29.0406C44.1112 29.0406 45.3352 27.8146 45.3352 26.3056C45.3352 24.7966 44.1112 23.5706 42.6046 23.5706Z" fill="#F8E2EA" />
                        <path d="M46.5943 9.21796H45.3284V12.945H46.5943V9.21796Z" fill="#F8E2EA" />
                        <path d="M42.5558 21.0033C40.3518 21.0033 38.5593 19.2079 38.5593 17.0003H39.8252C39.8252 18.5093 41.0493 19.7353 42.5558 19.7353C44.0623 19.7353 45.2864 18.5093 45.2864 17.0003H46.5523C46.5523 19.2079 44.7598 21.0033 42.5558 21.0033Z" fill="#F8E2EA" />
                        <path d="M42.6046 17.0352C40.4006 17.0352 38.6082 15.2398 38.6082 13.0323C38.6082 10.8247 40.4006 9.02933 42.6046 9.02933C44.8086 9.02933 46.6011 10.8247 46.6011 13.0323C46.6011 15.2398 44.8086 17.0352 42.6046 17.0352ZM42.6046 10.3008C41.0981 10.3008 39.8741 11.5268 39.8741 13.0358C39.8741 14.5447 41.0981 15.7708 42.6046 15.7708C44.1112 15.7708 45.3352 14.5447 45.3352 13.0358C45.3352 11.5268 44.1112 10.3008 42.6046 10.3008Z" fill="#F8E2EA" />
                        <path d="M64.4109 20.1929H63.145V30.1304H64.4109V20.1929Z" fill="#F8E2EA" />
                        <path d="M67.3821 22.4493H66.1162V30.2142H67.3821V22.4493Z" fill="#F8E2EA" />
                        <path d="M60.4144 30.3051C58.2105 30.3051 56.418 28.5097 56.418 26.3021C56.418 24.0946 58.2105 22.2992 60.4144 22.2992C62.6184 22.2992 64.4109 24.0946 64.4109 26.3021C64.4109 28.5097 62.6184 30.3051 60.4144 30.3051ZM60.4144 23.5706C58.9079 23.5706 57.6839 24.7966 57.6839 26.3056C57.6839 27.8146 58.9079 29.0406 60.4144 29.0406C61.921 29.0406 63.145 27.8146 63.145 26.3056C63.145 24.7966 61.921 23.5706 60.4144 23.5706Z" fill="#F8E2EA" />
                        <path d="M84.9965 30.3505C84.0305 30.3505 83.0645 30.0675 82.3741 29.5331C82.2136 29.4074 81.8614 29.0825 81.7219 28.9218L82.7123 28.108C82.7821 28.1918 83.068 28.4573 83.1727 28.5376C83.898 29.1 85.2058 29.2502 86.1508 28.8764C86.4263 28.7681 86.8971 28.5166 86.9634 28.066C87.0261 27.6155 86.9041 27.4618 86.8622 27.4094C86.5763 27.0566 85.6905 26.9727 84.9059 26.8959C84.3723 26.847 83.8213 26.7946 83.3505 26.6549L83.7167 25.4393C84.0689 25.5406 84.5327 25.586 85.0279 25.6314C86.0706 25.7292 87.2493 25.841 87.8736 26.62C88.2084 27.0391 88.3339 27.584 88.2397 28.2372C88.1247 29.0406 87.5527 29.6833 86.6321 30.0466C86.1264 30.2457 85.5615 30.3435 84.9965 30.3435V30.3505Z" fill="#F8E2EA" />
                        <path d="M86.2347 27.088C85.886 26.9902 85.4257 26.9448 84.9409 26.8994C83.8982 26.8016 82.7195 26.6898 82.0953 25.9109C81.7605 25.4917 81.6349 24.9468 81.7291 24.2936C81.8512 23.4518 82.4928 22.7707 83.4902 22.4249C84.7561 21.9883 86.6427 22.107 87.8005 23.1794C87.804 23.1794 88.1458 23.5007 88.2469 23.6195L87.2565 24.4334C87.2182 24.3914 87.0124 24.1923 86.9148 24.1015C86.1685 23.4099 84.8014 23.3156 83.9157 23.6195C83.6053 23.7278 83.0717 23.9793 83.002 24.4683C82.9392 24.9189 83.0613 25.0726 83.1031 25.125C83.3891 25.4813 84.2748 25.5616 85.0595 25.6384C85.5826 25.6873 86.1231 25.7397 86.5904 25.8725L86.2312 27.0915L86.2347 27.088Z" fill="#F8E2EA" />
                        <path d="M70.5243 30.099C69.7641 30.099 69.1433 29.4807 69.1433 28.7157V20.1754H70.4092V28.7157C70.4092 28.7786 70.4615 28.831 70.5243 28.831H72.3482V30.099H70.5243Z" fill="#F8E2EA" />
                        <path d="M30.4235 3.41264L17.0287 15.0477L15.3164 13.3257L26.9466 0L30.4235 3.41264Z" fill="#F8E2EA" />
                    </g>
                    <defs>
                        <clipPath id="clip0_245_1632">
                            <rect width="97" height="45" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </Link>

            <ul className='hidden md:flex space-x-10'>
                {navItems.map(item => (
                    <li
                        key={item.id}
                        className={`cursor-pointer w-[100px] h-[29px] flex justify-center items-center text-base font-custom duration-300 hover:text-[#D53C6F] ${item.text === 'Kontakt' ? 'bg-[#D53D6E] text-white rounded-[14.5px]' : ''}`}
                    >
                        <NavLink to={item.link} className="w-full h-full flex justify-center items-center">
                            {item.text}
                        </NavLink>
                    </li>
                ))}
            </ul>

            {/* Mobile Navigation Icon */}
            <div onClick={handleNav} className='block md:hidden'>
                {<AiOutlineMenu size={20} />}
            </div>

            {/* Mobile Navigation Menu */}

            <ul
                className={
                    nav
                        ? 'fixed md:hidden justify-center items-center fle right-0 top-0 w-[55%] h-full border-r border-r-gray-900 bg-[#1F1634] z-50 ease-in-out duration-500'
                        : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[100%]'
                }
            >
                <div className='flex justify-between absolute right-1 items-center px-2 pt-5'>
                    {/* <svg width="97" height="45" viewBox="0 0 97 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_245_1632)">
                            <path d="M29.1575 30.4587C29.1541 32.3624 28.7704 34.2801 28.0346 36.044C27.2988 37.808 26.2142 39.4217 24.8646 40.763C23.515 42.1078 21.9039 43.1837 20.1393 43.9102C18.3782 44.6367 16.4706 45.007 14.577 45.0035C12.6834 45 10.7793 44.6193 9.0252 43.8822C7.27108 43.1487 5.66691 42.0659 4.33126 40.7211C2.99561 39.3763 1.925 37.766 1.20313 36.0091C0.843933 35.1323 0.568434 34.2172 0.387093 33.2846C0.35222 33.0505 0.289448 32.82 0.244113 32.586C0.205752 32.3519 0.160417 32.1179 0.125544 31.8839C0.0976452 31.6464 0.0662592 31.4123 0.0418479 31.1748L0 30.4587H5.49952L5.47859 30.9093V31.3599C5.49603 31.6603 5.503 31.9642 5.5588 32.2576C5.67737 32.8479 5.85522 33.4243 6.08887 33.9797C6.55269 35.0869 7.23969 36.1069 8.09409 36.9557C8.94848 37.8045 9.96678 38.4821 11.0758 38.9327C12.1812 39.3868 13.3739 39.6173 14.577 39.6138C15.7802 39.6068 16.9693 39.3658 18.0678 38.9048C19.1663 38.4437 20.1777 37.7626 21.0181 36.9103C21.8586 36.0615 22.5316 35.045 22.9815 33.9447C23.4314 32.8444 23.6615 31.6568 23.658 30.4587H29.1575Z" fill="#D43C5E" />
                            <path d="M14.5805 30.3819C6.53874 30.3819 0 23.8326 0 15.7778C0 7.72296 6.53874 1.17712 14.5805 1.17712C19.0443 1.17712 23.2012 3.18209 25.9841 6.68205C28.0311 9.25288 29.1575 12.4839 29.1575 15.7778C29.1575 23.8291 22.6188 30.3819 14.577 30.3819H14.5805ZM14.5805 6.68555C9.5762 6.68555 5.503 10.7653 5.503 15.7778C5.503 20.7902 9.5762 24.87 14.5805 24.87C19.5848 24.87 23.658 20.7902 23.658 15.7778C23.658 13.6959 22.9745 11.7364 21.6842 10.1156C19.9475 7.93603 17.3599 6.68555 14.5805 6.68555Z" fill="#F8E2EA" />
                            <path d="M46.5943 22.4913H45.3284V26.2183H46.5943V22.4913Z" fill="#F8E2EA" />
                            <path d="M42.5558 34.2766C40.3518 34.2766 38.5593 32.4812 38.5593 30.2736H39.8252C39.8252 31.7826 41.0493 33.0086 42.5558 33.0086C44.0623 33.0086 45.2864 31.7826 45.2864 30.2736H46.5523C46.5523 32.4812 44.7598 34.2766 42.5558 34.2766Z" fill="#F8E2EA" />
                            <path d="M57.9002 6.78336H56.6343V8.03384H57.9002V6.78336Z" fill="#F8E2EA" />
                            <path d="M67.3682 20.1754H66.1023V21.4504H67.3682V20.1754Z" fill="#F8E2EA" />
                            <path d="M71.6785 22.4459H70.4126V23.7208H71.6785V22.4459Z" fill="#F8E2EA" />
                            <path d="M72.3375 22.4459H71.6331V23.7208H72.3375V22.4459Z" fill="#F8E2EA" />
                            <path d="M51.5043 16.9235C49.3003 16.9235 47.5078 15.1281 47.5078 12.9205C47.5078 10.713 49.3003 8.91757 51.5043 8.91757C53.7083 8.91757 55.5008 10.713 55.5008 12.9205C55.5008 15.1281 53.7083 16.9235 51.5043 16.9235ZM51.5043 10.189C49.9978 10.189 48.7737 11.415 48.7737 12.924C48.7737 14.433 49.9978 15.659 51.5043 15.659C53.0108 15.659 54.2349 14.433 54.2349 12.924C54.2349 11.415 53.0108 10.189 51.5043 10.189Z" fill="#F8E2EA" />
                            <path d="M55.4973 26.2462H54.2314V30.1304H55.4973V26.2462Z" fill="#F8E2EA" />
                            <path d="M53.8896 19.7493V18.4813C55.3962 18.4813 56.6202 17.2553 56.6202 15.7463H57.8861C57.8861 17.9539 56.0936 19.7493 53.8896 19.7493Z" fill="#F8E2EA" />
                            <path d="M57.8863 9.11316H56.6204V15.7463H57.8863V9.11316Z" fill="#F8E2EA" />
                            <path d="M75.9715 20.1754H74.7056V21.4259H75.9715V20.1754Z" fill="#F8E2EA" />
                            <path d="M79.2845 20.1684H78.0186V21.3805H79.2845V20.1684Z" fill="#F8E2EA" />
                            <path d="M76.9933 30.2876C75.9017 30.2876 74.8172 29.844 74.029 28.9707C73.3141 28.1778 72.948 27.1544 73.0003 26.0855C73.0526 25.0167 73.5199 24.0352 74.3115 23.3191L75.1589 24.2587C74.6184 24.7477 74.3011 25.4219 74.2627 26.1484C74.2278 26.8784 74.4754 27.577 74.9636 28.1184C75.975 29.2362 77.7047 29.3235 78.8206 28.3106L79.6681 29.2502C78.9043 29.9418 77.9453 30.2806 76.9898 30.2806L76.9933 30.2876Z" fill="#F8E2EA" />
                            <path d="M77.0001 30.2841C74.7962 30.2841 73.0037 28.4887 73.0037 26.2811C73.0037 24.0736 74.7962 22.2782 77.0001 22.2782C79.2041 22.2782 80.9966 24.0736 80.9966 26.2811V26.9134L75.6331 26.9308V25.6629L79.6575 25.6489C79.3715 24.4438 78.2905 23.5461 77.0001 23.5461C75.4936 23.5461 74.2696 24.7722 74.2696 26.2811C74.2696 27.7901 75.4936 29.0161 77.0001 29.0161V30.2841Z" fill="#F8E2EA" />
                            <path d="M62.8625 16.9165C61.771 16.9165 60.6864 16.4729 59.8983 15.5996C58.4197 13.9649 58.5487 11.429 60.1808 9.948L61.0282 10.8876C59.9122 11.9006 59.8251 13.6331 60.8364 14.7508C61.8477 15.8686 63.5774 15.9559 64.6934 14.943L65.5408 15.8826C64.7771 16.5742 63.818 16.913 62.8625 16.913V16.9165Z" fill="#F8E2EA" />
                            <path d="M62.8695 16.9095C60.6655 16.9095 58.873 15.1141 58.873 12.9065C58.873 10.699 60.6655 8.90359 62.8695 8.90359C65.0735 8.90359 66.866 10.699 66.866 12.9065V13.5388L61.5025 13.5562V12.2883L65.5269 12.2743C65.2409 11.0692 64.1598 10.1715 62.8695 10.1715C61.363 10.1715 60.1389 11.3976 60.1389 12.9065C60.1389 14.4155 61.363 15.6415 62.8695 15.6415V16.9095Z" fill="#F8E2EA" />
                            <path d="M92.9965 30.2876C91.9049 30.2876 90.8204 29.844 90.0322 28.9707C89.3173 28.1778 88.9511 27.1544 89.0035 26.0855C89.0558 25.0167 89.5231 24.0352 90.3147 23.3191L91.1621 24.2587C90.6216 24.7477 90.3042 25.4219 90.2659 26.1484C90.231 26.8784 90.4786 27.577 90.9668 28.1184C91.9781 29.2362 93.7079 29.3235 94.8238 28.3106L95.6712 29.2502C94.9075 29.9418 93.9485 30.2806 92.993 30.2806L92.9965 30.2876Z" fill="#F8E2EA" />
                            <path d="M93.0036 30.2841C90.7996 30.2841 89.0071 28.4887 89.0071 26.2811C89.0071 24.0736 90.7996 22.2782 93.0036 22.2782C95.2076 22.2782 97 24.0736 97 26.2811V26.9134L91.6365 26.9308V25.6629L95.6609 25.6489C95.3749 24.4438 94.2939 23.5461 93.0036 23.5461C91.497 23.5461 90.273 24.7722 90.273 26.2811C90.273 27.7901 91.497 29.0161 93.0036 29.0161V30.2841Z" fill="#F8E2EA" />
                            <path d="M61.7571 6.78336H60.4912V8.03035H61.7571V6.78336Z" fill="#F8E2EA" />
                            <path d="M65.2478 6.82178H63.9819V8.03035H65.2478V6.82178Z" fill="#F8E2EA" />
                            <path d="M51.5043 30.3051C49.3003 30.3051 47.5078 28.5097 47.5078 26.3021C47.5078 24.0946 49.3003 22.2992 51.5043 22.2992C53.7083 22.2992 55.5008 24.0946 55.5008 26.3021C55.5008 28.5097 53.7083 30.3051 51.5043 30.3051ZM51.5043 23.5706C49.9978 23.5706 48.7737 24.7966 48.7737 26.3056C48.7737 27.8146 49.9978 29.0406 51.5043 29.0406C53.0108 29.0406 54.2349 27.8146 54.2349 26.3056C54.2349 24.7966 53.0108 23.5706 51.5043 23.5706Z" fill="#F8E2EA" />
                            <path d="M42.6046 30.3051C40.4006 30.3051 38.6082 28.5097 38.6082 26.3021C38.6082 24.0946 40.4006 22.2992 42.6046 22.2992C44.8086 22.2992 46.6011 24.0946 46.6011 26.3021C46.6011 28.5097 44.8086 30.3051 42.6046 30.3051ZM42.6046 23.5706C41.0981 23.5706 39.8741 24.7966 39.8741 26.3056C39.8741 27.8146 41.0981 29.0406 42.6046 29.0406C44.1112 29.0406 45.3352 27.8146 45.3352 26.3056C45.3352 24.7966 44.1112 23.5706 42.6046 23.5706Z" fill="#F8E2EA" />
                            <path d="M46.5943 9.21796H45.3284V12.945H46.5943V9.21796Z" fill="#F8E2EA" />
                            <path d="M42.5558 21.0033C40.3518 21.0033 38.5593 19.2079 38.5593 17.0003H39.8252C39.8252 18.5093 41.0493 19.7353 42.5558 19.7353C44.0623 19.7353 45.2864 18.5093 45.2864 17.0003H46.5523C46.5523 19.2079 44.7598 21.0033 42.5558 21.0033Z" fill="#F8E2EA" />
                            <path d="M42.6046 17.0352C40.4006 17.0352 38.6082 15.2398 38.6082 13.0323C38.6082 10.8247 40.4006 9.02933 42.6046 9.02933C44.8086 9.02933 46.6011 10.8247 46.6011 13.0323C46.6011 15.2398 44.8086 17.0352 42.6046 17.0352ZM42.6046 10.3008C41.0981 10.3008 39.8741 11.5268 39.8741 13.0358C39.8741 14.5447 41.0981 15.7708 42.6046 15.7708C44.1112 15.7708 45.3352 14.5447 45.3352 13.0358C45.3352 11.5268 44.1112 10.3008 42.6046 10.3008Z" fill="#F8E2EA" />
                            <path d="M64.4109 20.1929H63.145V30.1304H64.4109V20.1929Z" fill="#F8E2EA" />
                            <path d="M67.3821 22.4493H66.1162V30.2142H67.3821V22.4493Z" fill="#F8E2EA" />
                            <path d="M60.4144 30.3051C58.2105 30.3051 56.418 28.5097 56.418 26.3021C56.418 24.0946 58.2105 22.2992 60.4144 22.2992C62.6184 22.2992 64.4109 24.0946 64.4109 26.3021C64.4109 28.5097 62.6184 30.3051 60.4144 30.3051ZM60.4144 23.5706C58.9079 23.5706 57.6839 24.7966 57.6839 26.3056C57.6839 27.8146 58.9079 29.0406 60.4144 29.0406C61.921 29.0406 63.145 27.8146 63.145 26.3056C63.145 24.7966 61.921 23.5706 60.4144 23.5706Z" fill="#F8E2EA" />
                            <path d="M84.9965 30.3505C84.0305 30.3505 83.0645 30.0675 82.3741 29.5331C82.2136 29.4074 81.8614 29.0825 81.7219 28.9218L82.7123 28.108C82.7821 28.1918 83.068 28.4573 83.1727 28.5376C83.898 29.1 85.2058 29.2502 86.1508 28.8764C86.4263 28.7681 86.8971 28.5166 86.9634 28.066C87.0261 27.6155 86.9041 27.4618 86.8622 27.4094C86.5763 27.0566 85.6905 26.9727 84.9059 26.8959C84.3723 26.847 83.8213 26.7946 83.3505 26.6549L83.7167 25.4393C84.0689 25.5406 84.5327 25.586 85.0279 25.6314C86.0706 25.7292 87.2493 25.841 87.8736 26.62C88.2084 27.0391 88.3339 27.584 88.2397 28.2372C88.1247 29.0406 87.5527 29.6833 86.6321 30.0466C86.1264 30.2457 85.5615 30.3435 84.9965 30.3435V30.3505Z" fill="#F8E2EA" />
                            <path d="M86.2347 27.088C85.886 26.9902 85.4257 26.9448 84.9409 26.8994C83.8982 26.8016 82.7195 26.6898 82.0953 25.9109C81.7605 25.4917 81.6349 24.9468 81.7291 24.2936C81.8512 23.4518 82.4928 22.7707 83.4902 22.4249C84.7561 21.9883 86.6427 22.107 87.8005 23.1794C87.804 23.1794 88.1458 23.5007 88.2469 23.6195L87.2565 24.4334C87.2182 24.3914 87.0124 24.1923 86.9148 24.1015C86.1685 23.4099 84.8014 23.3156 83.9157 23.6195C83.6053 23.7278 83.0717 23.9793 83.002 24.4683C82.9392 24.9189 83.0613 25.0726 83.1031 25.125C83.3891 25.4813 84.2748 25.5616 85.0595 25.6384C85.5826 25.6873 86.1231 25.7397 86.5904 25.8725L86.2312 27.0915L86.2347 27.088Z" fill="#F8E2EA" />
                            <path d="M70.5243 30.099C69.7641 30.099 69.1433 29.4807 69.1433 28.7157V20.1754H70.4092V28.7157C70.4092 28.7786 70.4615 28.831 70.5243 28.831H72.3482V30.099H70.5243Z" fill="#F8E2EA" />
                            <path d="M30.4235 3.41264L17.0287 15.0477L15.3164 13.3257L26.9466 0L30.4235 3.41264Z" fill="#F8E2EA" />
                        </g>
                        <defs>
                            <clipPath id="clip0_245_1632">
                                <rect width="97" height="45" fill="white" />
                            </clipPath>
                        </defs>
                    </svg> */}
                    {/* Mobile Navigation Items */}
                    <div onClick={handleNav} className='block md:hidden'>
                        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={20} />}
                    </div>
                </div>
                <div className='h-screen justify-center items-end flex flex-col'>
                    {navItems.map(item => (
                        <li
                            key={item.id}
                            className={`p-4 font-custom text-3xl flex justify-center items-center rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer ${item.text === 'Kontakt' ? 'text-[#ff0000]' : ''}`}
                        >
                            <a href={item.link} className="block w-full h-full">
                                {item.text}
                            </a>
                        </li>
                    ))}
                </div>
            </ul>
        </div>
    );
};

export default Navbar;
