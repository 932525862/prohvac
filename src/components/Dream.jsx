import React, { useEffect, useState } from 'react';
import dream1 from "../assets/work1.jpg";
import dream2 from "../assets/work2.jpg";
import dream3 from "../assets/work3.jpg";
import dream4 from "../assets/wok4.jpg";
import dream5 from "../assets/work5.jpg";
import dream6 from "../assets/work6.jpg";
import dream7 from "../assets/work8.jpg";
import dream8 from "../assets/work9.jpg";
import dream9 from "../assets/work10.jpg";
import initializeAOS from '../aos/aosSetup';
import { useTranslation } from 'react-i18next';

const images = [dream1, dream2, dream3, dream4, dream5, dream6,dream7,dream8,dream9];

const Dream = () => {
    const { t } = useTranslation();
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        initializeAOS();
    }, []);

    return (
        <div className='mt-20 overflow-x-hidden'>
            <h2 data-aos='zoom-in' data-aos-duration='900' className='text-center text-2xl sm:text-3xl font-semibold mb-8'>{t('dream')}</h2>
            
            <div className='grid grid-cols-[1fr,1fr] sm:grid-cols-[1fr,1fr,1fr] grid-rows-[230px,230px] sm:grid-rows-[270px,270px] md:grid-rows-[350px,350px] gap-2'>
                {images.map((img, index) => (
                    <div key={index} data-aos='flip-up' data-aos-duration='600' onClick={() => setSelectedImage(img)}>
                        <img className='w-full h-full object-cover object-center cursor-pointer' src={img} alt='' />
                    </div>
                ))}
            </div>
            
            {selectedImage && (
                <div className='fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50' onClick={() => setSelectedImage(null)}>
                    <div className='relative max-w-3xl max-h-[80vh]'>
                        <img src={selectedImage} className='w-full h-full object-contain' alt='' />
                        <button className='absolute top-2 right-2 text-white text-3xl' onClick={() => setSelectedImage(null)}>&times;</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dream;