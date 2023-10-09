import Title from "../Title";
import WorksCard from '../WorksCard'
import {Swiper, SwiperSlide, SwiperProps} from "swiper/react";
import {  Navigation, EffectCoverflow, Pagination } from "swiper/modules";
import {useState, useEffect} from 'react'
import checkResponsive from "../../utils/checkResponsive";

import './styles.css'

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
            if(query === 'LG') setSlideSettings({perView: 1.7, stretch: 80, depth: 120})
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
    <div 
        id="projects"
        className='flex flex-col pt-12 pb-0 lg:py-8 xl:py-16 px-5 md:px-10 xl:px-20 2xl:px-40 gap-12 lg:gap-20 w-full text-gray-100'>
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
                    title="Ecommerce - Artigos Decor" 
                    text="Ecommerce profissional, com sistema de pagamento via Mercado Pago, integração com Correios, layout moderno e responsivo. Cadastro e edição de produtos, categorias, variações, estilização das cores, fontes, banners e etc."
                    repository_link="https://github.com/VitorVA6/eCommerce-ArtigosDecor"
                    app_link="https://artigosdecor.onrender.com/"
                    project_image="/ecommerce.png"
                />
            </SwiperSlide>
            <SwiperSlide>
                <WorksCard 
                    title="Segmentador de imagens" 
                    text="Esse trabalho é uma das partes que compõem o meu TCC. Consiste em realizar a segmentação automática da região pulmonar de imagens radiográficas do peito, utilizando Redes Neurais Convolucionais, sendo elas: U-net e ResUnet."
                    repository_link="https://colab.research.google.com/drive/18ndQioKswNWpvzl4n4nODtPIsfeHhYSZ#scrollTo=V1FaEDHJ2s1z"
                    app_link="/tcc.pdf"
                    project_image="/image_segment.png"
                />
            </SwiperSlide>
            <SwiperSlide>
                <WorksCard 
                    title="Detector de COVID-19" 
                    text="Esse trabalho é uma das partes que compõem o meu TCC. Consiste em realizar a classificação automática de imagens radiográficas do peito em 3 diferentes classes: Covid-19, Non-convid e Normal, com Redes Neurais Convolucionais."
                    repository_link="https://colab.research.google.com/drive/1d4bN9J78y7SNgbeYrFTAEmtzgGwJ97F5"
                    app_link="/tcc.pdf"
                    project_image="/image_class.png"
                />
            </SwiperSlide>
            <SwiperSlide>
                <WorksCard 
                    title="Portfólio" 
                    text="Portfólio desenvolvido com o intuito de mostrar os projetos que tenho desenvolvido e as tecnologias que domino. O site foi desenvolvido em React com o framework Vite, utilizando a linguagem Typescript e o Tailwind para estilização dos componentes."
                    repository_link="https://github.com/VitorVA6/portfolio"
                    app_link="https://vitordev.vercel.app/"
                    project_image="/portfolio.png"
                />
            </SwiperSlide>
            <SwiperSlide>
                <WorksCard 
                    title="IoT - MQTT" 
                    text="Aplicação desenvolvida em Python, C e C++, cujo objetivo é realizar o gerenciamento de sensores digitais e analógicos via Wifi utilizando o protocolo MQTT. A partir de uma placa Raspberry Pi e uma ESP8266, é possível monitorar via smartphone ou PC sensores de temperatura, ascender lâmpadas e etc."
                    repository_link="https://github.com/VitorVA6/IoT_MQTT"
                    app_link=""
                    project_image="/iot-mqtt.png"
                />
            </SwiperSlide>
       
            <div className="slider-controler">
                <div className="swiper-pagination"/>
            </div>
            
        </Swiper>
    </div>
  )
}
