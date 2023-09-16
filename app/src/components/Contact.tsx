import Title from './Title'
import TextInput from './TextInput'
import {GoMail} from 'react-icons/go'
import {AiOutlineUser} from 'react-icons/ai'
import {MdSubject} from 'react-icons/md'
import contactImg from '../images/contact.svg'

export default function Contact() {
  return (
    <div className='flex flex-col pb-12 pt-0 lg:pt-8 xl:py-16 px-5 md:px-10 xl:px-20 2xl:px-40 gap-8 lg:gap-12 w-full text-gray-100 relative'>
        <Title textSize='text-[26px] lg:text-3xl' w='w-1/2' marginB='mb-0.5 lg:mb-1'>Entre em contato</Title>
        <div className='flex gap-16 w-full'>
            <img 
                src={contactImg} 
                alt="imagem de contato" 
                className='w-[500px] h-[500px] absolute right-36 top-12'
            />
            <div className='flex flex-col gap-5 col-span-3 w-1/2'>
                <TextInput 
                    icon={<GoMail className='w-[26px] h-[26px] mx-3.5 text-gray-500'/>}
                    placeHolder='Digite seu e-mail'
                    kind='text'
                />
                <TextInput 
                    icon={<AiOutlineUser className='w-7 h-7 mx-3.5 text-gray-500'/>}
                    placeHolder='Digite seu nome'
                    kind='text'
                />
                <TextInput 
                    icon={<MdSubject className='w-7 h-7 mx-3.5 text-gray-500'/>}
                    placeHolder='Digite o assunto'
                    kind='text'
                />
                <textarea
                    placeholder='Digite a mensagem'
                    className='bg-gray-800 rounded-md outline-none py-2.5 px-4 resize-none'
                    rows={3}
                />
                <button className="hidden lg:block border border-blue-secundary text-blue-secundary rounded-md px-8 py-2.5 w-fit">
                    Enviar Mensagem
                </button>
            </div>
        </div>
    </div>
  )
}
