import React from "react";
import Container from "../utils/Utils";
import banner from "../assets/banner.jpeg";
import { useTranslation } from "react-i18next";

const Banner = () => {
  const {t}=useTranslation()
  return (
    <div
      style={{ backgroundImage: `url(${banner})` }}
      className="h-[100vh] bg-cover bg-center before:bg-[rgba(0,0,0,.5)] before:absolute before:top-0 before:left-0 before:w-full before:h-full"
    >
      <div className="h-[100vh] flex flex-col justify-center max-w-[1320px] px-5 mx-auto text-white relative">
            <h1 className="text-[40px] sm:text-[58px] md:text-[70px] lg:text-[80px] font-extrabold leading-normal">ATAEV <br /> BAHODIR BUILD</h1>
            <p className="mt-7 mb-8 text-lg sm:text-xl font-bold">{t('banner.p')}</p>
            <div className="flex items-center gap-5">
              <button className="border-[1px] border-white text-white bg-transparent rounded-3xl px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-[16px] font-semibold transition-all duration-300 hover:bg-white hover:text-main">{t('banner.btn1')}</button>
              <button className="border-[1px] border-white text-white bg-transparent rounded-3xl px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-[16px] font-semibold transition-all duration-300 hover:bg-white hover:text-main">{t('banner.btn2')}</button>
            </div>
          </div>
    </div>
  );
};

export default Banner;
