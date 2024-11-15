import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ backgroundColor, descriptionColor, image, title, description, buttonColor, buttonTextColor, product, id }) => {

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className='w-full'>
            <div
                className="lg:w-[355px] lg:h-[568px] mb-10 lg:mb-0"
                style={{
                    backgroundColor: backgroundColor,
                    padding: '15px',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: '10px',
                }}
            >
                <img
                    src={image}
                    alt={title}
                    className='lg:w-[329px] lg:h-[282px] w-full h-[25vh] object-cover rounded-[10px]'
                />
                <p className='font-custom leading-[33px]' style={{ color: '#000e5d', fontSize: '32px', margin: '20px 0 10px 0' }}>{title}</p>
                <p className='leading-[18px] font-custom1 text-[15px]' style={{color: descriptionColor, fontSize: '15px',flexGrow: 1}}>
                    {description}
                </p>
                <Link to={`/produktet/${product.id}`} onClick={handleClick}>
                    <button
                        className='w-full lg:w-[187px] lg:h-[32px] flex justify-center items-center rounded-[20px] mt-6 font-custom1 hover:scale-110 hover:duration-200 ease-linear'
                        style={{
                            backgroundColor: buttonColor,
                            color: buttonTextColor,
                            padding: '10px 20px',
                            border: 'none',
                            cursor: 'pointer',
                        }}
                    >
                        Shiko më shumë
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ProductCard;
