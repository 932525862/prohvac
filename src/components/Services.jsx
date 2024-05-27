import React, { useEffect } from 'react'
import Container from '../utils/Utils'
import services1 from "../assets/services-1.png"
import services2 from "../assets/services-2.png"
import services3 from "../assets/services-3.png"
import services4 from "../assets/services-4.png"
import { useTranslation } from 'react-i18next'
import initializeAOS from '../aos/aosSetup'

const Services = () => {
    const {t}=useTranslation()

    useEffect(()=>{
        initializeAOS()
    },[])
  return (
    <div id='services' className='bg-primary'>
        <Container>
            <div className='pt-20 pb-10'>
                <h2 className='text-center text-3xl font-semibold mb-12'>{t('services.h2')}</h2>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div data-aos='flip-right' data-aos-duration='1000' className='bg-main rounded-2xl flex items-center justify-between px-1 pl-7 pt-10'>
                        <p className='text-white text-sm md:text-lg'>{t('services.p1')}</p>
                        <img className='object-contain w-full max-w-[140px]' src={services1} alt="" />
                    </div>
                    <div data-aos='flip-left' data-aos-duration='1000' className='bg-main rounded-2xl flex items-center justify-between px-1 pl-7 pt-10'>
                        <p className='text-white text-sm md:text-lg'>{t('services.p2')}</p>
                        <img className='object-contain w-full max-w-[140px]' src={services2} alt="" />
                    </div>
                    <div data-aos='flip-right' data-aos-duration='1000' className='bg-main rounded-2xl flex items-center justify-between px-1 pl-7 pt-10'>
                        <p className='text-white text-sm md:text-lg'>{t('services.p3')}</p>
                        <img className='object-contain w-full max-w-[140px]' src={services3} alt="" />
                    </div>
                    <div data-aos='flip-left' data-aos-duration='1000' className='bg-main rounded-2xl flex items-center justify-between px-1 pl-7 pt-10'>
                        <p className='text-white text-sm md:text-lg'>{t('services.p4')}</p>
                        <img className='object-contain w-full max-w-[140px]' src={services4} alt="" />
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Services