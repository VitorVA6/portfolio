import perfilImg from '../images/perfil.jpg'
import {BsGithub, BsLinkedin} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import pdf from '../assets/curriculo.pdf'
import IconButton from './IconButton'

export default function Home() {
  return (
    <div 
        id='home'
        className="flex flex-col items-center justify-center w-full h-screen text-white bg-cover bg-no-repeat bg-[url('images/bg_portfolio.webp')]"
    >
        <img 
            src={perfilImg} 
            alt="imagem de perfil"
            className='w-36 h-36 md:w-44 md:h-44 lg:w-36 lg: lg:h-36 lg xl:w-48 xl:h-48 rounded-full mb-4 xl:mt-10'
        />
        <div className='relative'>

          <h1 className='text-[28px] md:text-[42px] lg:text-[32px] xl:text-[48px] font-bold text-blue-secundary absolute top-0 left-0 blur'>Vitor Vaz Andrade</h1>
          <h1 className='text-[28px] md:text-[42px] lg:text-[32px] xl:text-[48px] font-bold text-blue-secundary relative'>Vitor Vaz Andrade</h1>
        </div>
        <h2 className='mb-6 text-sm md:text-lg lg:text-base xl:text-xl'>Freelancer e Desenvolvedor Web Fullstack</h2>
        <div className='flex gap-5 mb-8'>
            <IconButton link='https://github.com/VitorVA6'>
              <BsGithub className = 'w-7 h-7 cursor-pointer'/>
            </IconButton>
            <IconButton link='https://www.linkedin.com/in/vitor-vaz-andrade-2a2ba0218/'>
              <BsLinkedin className = 'w-7 h-7 cursor-pointer'/>
            </IconButton>
        </div>
        <div className='relative'>
          <div className='opacity-100 md:opacity-60 px-12 py-3 bg-blue-secundary rounded-md absolute blur inset-0'/>
          <Link 
            className='block text-sm lg:text-base px-12 py-3 bg-gray-900 rounded-md relative font-medium text-blue-secundary'
            to={pdf}
            target='blank'
          >
              Download CV
          </Link>
        </div>
    </div>
  )
}
