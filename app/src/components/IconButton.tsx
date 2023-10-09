import {ReactNode} from 'react'
import { Link } from 'react-router-dom'

type props = {
    link: string,
    children: ReactNode
}

export default function IconButton({link, children}: props) {
  return (
    <Link 
        to={link}
        target='_blank'
    >
        {children}
    </Link>
  )
}
