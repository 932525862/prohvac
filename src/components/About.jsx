import React, { useEffect } from 'react'
import Container from "../utils/Utils"
import { useTranslation } from 'react-i18next'
import about from "../assets/news1.jpg"
import initializeAOS from '../aos/aosSetup'

const About = () => {
    const {t}=useTranslation()

    useEffect(()=>{
        initializeAOS()
    },[])
  return (
    <div id='info' style={{backgroundImage:`url(${about})`}} className='relative bg-cover bg-center h-[88vh] pt-56 sm:pt-44 pb-28 overflow-hidden mt-20'>
    {/* Qora overlay */}
    <div className='absolute inset-0 bg-black bg-opacity-50'></div> 
    
    <Container>
        <div className='relative flex flex-col items-start'>
            <h2 data-aos='fade-right' data-aos-duration='800' data-aos-delay='200' className='text-[#ffffff] text-2xl sm:text-4xl font-bold mb-8 sm:mb-12'>{t('about.h2')}</h2>
            <p data-aos='zoom-in' data-aos-duration='800' data-aos-delay='200' className='text-[#ffffff] text-[12px] sm:text-[16px] max-w-[440px] mb-14 sm:mb-20'>{t('about.p')}</p>
            <a data-aos='fade-left' data-aos-duration='800' data-aos-offset='70' data-aos-delay='300' className='border-[1px] block border-[#ffffff] text-[#ffffff] rounded-2xl py-2 px-6 hover:bg-white hover:text-main font-bold transition-colors duration-300' href="#projects">{t('about.a')}</a>
        </div>
    </Container>
</div>

  )
}

export default About