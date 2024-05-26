import React, { useEffect } from 'react'
import Container from "../utils/Utils"
import { useTranslation } from 'react-i18next'
import about from "../assets/about.png"
import initializeAOS from '../aos/aosSetup'

const About = () => {
    const {t}=useTranslation()

    useEffect(()=>{
        initializeAOS()
    },[])
  return (
    <div style={{backgroundImage:`url(${about})`}} className='bg-cover bg-center h-[88vh] pt-56 sm:pt-44 pb-28 overflow-hidden'>
        <Container>
            <div>
                <h2 data-aos='fade-right' data-aos-duration='800' data-aos-delay='200' className='text-white text-2xl sm:text-4xl font-bold mb-8 sm:mb-12'>{t('about.h2')}</h2>
                <p data-aos='zoom-in' data-aos-duration='800' data-aos-delay='200' className='text-white text-[12px] sm:text-[16px] max-w-[340px] mb-14 sm:mb-20'>{t('about.p')}</p>
                <button data-aos='fade-left' data-aos-duration='800' data-aos-delay='300' className='border-[1px] border-white text-white rounded-2xl py-2 px-6 hover:bg-white hover:text-main font-bold transition-colors duration-300'>
                    <a className='sm:text-[16px] text-sm' href="#">{t('about.a')}</a>
                </button>
                
            </div>
        </Container>
    </div>
  )
}

export default About