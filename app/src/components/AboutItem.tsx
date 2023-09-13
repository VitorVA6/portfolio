import {ReactElement} from 'react'
import {BsCheck2Circle} from 'react-icons/bs'

type props = {
    children: string | ReactElement
}

export default function AboutItem({children}: props) {
  return (
    <li className="flex gap-2 items-center">
        <BsCheck2Circle className='w-4 h-4 text-green-500'/>
        <p>{children}</p>
    </li>
  )
}
