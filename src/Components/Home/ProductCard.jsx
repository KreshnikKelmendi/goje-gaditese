import React from 'react';

const ProductCard = ({ backgroundColor, image, title, description, buttonColor, buttonTextColor }) => {
    return (
        <div className='w-full'>
        <div
            className="lg:w-[355px] lg:h-[568px]"
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
                className='lg:w-[329px] lg:h-[282px] object-cover rounded-[10px]'
            />
            <p className='font-custom' style={{ color: '#000e5d', fontSize: '32px', margin: '20px 0 10px 0' }}>{title}</p>
            <p className='leading-[18px]' style={{ color: '#333', fontSize: '15px', flexGrow: 1 }}>{description}</p>
            <button
            className='w-[137px] h-[32px] flex justify-center items-center rounded-[20px] mt-6'
                style={{
                    backgroundColor: buttonColor,
                    color: buttonTextColor,
                    padding: '10px 20px',
                    border: 'none',
                    cursor: 'pointer',
                }}
            >
                View More
            </button>
        </div>
        </div>
    );
};

export default ProductCard;
