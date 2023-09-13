import {ReactElement} from 'react'

type props = {
  icon: ReactElement
}

export default function GlowingIcon({icon}: props) {
  return (
    <div className='relative w-fit'>
        {icon}
        <div className='absolute inset-0 blur bg-blue-secundary rounded-full opacity-50'/>
    </div>
  )
}
