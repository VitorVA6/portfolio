import {AiOutlineHome} from 'react-icons/ai'
import {BsPersonCircle, BsClipboardData} from 'react-icons/bs'
import {IoSettingsOutline} from 'react-icons/io5'
import {GoMail} from 'react-icons/go'
import {useEffect, useState} from 'react'
import checkScroll from '../utils/checkScroll'
import scrollTo from '../utils/scrollTo'

type menuProps = {
    menu: boolean
}

export default function Menu({menu}: menuProps) {

  const [inHome, setInHome] = useState<boolean>(true)
  const [inAbout, setInAbout] = useState<boolean>(true)
  const [inSkills, setInSkills] = useState<boolean>(true)
  const [inWorks, setInWorks] = useState<boolean>(true)
  const [inContact, setInContact] = useState<boolean>(true)

    useEffect(() => {
        const checkSection = () => {
            setInHome(checkScroll('home'));
            setInAbout(checkScroll('about'));
            setInSkills(checkScroll('skills'));
            setInWorks(checkScroll('projects'));
            setInContact(checkScroll('contact'));
            
          };
      
          checkSection();
          window.addEventListener('scroll', checkSection);
          return () => {
            window.removeEventListener('scroll', checkSection);
          };
    }, [])
    
    
    return (
    <div className={`flex md:hidden flex-col bg-gray-800 w-fit items-center h-fit fixed right-3 rounded-lg px-3 py-4 gap-5 top-1/3 z-50 text-gray-400 ${menu ? 'translate-x-0' : 'translate-x-20'} transition-transform duration-300`}>
        <AiOutlineHome 
          className={`h-7 w-7 ${inHome && 'text-blue-primary'}`}
          onClick = {() => {scrollTo('home')}}
        />
        <BsPersonCircle 
          className={`h-[26px] w-[26px] ${inAbout && 'text-blue-primary'}`}
          onClick = {() => {scrollTo('about')}}
        />
        <IoSettingsOutline 
          className={`h-7 w-7 ${inSkills && 'text-blue-primary'}`}
          onClick = {() => {scrollTo('skills')}}
        />
        <BsClipboardData 
          className={`h-[25px] w-[25px] ${inWorks && 'text-blue-primary'}`}
          onClick = {() => {scrollTo('projects')}}
        />
        <GoMail 
          className={`h-[25px] w-[25px] ${inContact && 'text-blue-primary'}`}
          onClick = {() => {scrollTo('contact')}}
        />
    </div>
  )
}
