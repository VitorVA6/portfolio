import {AiOutlineCopyright} from 'react-icons/ai'

export default function Footer() {
  return (
    <footer className="flex items-center text-gray-100 gap-2 justify-center py-4 md:py-6 font-medium border-t border-gray-500">
        <AiOutlineCopyright className='w-3.5 h-3.5 md:w-5 md:h-5'/>
        <h1 className='text-base lg:text-lg'>Vitor Vaz Andrade - 2023</h1>
    </footer>
  )
}
