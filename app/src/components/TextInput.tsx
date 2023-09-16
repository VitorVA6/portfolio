import { ReactElement } from 'react'

type textInputProps = {
    icon: ReactElement,
    placeHolder: string,
    kind: string
}

export default function TextInput({icon, placeHolder, kind}: textInputProps) {
  return (
    <div className='flex items-center rounded-md w-full bg-gray-800'>
        <input 
            className='py-2.5 px-4 outline-none bg-transparent w-full' 
            type={kind} 
            placeholder={placeHolder}    
            />
            {icon}
    </div>
  )
}
