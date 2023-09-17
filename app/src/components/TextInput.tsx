import { ReactElement, useState } from 'react'

type textInputProps = {
    icon: ReactElement,
    placeHolder: string,
    kind: string
}

export default function TextInput({icon, placeHolder, kind}: textInputProps) {

  const [isFocused, setIsFocused] = useState<boolean>(false)

  return (
    <div className={`group flex items-center rounded-md w-full bg-gray-800 outline-none ${isFocused&&'outline-offset-0 outline-2 outline-blue-secundary'} `}>
        <input 
            className='py-2.5 px-4 bg-transparent w-full outline-none peer' 
            type={kind} 
            placeholder={placeHolder}    
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            />
            {icon}
    </div>
  )
}
