import { Link } from 'react-router-dom'

type props = {
  title: string,
  text: string,
  repository_link: string,
  app_link: string,
  project_image: string
}

export default function WorksItem({title, text, repository_link, app_link, project_image}: props) {

  return (
    <div 
      className='flex flex-col items-center bg-blue-900 gap-4 md:h-[360px] lg:h-[460px] xl:h-[500px] relative rounded-md'
    >
   
          <img 
            src={project_image} 
            alt="Imagem do projeto"
            className='h-[180px] md:h-[200px] lg:h-[250px] w-full rounded-t-md'
          />
          <div className='flex flex-col px-5 md:px-7 text-gray-100 gap-2 lg:gap-4 pt-2 pb-5 lg:pt-4 md:pb-8'>
            <h2 className='font-medium text-[18px] md:text-xl'>{title}</h2>
            <p className='text-sm md:text-base mb-3'>{text}</p>
            <div className='flex gap-4 justify-center'>
              <Link 
                to={app_link}
                className={`flex justify-center transition-transform duration-300 text-white lg:w-1/3 px-5 h-fit rounded-md font-medium ${app_link==='' && 'opacity-30 cursor-default'}`}
              >
                Aplicação
              </Link>
              <Link 
                to={repository_link}
                className={`flex justify-center transition-transform duration-300 text-white lg:w-1/3 px-5 h-fit rounded-md font-medium ${repository_link==='' && 'opacity-30 cursor-default'}`}
              >
                Repositório
              </Link>
            </div>
          </div>      
        
    </div>
  )
}
