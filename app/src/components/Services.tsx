import Title from './Title'
import SkillCard from './SkillCard'
import { FaServer, FaReact} from 'react-icons/fa'
import {BsDatabaseCheck} from 'react-icons/bs'
import GlowingIcon from './GlowingIcon'

export default function Services() {
  return (
    <div className='flex flex-col py-12 lg:py-16 px-5 md:px-10 xl:px-40 gap-8 lg:gap-12 w-full text-gray-100'>
        <Title textSize='text-[26px] lg:text-3xl' w='w-1/2' marginB='mb-0.5 lg:mb-1'>Serviços</Title>
        <div className='grid-cols-3 gap-8 hidden md:grid'>
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
