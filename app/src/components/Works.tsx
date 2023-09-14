import Title from "./Title";
import WorksCard from './WorksCard'

import {Swiper, SwiperSlide, SwiperProps} from "swiper/react";
import {  Navigation, EffectCoverflow, Pagination } from "swiper/modules";

import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';


export default function Works() {

    const swiperProps:SwiperProps = {
        slidesPerView: 2.1,
    }

  return (
    <div className='flex flex-col py-16 px-40 gap-20 w-full bg-gray-900 text-gray-100'>
        <Title textSize='text-3xl' w='w-1/2' marginB='mb-1'>Trabalhos</Title>
        
        <Swiper 
            className="w-full"
            {...swiperProps} 
            modules={[ Navigation, EffectCoverflow, Pagination]}
            navigation
            pagination
            centeredSlides
            loop
            coverflowEffect={{
                rotate: 0,
                stretch: 120,
                depth: 130,
                modifier: 2,
                slideShadows: true
            }}
            effect='coverflow'
        >
            <SwiperSlide className="">
                <WorksCard

                    title="Ecommerce" 
                    text="Ecommerce profissional, com sistema de pagamento via Mercado Pago, integração com Correios, layout moderno e responsivo. Contém funções de cadastro e edição de produtos, categorias, variações, estilização das cores, fontes e opções de layout."
                
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
                    text="Esse trabalho é uma das partes que compõem o meu TCC. Consiste em realizar a classificação automática de imagens radiográficas do peito em 3 diferentes classes: Covid-19, Non-convid e Normal, com Redes Neurais Convolucionais. As redes utilizadas foram..."
                    
                />
            </SwiperSlide>
            <SwiperSlide>
                <WorksCard 
                    title="Army lover" 
                    text="Esse trabalho é uma das partes que compõem o meu TCC. Consiste em realizar a classificação automática de imagens radiográficas do peito em 3 diferentes classes: Covid-19, Non-convid e Normal, com Redes Neurais Convolucionais. As redes utilizadas foram..."
                    
                />
            </SwiperSlide>
            <SwiperSlide>
                <WorksCard 
                    title="Shopee total" 
                    text="Esse trabalho é uma das partes que compõem o meu TCC. Consiste em realizar a classificação automática de imagens radiográficas do peito em 3 diferentes classes: Covid-19, Non-convid e Normal, com Redes Neurais Convolucionais. As redes utilizadas foram..."
                    
                />
            </SwiperSlide>
            <SwiperSlide>
                <WorksCard 
                    title="Muy crazy" 
                    text="Esse trabalho é uma das partes que compõem o meu TCC. Consiste em realizar a classificação automática de imagens radiográficas do peito em 3 diferentes classes: Covid-19, Non-convid e Normal, com Redes Neurais Convolucionais. As redes utilizadas foram..."
                    
                />
            </SwiperSlide>
            <SwiperSlide>
                <WorksCard 
                    title="Muy crazy" 
                    text="Esse trabalho é uma das partes que compõem o meu TCC. Consiste em realizar a classificação automática de imagens radiográficas do peito em 3 diferentes classes: Covid-19, Non-convid e Normal, com Redes Neurais Convolucionais. As redes utilizadas foram..."
                    
                />
            </SwiperSlide>
        </Swiper>
    </div>
  )
}
