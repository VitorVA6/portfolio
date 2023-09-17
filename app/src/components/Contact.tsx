import Title from './Title'
import TextInput from './TextInput'
import {GoMail} from 'react-icons/go'
import {AiOutlineUser} from 'react-icons/ai'
import {MdSubject} from 'react-icons/md'
import contactImg from '../images/contact.svg'

export default function Contact() {

  return (
    <div className='flex flex-col pb-12 pt-0 lg:pt-8 xl:py-12 px-5 md:px-10 xl:px-20 2xl:px-40 gap-8 lg:gap-12 w-full text-gray-100 relative mb-8 lg:mb-20'>
        <Title textSize='text-[26px] lg:text-3xl' w='w-1/2' marginB='mb-0.5 lg:mb-1'>Entre em contato</Title>
        <div className='flex flex-col lg:flex-row gap-4 lg:gap-16 w-full items-center lg:items-start'>
            <img 
                src={contactImg} 
                alt="imagem de contato" 
                className='w-[320px] h-[350px] lg:w-[420px] lg:h-[470px] xl:w-[500px] xl:h-[500px] 2xl:w-[540px] 2xl:h-[540px] lg:absolute lg:right-6 xl:right-16 2xl:right-36 lg:top-10 xl:top-14 2xl:top-12'
            />
            <div className='flex flex-col gap-3 lg:gap-4 col-span-3 w-full lg:w-[55%] xl:w-1/2'>
                <h3 className='text-lg font-medium mb-2'>Envie-nos uma mensagem</h3>
                <TextInput 
                    icon={<GoMail className='w-[26px] h-[26px] mx-3.5 text-gray-500 peer-focus:text-blue-secundary'/>}
                    placeHolder='Digite seu e-mail'
                    kind='text'
                />
                <TextInput 
                    icon={<AiOutlineUser className='w-7 h-7 mx-3.5 text-gray-500 peer-focus:text-blue-secundary'/>}
                    placeHolder='Digite seu nome'
                    kind='text'
                />
                <TextInput 
                    icon={<MdSubject className='w-7 h-7 mx-3.5 text-gray-500 peer-focus:text-blue-secundary'/>}
                    placeHolder='Digite o assunto'
                    kind='text'
                />
                <textarea
                    placeholder='Digite a mensagem'
                    className='bg-gray-800 rounded-md py-2.5 px-4 resize-none outline-none outline-offset-0 focus:outline-2 focus:outline-blue-secundary'
                    rows={3}
                />
                <button 
                    className={`border border-blue-secundary text-blue-secundary rounded-md px-8 py-2.5 w-fit mt-3`}
                >
                    Enviar Mensagem
                </button>
            </div>
        </div>
    </div>
  )
}
