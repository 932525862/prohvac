import React from 'react'
import { useTranslation } from 'react-i18next'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ent1 from "../assets/akfa.png"
import ent2 from "../assets/diuz.png"
import ent3 from "../assets/hisenseoq.png"
import ent4 from "../assets/koc-1.png"
import ent5 from "../assets/toshiba.png"
import ent6 from "../assets/shivakioq.png"
import ent7 from "../assets/mitsubishi-electric.svg"
import ent8 from "../assets/aux1.jpeg"

const Enterprises = () => {
    const { t } = useTranslation();

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000, // Slayder tezligi tezlashtirildi (1 sekunda)
        responsive: [
            {
                breakpoint: 1280, // Ekran 1280px dan kichik bo'lsa
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <div id='enterprises' className='overflow-hidden mt-20 px-10 max-w-screen-2xl mx-auto'>
            <h2 data-aos='zoom-in' data-aos-duration='900' className='text-center text-2xl sm:text-3xl font-semibold mb-8'>
                {t('enterprises')}
            </h2>
            <Slider {...settings} className=''>
                {[ent1, ent2, ent3, ent4, ent5, ent6, ent7, ent8].map((image, index) => (
                    <div key={index} className='px-3'>
                        <img className='w-full h-[200px] object-contain' src={image} alt={`enterprise-${index}`} />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Enterprises;
