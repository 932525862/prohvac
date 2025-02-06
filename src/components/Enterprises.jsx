import React from 'react'
import { useTranslation } from 'react-i18next'
import ent1 from "../assets/ham1.jpg"
import ent2 from "../assets/ham2.jpg"
import ent3 from "../assets/ham3.jpg"
import ent4 from "../assets/ham4.jpg"
import ent5 from "../assets/ham5.jpg"
import ent6 from "../assets/ham6.jpg"
import ent7 from "../assets/ham7.jpg"
import ent8 from "../assets/ham8.jpg"

const Enterprises = () => {
    const {t}=useTranslation()
  return (
    <div id='enterprises' className='overflow-hidden'>
        <h2 data-aos='zoom-in' data-aos-duration='900' className='text-center mx-5 text-2xl sm:text-3xl font-semibold mb-8'>{t('enterprises')}</h2>
        <div className='grid grid-cols-[1fr,1fr] md:grid-cols-[1fr,1fr,1fr,1fr] grid-rows-[300px,300px,300px,300px] sm:grid-rows-[400px,400px,400px,400px] md:grid-rows-[550px,550px]'>
            <div data-aos='flip-up' data-aos-duration='600'>
                <img className='w-full h-full object-cover object-center' src={ent1} alt="" />
            </div>
            <div data-aos='flip-up' data-aos-duration='600'>
                <img className='w-full h-full object-cover object-center' src={ent2} alt="" />
            </div>
            <div data-aos='flip-up' data-aos-duration='600'>
                <img className='w-full h-full object-cover object-center' src={ent3} alt="" />
            </div>
            <div data-aos='flip-up' data-aos-duration='600'>
                <img className='w-full h-full object-cover object-center' src={ent4} alt="" />
            </div>
            <div data-aos='flip-down' data-aos-duration='600'>
                <img className='w-full h-full object-cover object-center' src={ent5} alt="" />
            </div>
            <div data-aos='flip-down' data-aos-duration='600'>
                <img className='w-full h-full object-cover object-center' src={ent6} alt="" />
            </div>
            <div data-aos='flip-down' data-aos-duration='600'>
                <img className='w-full h-full object-cover object-center' src={ent7} alt="" />
            </div>
            <div data-aos='flip-down' data-aos-duration='600'>
                <img className='w-full h-full object-cover object-center' src={ent8} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Enterprises