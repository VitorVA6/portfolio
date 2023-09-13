import {ReactElement} from 'react'

type props = {
    title: string,
    icon: ReactElement,
    text: string
}

export default function SkillCard({title, icon, text}: props) {
  return (
    <div className='flex flex-col px-8 py-10 bg-blue-950 shadow-lg shadow-black/20 rounded-xl gap-3'>
        {icon}
        <h2 className='font-medium text-xl'>{title}</h2>
        <p className=''>{text}</p>
    </div>
  )
}
