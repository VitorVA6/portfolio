import Title from './Title'
import TextInput from './TextInput'
import {GoMail} from 'react-icons/go'
import {AiOutlineUser} from 'react-icons/ai'
import contactImg from '../images/contact.svg'
import { useState, FormEvent } from 'react'
import emailjs from '@emailjs/browser'
import notifies from "../utils/notify";
import LoadingButton from './LoadingButton'

export default function Contact() {

    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [message, setMessage] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)

    const templateParams = {
        from_name: name,
        message: message,
        email: email
    }

    function handleSubmit(ev: FormEvent):void{
        ev.preventDefault()
        if(name.length > 0 && email.length > 0 && message.length > 0){
            setLoading(true)
            emailjs.send('service_htrqce6', 'template_6sorvgk', templateParams, 'pjGq6epu8IWu7EZNw')
            .then(() => {
                setLoading(false)
                setEmail('')
                setName('')
                setMessage('')
                notifies.sucess('E-mail enviado com sucesso')
            })
            .catch(() => {
                setLoading(false)
                notifies.error('Falha no envio do e-mail')})
        }
        else notifies.error('Preencha todos os campos')
    }

  return (
    <div 
        id='contact' 
        className='flex flex-col pt-12 pb-0 lg:pt-8 xl:py-12 px-5 md:px-10 xl:px-20 2xl:px-40 gap-8 lg:gap-12 w-full text-gray-100 relative mb-8 lg:mb-20'>
        <Title textSize='text-[26px] lg:text-3xl' w='w-1/2' marginB='mb-0.5 lg:mb-1'>Entre em contato</Title>
        <div className='flex flex-col lg:flex-row gap-4 lg:gap-16 w-full items-center lg:items-start'>
            <img 
                src={contactImg} 
                alt="imagem de contato" 
                className='w-[320px] h-[350px] lg:w-[420px] lg:h-[470px] xl:w-[500px] xl:h-[500px] 2xl:w-[540px] 2xl:h-[540px] lg:absolute lg:right-6 xl:right-16 2xl:right-36 lg:top-10 xl:top-14 2xl:top-12'
            />
            <form 
                className='flex flex-col gap-3 lg:gap-4 col-span-3 w-full lg:w-[55%] xl:w-1/2'
                onSubmit={handleSubmit}
            >
                <h3 className='text-lg font-medium mb-2'>Envie-me uma mensagem</h3>
                <TextInput 
                    icon={<GoMail className='w-[26px] h-[26px] mx-3.5 text-gray-500 peer-focus:text-blue-secundary'/>}
                    placeHolder='Digite seu e-mail'
                    kind='text'
                    val={email}
                    setVal={setEmail}
                />
                <TextInput 
                    icon={<AiOutlineUser className='w-7 h-7 mx-3.5 text-gray-500 peer-focus:text-blue-secundary'/>}
                    placeHolder='Digite seu nome'
                    kind='text'
                    val={name}
                    setVal={setName}
                />
                <textarea
                    placeholder='Digite a mensagem'
                    className='bg-gray-800 rounded-md py-2.5 px-4 resize-none outline-none outline-offset-0 focus:outline-2 focus:outline-blue-secundary'
                    rows={3}
                    value={message}
                    onChange={(ev) => setMessage(ev.target.value)}
                />
                <LoadingButton text='Enviar Mensagem' loading={loading}/>
            </form>
        </div>
    </div>
  )
}
