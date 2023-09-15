import imgTest from '../images/templatemonster.png'

type props = {
  title: string,
  text: string,
}

export default function WorksItem({title, text}: props) {
  return (
    <div className='flex flex-col items-center bg-blue-900 rounded-md gap-4'>
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
