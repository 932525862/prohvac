import React from 'react'
import logo from "../assets/logo-dark.png"
import Container from "../utils/Utils"
import { FaInstagram,FaFacebookF } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const {t}=useTranslation()
  return (
    <div className='bg-primary py-12 sm:py-20'>
        <Container>
            <div className='flex flex-col sm:flex-row items-center sm:items-start sm:justify-between gap-10 sm:gap-5'>
                <div>
                    <img className='w-full max-w-[110px] sm:max-w-[120px] mb-5' src={logo} alt="" />
                    <div className='flex items-center gap-4'>
                        <button className='rounded-full w-[34px] h-[34px] sm:w-[40px] sm:h-[40px] flex items-center justify-center border-[1px] border-black bg-black text-white text-lg sm:text-xl p-6 hover:text-black hover:bg-transparent transition-colors duration-300'>
                            <a href="https://www.instagram.com/ataev_bahodir_build/" target='blank'><FaInstagram/></a>
                        </button>
                        <button className='rounded-full w-[34px] h-[34px] sm:w-[40px] sm:h-[40px] flex items-center justify-center border-[1px] border-black bg-black text-white text-lg sm:text-xl p-6 hover:text-black hover:bg-transparent transition-colors duration-300'>
                           <a href="https://www.facebook.com/profile.php?id=61556409174910&mibextid=LQQJ4d" target='blank'><FaFacebookF /></a>
                        </button>
                    </div>
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
                    <a className='hover:border-b-black w-[84%] border-transparent border-b-2 transition-all duration-300 opacity-90 text-lg sm:text-xl' href="tel:+998974839999">+998974839999</a>
                    <a className='hover:border-b-black w-[84%] border-transparent border-b-2 transition-all duration-300 opacity-90 text-lg sm:text-xl' href="tel:+998997126666">+998997126666</a>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Footer