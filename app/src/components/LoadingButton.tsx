import {AiOutlineLoading3Quarters} from 'react-icons/ai'

type props = {
    loading: boolean,
    text: string
}

export default function LoadingButton({loading, text}: props) {
  return (
    <button
        className={`text-blue-secundary border w-2/5 border-blue-secundary rounded-lg py-3 text-sm font-medium flex items-center justify-center gap-3 ${loading===true&&'opacity-60'}`}
        disabled={loading}
    >
        {
        loading === true ?
        <>
        <AiOutlineLoading3Quarters className='w-5 h-5 animate-spin text-blue-secundary'/>
        Enviando
        </>:
        <>
        {text}
        </>
        }
    </button>
  )
}