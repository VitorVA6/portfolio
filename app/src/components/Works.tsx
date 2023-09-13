import Button from "./Button";
import Title from "./Title";
import WorksCard from './WorksCard'
import {BsCart3} from 'react-icons/bs'
import {IoIosGitNetwork} from 'react-icons/io'

export default function Works() {
  return (
    <div className='flex flex-col py-16 px-40 gap-12 w-full bg-gray-900 text-gray-100'>
        <Title textSize='text-3xl' w='w-1/2' marginB='mb-1'>Trabalhos</Title>
        <div className='grid grid-cols-3 gap-8'>
            <WorksCard 
                icon={<BsCart3 className='w-10 h-10 bg-transparent text-blue-950'/>} 
                title="Ecommerce" 
                text="Ecommerce profissional, com sistema de pagamento via Mercado Pago, integração com Correios, layout moderno e responsivo. Contém funções de cadastro e edição de produtos, categorias, variações, estilização das cores, fontes e opções de layout."
                textButton="Aplicação"
            />
            <WorksCard 
                icon={<IoIosGitNetwork className='w-10 h-10 bg-transparent text-blue-950'/>} 
                title="Segmentador de imagens" 
                text="Esse trabalho é uma das partes que compõem o meu TCC. Consiste em realizar a segmentação automática da região pulmonar de imagens radiográficas do peito, utilizando Redes Neurais Convolucionais, sendo elas: U-net e ResUnet."
                textButton="Ver Artigo"
            />
            <WorksCard 
                icon={<IoIosGitNetwork className='w-10 h-10 bg-transparent text-blue-950'/>} 
                title="Detector de COVID-19" 
                text="Esse trabalho é uma das partes que compõem o meu TCC. Consiste em realizar a classificação automática de imagens radiográficas do peito em 3 diferentes classes: Covid-19, Non-convid e Normal, com Redes Neurais Convolucionais. As redes utilizadas foram..."
                textButton="Ver Artigo"
            />
        </div>
        <Button>Mostrar mais</Button>
    </div>
  )
}
