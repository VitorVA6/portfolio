import { ReactElement } from "react"

type props = {
  title: string,
  icon: ReactElement,
  text: string,
  textButton: string
}

export default function WorksItem({title, icon, text, textButton}: props) {
  return (
    <div className='flex flex-col items-center px-8 py-10 bg-blue-950 shadow-lg shadow-black/20 rounded-xl gap-3'>
      <div className="flex items-center justify-center w-24 h-24 rounded-full bg-blue-secundary mb-4">
        {icon}
      </div>
        <h2 className='font-medium text-xl'>{title}</h2>
        <p className='mb-2'>{text}</p>
        <div className="w-full">
          <button className="py-3 bg-blue-secundary text-white font-medium w-full rounded-sm mb-3">Ver Código</button>
          <button className="py-3 border-2 border-blue-secundary text-blue-secundary font-medium w-full rounded-sm">{textButton}</button>
        </div>
    </div>
  )
}
