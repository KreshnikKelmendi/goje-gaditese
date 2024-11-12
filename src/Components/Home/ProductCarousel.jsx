import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProductCard from './ProductCard';
import { products } from '../Products/products';

const ProductCarousel = () => {
    const responsive = {
        superLargeDesktop: { breakpoint: { max: 4000, min: 1440 }, items: 5 },
        desktop: { breakpoint: { max: 1440, min: 768 }, items: 3 },
        tablet: { breakpoint: { max: 768, min: 464 }, items: 2 },
        mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
    };


    return (
        <Carousel responsive={responsive}>
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                    backgroundColor={product.backgroundColor}
                    image={product.image}
                    title={product.title}
                    description={product.description}
                    buttonColor={product.buttonColor}
                    buttonTextColor={product.buttonTextColor}
                    descriptionColor={product.descriptionColor}
                />
            ))}
        </Carousel>
    );
};

export default ProductCarousel;
