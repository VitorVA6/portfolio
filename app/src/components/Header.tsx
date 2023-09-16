import {FiMenu} from 'react-icons/fi'
import Menu from './Menu'
import {useState} from 'react'

export default function Header() {

  const [menu, setMenu] = useState<boolean>(false)

  return (
    <header className="flex justify-between h-20 px-5 md:px-10 xl:px-20 2xl:px-40 items-center absolute w-full text-white">
        <Menu menu={menu}/>
        <h1 className="text-[28px] cursor-pointer flex items-center font-bold">
            <span className="py-0.5 px-2 bg-blue-primary rounded-md mr-2 text-2xl">V</span>
            Vitor
        </h1>
        <nav className="gap-12 font-medium items-center hidden md:flex">
            <h3 className="cursor-pointer text-blue-primary">Início</h3>
            <h3 className="cursor-pointer">Sobre mim</h3>
            <h3 className="cursor-pointer">Habilidades</h3>
            <h3 className="cursor-pointer">Trabalhos</h3>
            <button className="hidden lg:block border border-blue-primary text-blue-primary rounded-md px-5 py-2.5">Contate-me</button>
        </nav>
        <FiMenu 
          className = 'md:hidden w-8 h-8'
          onClick = {() => setMenu(!menu)}
        />
    </header>
  )
}
