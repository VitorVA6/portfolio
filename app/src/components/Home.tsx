import perfilImg from '../images/perfil.jpg'
import {BsGithub, BsLinkedin} from 'react-icons/bs'

export default function Home() {
  return (
    <div 
        className="flex flex-col items-center justify-center w-full h-screen text-white bg-cover bg-no-repeat bg-[url('images/bg_portfolio.jpg')]"
    >
        <img 
            src={perfilImg} 
            alt="imagem de perfil"
            className='w-48 h-48 rounded-full mb-4 mt-10'
        />
        <div className='relative'>

          <h1 className='text-[48px] font-bold text-blue-secundary absolute top-0 left-0 blur'>Vitor Vaz Andrade</h1>
          <h1 className='text-[48px] font-bold text-blue-secundary relative'>Vitor Vaz Andrade</h1>
        </div>
        <h2 className='mb-6 text-xl'>Freelancer e Desenvolvedor Web Fullstack</h2>
        <div className='flex gap-5 mb-8'>
            <BsGithub className = 'w-7 h-7 cursor-pointer'/>
            <BsLinkedin className = 'w-7 h-7 cursor-pointer'/>
        </div>
        <div className='relative'>
          <div className='px-12 py-3 bg-blue-secundary rounded-md absolute blur inset-0'/>
          <button className='px-12 py-3 bg-gray-900 rounded-md relative font-medium text-blue-secundary'>Download CV</button>
        </div>
    </div>
  )
}