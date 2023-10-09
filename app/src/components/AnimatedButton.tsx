import { Link } from 'react-router-dom'

type props = {
    over: boolean,
    text: string,
    link: string
}

export default function AnimatedButton({over, text, link}: props) {
  return (
    <Link 
              to={link}
              target='blank'
              className={`${over?'translate-x-0':'-translate-x-40'} flex justify-center transition-transform duration-300 bg-blue-secundary text-white w-1/3 py-2.5 rounded-md font-medium`}>{text}</Link>
  )
}
