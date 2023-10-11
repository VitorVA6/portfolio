import {FiMenu} from 'react-icons/fi'
import Menu from './Menu'
import { useState} from 'react'
import NavButton from './NavButton'
import scrollTo from '../utils/scrollTo'

export default function Header() {

  const [menu, setMenu] = useState<boolean>(false)

  return (
    <header className={`flex justify-between h-20 px-5 md:px-10 xl:px-20 2xl:px-40 items-center absolute bg-transparent w-full text-white z-50`}>
        <Menu menu={menu} setMenu={setMenu}/>
        <h1 className="text-[28px] cursor-pointer flex items-center font-bold">
            <span className="py-0.5 px-2 bg-blue-primary rounded-md mr-2 text-2xl">V</span>
            Vitor
        </h1>
        <nav className="gap-12 font-medium items-center hidden md:flex">
            <NavButton text='Início' id='home'/>
            <NavButton text='Sobre mim' id='about'/>
            <NavButton text='Habilidades' id='skills'/>
            <NavButton text='Trabalhos' id='projects'/>
            <button 
              className="hidden lg:block border border-blue-primary text-blue-primary rounded-md px-5 py-2.5"
              onClick={() => scrollTo('contact')}
            >Contate-me</button>
        </nav>
        <FiMenu 
          className = 'md:hidden w-8 h-8'
          onClick = {() => setMenu(!menu)}
        />
    </header>
  )
}
