import {useEffect, useState} from 'react'
import Title from '../Title'
import SkillCard from '../SkillCard'
import { FaServer, FaReact} from 'react-icons/fa'
import {BsDatabaseCheck} from 'react-icons/bs'
import GlowingIcon from '../GlowingIcon'
import {Swiper, SwiperSlide} from "swiper/react";
import {  Pagination } from "swiper/modules";
import checkResponsive from '../../utils/checkResponsive'

import './styles.css'

export default function Services() {

  const [perView, setPerView] = useState<number>(1)

  useEffect( () => {
    function slideHandler(){
        const query = checkResponsive(window.innerWidth)
        if(query === 'SM') setPerView(1)
        else setPerView(1.6)
    }

    slideHandler()

    window.addEventListener('resize', slideHandler)
    return () => {
        window.removeEventListener('resize', slideHandler)
    }
  })

  return (
    <div 
        id='skills'
        className='flex flex-col pb-12 pt-0 lg:pt-8 xl:py-12 px-5 md:px-10 xl:px-20 2xl:px-40 gap-8 lg:gap-12 w-full text-gray-100'>
        <Title textSize='text-[26px] lg:text-3xl' w='w-1/2' marginB='mb-0.5 lg:mb-1'>Serviços</Title>
        <Swiper
          modules={[Pagination]}
          pagination={{
            el: '.container-pagination'
          }}
          spaceBetween={20}
          loop={false}
          slidesPerView={perView}
          className='w-full lg:hidden'
        >
          <SwiperSlide>
            <SkillCard 
              title={'Front-end'} 
              icon={<GlowingIcon icon={<FaReact className='w-16 h-16 text-sky-300 mb-2 relative z-50'/>}/>} 
              text='Tenho amplo domínio dos principais conceitos e tecnologias do front-end. Como responsividade, HTML5, CSS, javascript, typescript e ReactJS. Além de bibliotecas para otimizar a estilização dos componentes, como o Tailwind CSS '/>
          </SwiperSlide>
          <SwiperSlide>
            <SkillCard 
              title={'Back-end'} 
              icon={<GlowingIcon icon={<FaServer className='w-16 h-16 text-sky-300 mb-2 relative z-50'/>}/>} 
              text='Tenho prática na construção de APIs Restful com typescript/javascript em NodeJS, criação de rotas HTTP com Express, autenticação OAuth e com Json Web Tokens, implementação de CRUDs, Arquetatura Clean, MVC e etc.'/>
          </SwiperSlide>
          <SwiperSlide>
            <SkillCard 
              title={'Database'} 
              icon={<GlowingIcon icon={<BsDatabaseCheck className='w-16 h-16 text-sky-300 mb-2 relative z-50'/>}/>} 
              text='Conhecimento em bancos de dados relacionais e não relacionais. Tendo prática com MySQL e MongoDB. Além de prática com suas respectivas ORMs mais utilizadas, sendo elas Sequelize e Mongoose respectivamente.'/>
          </SwiperSlide>
          <div className='container-pagination'></div>
        </Swiper>

        <div className='grid-cols-3 gap-5 xl:gap-7 hidden lg:grid'>
            <SkillCard 
                title={'Front-end'} 
                icon={<GlowingIcon icon={<FaReact className='w-16 h-16 text-sky-300 mb-2 relative z-50'/>}/>} 
                text='Tenho amplo domínio dos principais conceitos e tecnologias do front-end. Como responsividade, HTML5, CSS, javascript, typescript e ReactJS. Além de bibliotecas para otimizar a estilização dos componentes, como o Tailwind CSS '/>
            <SkillCard 
                title={'Back-end'} 
                icon={<GlowingIcon icon={<FaServer className='w-16 h-16 text-sky-300 mb-2 relative z-50'/>}/>} 
                text='Tenho prática na construção de APIs Restful com typescript/javascript em NodeJS, criação de rotas HTTP, autencição OAuth e com Json Web Tokens, implementação de CRUDs e etc.'/>
            <SkillCard 
                title={'Database'} 
                icon={<GlowingIcon icon={<BsDatabaseCheck className='w-16 h-16 text-sky-300 mb-2 relative z-50'/>}/>} 
                text='Conhecimento em bancos de dados relacionais e não relacionais. Tendo prática com MySQL e MongoDB. Além de prática com suas respectivas ORMs mais utilizadas, sendo elas Sequelize e Mongoose respectivamente.'/>
        </div>
    </div>
  )
}
