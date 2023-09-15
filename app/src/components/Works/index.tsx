import Title from "../Title";
import WorksCard from '../WorksCard'
import {Swiper, SwiperSlide, SwiperProps} from "swiper/react";
import {  Navigation, EffectCoverflow, Pagination } from "swiper/modules";
import {useState, useEffect} from 'react'
import checkResponsive from "../../utils/checkResponsive";

import './styles.css'
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';


export default function Works() {

    type slideSettingsType = {
        perView:number | 'auto',
        stretch: number,
        depth: number,
        
    }

    const [slideSettings, setSlideSettings] = useState<slideSettingsType>({
        perView: 2.1,
        stretch: 120,
        depth: 130
    })

    const swiperProps:SwiperProps = {
        slidesPerView: slideSettings.perView,
    }

    useEffect( () => {
        function slideHandler(){
            const query = checkResponsive(window.innerWidth)
            if(query === 'SM') setSlideSettings({perView: 1, stretch: 50, depth: 100})
            if(query === 'MD') setSlideSettings({perView: 1.5, stretch: 80, depth: 80})
            if(query === 'LG') setSlideSettings({perView: 2, stretch: 100, depth: 120})
            if(query === 'XL') setSlideSettings({perView: 2, stretch: 100, depth: 120})
            if(query === '2XL') setSlideSettings({perView: 2.1, stretch: 120, depth: 130})
        }

        slideHandler()
        window.addEventListener('resize', slideHandler)

        return () => {
            window.removeEventListener('resize', slideHandler)
        }

    }, [] )

  return (
    <div className='flex flex-col py-12 lg:py-16 px-5 md:px-10 xl:px-40 gap-12 lg:gap-20 w-full text-gray-100'>
        <Title textSize='text-[26px] lg:text-3xl' w='w-1/2' marginB='mb-0.5 lg:mb-1'>Trabalhos</Title>
        <Swiper 
            className="w-full"
            {...swiperProps} 
            modules={[ Navigation, EffectCoverflow, Pagination]}
            navigation
            pagination = {{
                el: '.swiper-pagination'
            }}
            centeredSlides = {true}
            loop
            coverflowEffect={{
                rotate: 0,
                stretch: slideSettings.stretch,
                depth: slideSettings.depth,
                modifier: 2,
                slideShadows: true
            }}
            effect='coverflow'
        >
            <SwiperSlide>
                <WorksCard
                    title="Ecommerce" 
                    text="Ecommerce profissional, com sistema de pagamento via Mercado Pago, integração com Correios, layout moderno e responsivo. Cadastro e edição de produtos, categorias, variações, estilização das cores, fontes e etc."
                
                />
            </SwiperSlide>
            <SwiperSlide>
                <WorksCard 
                    title="Segmentador de imagens" 
                    text="Esse trabalho é uma das partes que compõem o meu TCC. Consiste em realizar a segmentação automática da região pulmonar de imagens radiográficas do peito, utilizando Redes Neurais Convolucionais, sendo elas: U-net e ResUnet."
                    
                />
            </SwiperSlide>
            <SwiperSlide>
                <WorksCard 
                    title="Detector de COVID-19" 
                    text="Esse trabalho é uma das partes que compõem o meu TCC. Consiste em realizar a classificação automática de imagens radiográficas do peito em 3 diferentes classes: Covid-19, Non-convid e Normal, com Redes Neurais Convolucionais."
                    
                />
            </SwiperSlide>
            <SwiperSlide>
                <WorksCard 
                    title="Army lover" 
                    text="Esse trabalho é uma das partes que compõem o meu TCC. Consiste em realizar a classificação automática de imagens radiográficas do peito em 3 diferentes classes: Covid-19, Non-convid e Normal, com Redes Neurais Convolucionais."
                    
                />
            </SwiperSlide>
            <SwiperSlide>
                <WorksCard 
                    title="Shopee total" 
                    text="Esse trabalho é uma das partes que compõem o meu TCC. Consiste em realizar a classificação automática de imagens radiográficas do peito em 3 diferentes classes: Covid-19, Non-convid e Normal, com Redes Neurais Convolucionais."
                    
                />
            </SwiperSlide>
            <SwiperSlide>
                <WorksCard 
                    title="Muy crazy" 
                    text="Esse trabalho é uma das partes que compõem o meu TCC. Consiste em realizar a classificação automática de imagens radiográficas do peito em 3 diferentes classes: Covid-19, Non-convid e Normal, com Redes Neurais Convolucionais."
                    
                />
            </SwiperSlide>
            <SwiperSlide>
                <WorksCard 
                    title="Muy crazy" 
                    text="Esse trabalho é uma das partes que compõem o meu TCC. Consiste em realizar a classificação automática de imagens radiográficas do peito em 3 diferentes classes: Covid-19, Non-convid e Normal, com Redes Neurais Convolucionais."
                    
                />
            </SwiperSlide>
            <div className="slider-controler">
                <div className="swiper-pagination"/>
            </div>
            
        </Swiper>
    </div>
  )
}
