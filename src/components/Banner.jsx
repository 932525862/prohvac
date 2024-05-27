import React, { useEffect } from "react";
import banner from "../assets/banner.jpeg";
import { useTranslation } from "react-i18next";
import initializeAos from "../aos/aosSetup"

const Banner = () => {
  const {t}=useTranslation()

  useEffect(()=>{
    initializeAos()
  },[])
  return (
    <div
      style={{ backgroundImage: `url(${banner})` }}
      className="h-[100vh] overflow-hidden bg-cover bg-center before:bg-[rgba(0,0,0,.5)] before:absolute before:top-0 before:left-0 before:w-full before:h-full"
    >
      <div className="h-[100vh] flex flex-col justify-center max-w-[1320px] px-5 mx-auto text-white relative">
            <h1 data-aos='zoom-in' data-aos-duration='700' data-aos-delay='300' className="text-[40px] sm:text-[58px] md:text-[70px] lg:text-[80px] font-extrabold leading-normal">ATAEV <br /> BAHODIR BUILD</h1>
            <p data-aos='fade-right' data-aos-duration='700' data-aos-delay='340' className="mt-7 mb-8 text-lg sm:text-xl font-bold">{t('banner.p')}</p>
            <div data-aos='fade-up' data-aos-duration='700' data-aos-delay='300' className="flex items-center gap-5">
                <a className="border-[1px] border-white text-white bg-transparent rounded-3xl px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-[16px] font-semibold transition-all duration-300 hover:bg-white hover:text-main" href="#projects">{t('banner.btn1')}</a>
                <a className="border-[1px] border-white text-white bg-transparent rounded-3xl px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-[16px] font-semibold transition-all duration-300 hover:bg-white hover:text-main" href="#communication">{t('banner.btn2')}</a>
            </div>
          </div>
    </div>
  );
};

export default Banner;
