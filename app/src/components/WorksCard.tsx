import imgTest from '../images/templatemonster.png'

type props = {
  title: string,
  text: string,
}

export default function WorksItem({title, text}: props) {
  return (
    <div className='flex flex-col items-center bg-blue-900 rounded-md object-cover gap-3'>
      <img 
        src={imgTest} 
        alt="Imagem do projeto"
        className='h-[250px] w-full rounded-t-md'
      />
      <div className='flex flex-col px-7 text-gray-100 gap-4 pt-4 pb-8'>
        <h2 className='font-medium text-xl'>{title}</h2>
        <p className=''>{text}</p>
      </div>
      
    </div>
  )
}
