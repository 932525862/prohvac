import React, { useEffect } from 'react'
import logo from "../assets/logo-bg.png"
import Container from "../utils/Utils"
import { useTranslation } from 'react-i18next';
import initializeAos from "../aos/aosSetup"

const Footer = () => {
    const {t}=useTranslation()

    useEffect(()=>{
        initializeAos()
      },[])
  return (
    <div className='bg-[#ffffff] py-12 sm:py-20'>
        <Container>
            <div data-aos='zoom-in' data-aos-duration='700' data-aos-delay='140' className='flex flex-col sm:flex-row items-center sm:items-start sm:justify-between gap-10 sm:gap-5'>
                <div>
                    <img className='w-full max-w-[400px] sm:max-w-[370px] mb-5' src={logo} alt="" />
                </div>

                <div>
                    <h4 className='font-semibold text-xl sm:text-2xl mb-3'>{t('footer.h4')}</h4>
                    <ul className='flex flex-col gap-3'>
                        <li className='opacity-90 text-lg sm:text-xl'>
                            <a className='hover:border-b-black border-transparent border-b-2 transition-all duration-500' href="#enterprises">{t('nav.enterprises')}</a>
                        </li>
                        <li className='opacity-90 text-lg sm:text-xl'>
                            <a className='hover:border-b-black border-transparent border-b-2 transition-all duration-500' href="#about">{t('nav.about')}</a>
                        </li>
                        <li className='opacity-90 text-lg sm:text-xl'>
                            <a className='hover:border-b-black border-transparent border-b-2 transition-all duration-500' href="#news">{t('nav.news')}</a>
                        </li>
                        <li className='opacity-90 text-lg sm:text-xl'>
                            <a className='hover:border-b-black border-transparent border-b-2 transition-all duration-300' href="#projects">{t('footer.projects')}</a>
                        </li>
                    </ul>
                </div>

                <div className='flex flex-col gap-3'>
                    <h4 className='font-semibold text-xl sm:text-2xl mb-3'>{t('footer.h42')}</h4>
                    <a className='hover:border-b-black w-[84%] border-transparent border-b-2 transition-all duration-300 opacity-90 text-lg sm:text-xl' href="tel:+998994625045">+998998555045</a>
                    <a className='hover:border-b-black w-[84%] border-transparent border-b-2 transition-all duration-300 opacity-90 text-lg sm:text-xl' href="tel:+998998956568">+998998956568</a>
                    <a className='hover:border-b-black w-[84%] border-transparent border-b-2 transition-all duration-300 opacity-90 text-lg sm:text-xl' href="tel:+998909161020">+998909161020</a>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Footer
