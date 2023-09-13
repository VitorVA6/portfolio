import {ReactElement} from 'react'

type props = {
    children: string | ReactElement
}

export default function Button({children}: props) {
  return (
    <button className='bg-blue-secundary text-white py-3 px-12 font-medium rounded-md w-fit'>{children}</button>
  )
}
