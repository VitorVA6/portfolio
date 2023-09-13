import {ReactElement} from 'react'

type props = {
    children: ReactElement | string,
    w: string,
    textSize: string,
    marginB: string
}

export default function Title({children, w, textSize, marginB}: props) {
  return (
    <div className={`${textSize} font-bold flex-flex-col w-fit`}>
        <h1 className={`${marginB}`}>{children}</h1>
        <div className={`bg-blue-secundary ${w} h-[3px]`}/>
    </div>
  )
}
