import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import logo from "../assets/Group 108.png"

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Toggle visibility when scrolled down 100px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-1 right-[3px] p-2 w-10 h-10 bg-[#4A296A] flex items-center justify-center cursor-pointer z-50 transition-all duration-300 group"
        aria-label="Scroll to top"
      >
        {/* Logo */}
        <img
          src={logo}
          alt="Logo"
          className="w-[16px] h-auto opacity-100 transition-opacity duration-300 ease-in-out group-hover:opacity-0"
        />
        {/* Arrow Icon, hidden by default, visible on hover */}
        <FaArrowUp
          className="absolute opacity-0 text-white transition-opacity duration-300 ease-in-out group-hover:opacity-100 text-xl"
        />
      </button>
    )
  );
}

export default ScrollToTopButton;
