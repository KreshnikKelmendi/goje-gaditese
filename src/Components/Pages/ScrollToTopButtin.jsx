import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

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
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '6px',
          padding: '7px',
          fontSize: '20px',
          borderRadius: '10px',
          backgroundColor: '#D53C6F',
          color: '#fff',
          border: 'none',
          cursor: 'pointer',
          zIndex: '1000',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </button>
    )
  );
}

export default ScrollToTopButton;
