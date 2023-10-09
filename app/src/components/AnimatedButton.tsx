import { Link } from 'react-router-dom'

type props = {
    over: boolean,
    text: string,
    link: string
}

export default function AnimatedButton({over, text, link}: props) {

  function handleClick(ev: React.MouseEvent<HTMLAnchorElement, MouseEvent>){
    if (link === '') ev.preventDefault()
  }

  return (
    <Link 
        to={link}
        onClick={handleClick}
        target='blank'
        className={`${over?'translate-x-0':'-translate-x-40'} flex justify-center transition-transform duration-300 bg-blue-secundary text-white w-1/3 py-2.5 rounded-md font-medium ${link==='' && 'opacity-30 cursor-default'}`}>{text}</Link>
  )
}
