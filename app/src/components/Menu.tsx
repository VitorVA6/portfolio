import {AiOutlineHome} from 'react-icons/ai'
import {BsPersonCircle, BsClipboardData} from 'react-icons/bs'
import {IoSettingsOutline} from 'react-icons/io5'

type menuProps = {
    menu: boolean
}

export default function Menu({menu}: menuProps) {
    
    return (
    <div className={`flex flex-col bg-gray-900 w-fit items-center h-fit fixed right-3 rounded-lg px-3 py-4 gap-5 top-1/3 z-50 text-gray-400 ${menu ? 'translate-x-0' : 'translate-x-20'} transition-transform duration-300`}>
        <AiOutlineHome className='h-7 w-7'/>
        <BsPersonCircle className='h-[26px] w-[26px]'/>
        <IoSettingsOutline className='h-7 w-7'/>
        <BsClipboardData className='h-[25px] w-[25px]'/>
    </div>
  )
}
