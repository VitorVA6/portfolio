import perfilImg from '../images/perfil.jpg'
import {BsGithub, BsLinkedin} from 'react-icons/bs'
import Button from './Button'

export default function Home() {
  return (
    <div 
        className="flex flex-col items-center justify-center w-full h-screen text-white bg-cover bg-no-repeat bg-[url('images/bg_portfolio.png')]"
    >
        <img 
            src={perfilImg} 
            alt="imagem de perfil"
            className='w-48 h-48 rounded-full mb-4 mt-10'
        />
        <h1 className='text-[48px] font-bold text-blue-secundary'>Vitor Vaz Andrade</h1>
        <h2 className='mb-6 text-xl'>Freelancer e Desenvolvedor Web Fullstack</h2>
        <div className='flex gap-5 mb-8'>
            <BsGithub className = 'w-7 h-7 cursor-pointer'/>
            <BsLinkedin className = 'w-7 h-7 cursor-pointer'/>
        </div>
        <Button>Download CV</Button>
    </div>
  )
}
