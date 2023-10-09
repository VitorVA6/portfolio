import { useState } from 'react'
import imgTest from '../images/templatemonster.png'
import AnimatedButton from './AnimatedButton'

type props = {
  title: string,
  text: string,
}

export default function WorksItem({title, text}: props) {

  const [over, set_over] = useState(false)

  return (
    <div 
      className='flex flex-col items-center bg-blue-900 rounded-md gap-4 h-[320px] md:h-[360px] lg:h-[460px] relative'
      onMouseEnter={() => set_over(true)}
      onMouseLeave={() => set_over(false)}
    >
      
        <div className={`absolute inset-0 ${over ? 'opacity-100': 'opacity-0'} transition-opacity duration-300 gap-4 flex flex-col h-full w-full bg-gray-800 rounded-md justify-center items-center`}>
            <h2 className={`${over?'translate-x-0':'-translate-x-40'} transition-transform duration-300 text-[30px] font-medium text-blue-secundary mb-2`}>{title}</h2>
            <AnimatedButton 
              text='Repositório'
              over={over}
              link='/'
            />
            <AnimatedButton 
              text='Aplicação'
              over={over}
              link='/'
            />
            
        </div>
        
          <img 
            src={imgTest} 
            alt="Imagem do projeto"
            className='h-[180px] md:h-[200px] lg:h-[250px] w-full rounded-t-md'
          />
          <div className='flex flex-col px-5 md:px-7 text-gray-100 gap-2 lg:gap-4 pt-2 pb-6 lg:pt-4 md:pb-8'>
            <h2 className='font-medium text-[18px] md:text-xl'>{title}</h2>
            <p className='text-sm md:text-base'>{text}</p>
          </div>      
        
      
    </div>
  )
}
