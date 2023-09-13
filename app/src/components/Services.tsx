import Title from './Title'
import SkillCard from './SkillCard'
import {FaReact, FaServer} from 'react-icons/fa'
import {BsDatabaseCheck} from 'react-icons/bs'

export default function Services() {
  return (
    <div className='flex flex-col py-16 px-40 gap-12 w-full bg-gray-950 text-gray-100'>
        <Title textSize='text-3xl' w='w-1/2' marginB='mb-1'>Serviços</Title>
        <div className='grid grid-cols-3 gap-8'>
            <SkillCard 
                title={'Front-end'} 
                icon={<FaReact className='w-16 h-16 text-blue-secundary mb-2'/>} 
                text='Tenho amplo domínio dos principais conceitos e tecnologias do front-end. Como responsividade, HTML5, CSS, javascript, typescript e ReactJS. Além de bibliotecas para otimizar a estilização dos componentes, como o Tailwind CSS '/>
            <SkillCard 
                title={'Back-end'} 
                icon={<FaServer className='w-16 h-16 text-blue-secundary mb-2'/>} 
                text='Tenho prática na construção de APIs Restful com typescript/javascript em NodeJS, criação de rotas HTTP, autencição OAuth e com Json Web Tokens, implementação de CRUDs e etc.'/>
            <SkillCard 
                title={'Database'} 
                icon={<BsDatabaseCheck className='w-16 h-16 text-blue-secundary mb-2'/>} 
                text='Conhecimento em bancos de dados relacionais e não relacionais. Tendo prática com MySQL e MongoDB. Além de prática com suas respectivas ORMs mais utilizadas, sendo elas Sequelize e Mongoose respectivamente.'/>
        </div>
    </div>
  )
}
