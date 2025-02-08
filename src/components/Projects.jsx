import React, { useEffect } from "react";
import Container from "../utils/Utils";
import ProjectsCard from "./ProjectsCard";
import magic from "../assets/loyha1.jpg"
import gardens from "../assets/loyha2.jpg"
import fonon from "../assets/loyha3.jpg"
import invento from "../assets/loyha7.jpg"
import school from "../assets/loyha5.jpg"
import boulevard from "../assets/loyha6.jpg"
import { useTranslation } from "react-i18next";
import initializeAOS from "../aos/aosSetup";

const Projects = () => {
  const {t}=useTranslation()

  useEffect(()=>{
    initializeAOS()
  },[])
  return (
    <div id="projects" className="mt-12 overflow-hidden">
      <Container>
        <div>
          <h2 data-aos='fade-right' data-aos-delay='200' className="text-3xl font-semibold mb-8">{t('projects.h2')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-[320px,320px,320px] gap-5 md:gap-6 lg:gap-12">
            <ProjectsCard ind={1} img={magic} title={t('part.expo')} desc={t('projects.p1')} />
            <ProjectsCard ind={2} img={gardens} title={t('part.citi')}desc={t('projects.p2')} />
            <ProjectsCard ind={3} img={fonon} title={t('part.przdent')} desc={t('projects.p3')} />
            <ProjectsCard ind={4} img={invento} title={t('part.zamin')}desc={t('projects.p4')} />
            <ProjectsCard ind={5} img={school} title={t('part.yurt')} desc={t('projects.p5')} />
            <ProjectsCard ind={6} img={boulevard} title={t('part.ren')} desc={t('projects.p6')} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Projects;
