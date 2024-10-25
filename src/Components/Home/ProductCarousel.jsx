import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProductCard from './ProductCard';
import product1 from "../assets/product1.png"
import product2 from "../assets/product2.png"
import product3 from "../assets/product3.png"
import product4 from "../assets/product4.png"

const ProductCarousel = () => {
    const responsive = {
        superLargeDesktop: { breakpoint: { max: 4000, min: 1440 }, items: 5 },
        desktop: { breakpoint: { max: 1440, min: 768 }, items: 3 },
        tablet: { breakpoint: { max: 768, min: 464 }, items: 2 },
        mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
    };

    const products = [
        {
            id: 1,
            backgroundColor: '#FADEEA',
            image: product1,
            title: 'Lulet e mamit',
            description: 'Si nje shpikje e momentit e mamit duke provuar me format prerëse të biskotave, linden dhe Lulet e Mamit! Buka ne forme lule e pjekur ne furre dhe e mbushur me nje krem homogjen me arra dhe salce kosi, te bukra per tu pare dhe te shijshme, te paktën keshtu thonë',
            buttonColor: '#1F1634',
            buttonTextColor: '#F3CCE7',
        },
        {
            id: 2,
            backgroundColor: '#3FAF74',
            image: product2,
            title: 'Paninet e Nanës',
            description: 'Paninet e Nanes jane te përgatitura me shume dashuri per cdo event nga vete Nana. Aroma e bukes homemade fiton zemrat e te gjitheve! Jane panine te vogla te cilat mbushen me proshute djathe (klasikja) por mund te modifikohen e te mbushen me shume lloje te tjera, fantazia eshte limiti.',
            buttonColor: '#E5E874',
            buttonTextColor: '#201736',
        },
        {
            id: 3,
            backgroundColor: '#E5DBC7',
            image: product3,
            title: 'Pasta Sfoglia',
            description: 'Pasta sfoglia nje produkt i gjendur kudo ne shqiperi, shume i thjeshte per tu përdorur, gjen vend ne tavolinat tona te eventeve! Do e gjeni me forma te ndryshme te kripura ose te embla! Nder te preferuarat tona jane "pigs in a blanket" me pak fjalë pasta sfoglia e mbushur me salcice',
            buttonColor: '#1F1634',
            buttonTextColor: '#E5DBC7',
        },
        {
            id: 4,
            backgroundColor: '#D53D6E',
            image: product4,
            title: 'Tramezzini',
            description: 'Te preferuarat e shokeve tane, te ashtuquajturat tramezzini, nje forme buke super e bute, e cila mund te kombinohet me lloj-lloj salcash dhe mbushjesh! Te preferuarat e momentit jane dy klasike, tramezzini pikant dhe tramezzini me pule! ',
            buttonColor: '#FADEEA',
            buttonTextColor: '#1F1634',
        },
        {
            id: 5,
            backgroundColor: '#FADEEA',
            image: product2,
            title: 'Tramezzini',
            description: 'Te preferuarat e shokeve tane, te ashtuquajturat tramezzini, nje forme buke super e bute, e cila mund te kombinohet me lloj-lloj salcash dhe mbushjesh! Te preferuarat e momentit jane dy klasike, tramezzini pikant dhe tramezzini me pule! ',
            buttonColor: '#1F1634',
            buttonTextColor: '#F3CCE7',
        },
        {
            id: 6,
            backgroundColor: '#e6f7ff',
            image: product2,
            title: 'Tramezzini',
            description: 'Te preferuarat e shokeve tane, te ashtuquajturat tramezzini, nje forme buke super e bute, e cila mund te kombinohet me lloj-lloj salcash dhe mbushjesh! Te preferuarat e momentit jane dy klasike, tramezzini pikant dhe tramezzini me pule! ',
            buttonColor: '#ff0000',
            buttonTextColor: '#ffffff',
        },
        
    ];

    return (
        <Carousel responsive={responsive}>
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    backgroundColor={product.backgroundColor}
                    image={product.image}
                    title={product.title}
                    description={product.description}
                    buttonColor={product.buttonColor}
                    buttonTextColor={product.buttonTextColor}
                />
            ))}
        </Carousel>
    );
};

export default ProductCarousel;
