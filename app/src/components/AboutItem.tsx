import {ReactElement} from 'react'

type props = {
    children: string | ReactElement
}

export default function AboutItem({children}: props) {
  return (
    <li className="flex gap-2 items-center border-l-4 border-blue-secundary pl-1.5">
        
        <p>{children}</p>
    </li>
  )
}
