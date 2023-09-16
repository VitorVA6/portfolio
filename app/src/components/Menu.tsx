import {AiOutlineHome} from 'react-icons/ai'
import {BsPersonCircle, BsClipboardData} from 'react-icons/bs'
import {IoSettingsOutline} from 'react-icons/io5'
import {GoMail} from 'react-icons/go'
import {useEffect} from 'react'

type menuProps = {
    menu: boolean
}

export default function Menu({menu}: menuProps) {

    useEffect(() => {
        const checkScroll = () => {
            const div = document.getElementById('skills'); // Substitua 'suaDiv' pelo id da sua div
            if (div) {
              const rect = div.getBoundingClientRect();
              const windowHeight = window.innerHeight;
              if (rect.top <= 0 && rect.bottom >= 0) {
                console.log(true);
              } else {
                console.log(false);
              }
            }
          };
      
          window.addEventListener('scroll', checkScroll);
          checkScroll();
          return () => {
            window.removeEventListener('scroll', checkScroll);
          };
    }, [])
    
    
    return (
    <div className={`flex md:hidden flex-col bg-gray-900 w-fit items-center h-fit fixed right-3 rounded-lg px-3 py-4 gap-5 top-1/3 z-50 text-gray-400 ${menu ? 'translate-x-0' : 'translate-x-20'} transition-transform duration-300`}>
        <AiOutlineHome className='h-7 w-7'/>
        <BsPersonCircle className='h-[26px] w-[26px]'/>
        <IoSettingsOutline className='h-7 w-7'/>
        <BsClipboardData className='h-[25px] w-[25px]'/>
        <GoMail className='h-[25px] w-[25px]'/>
    </div>
  )
}
