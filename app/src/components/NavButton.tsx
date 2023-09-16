import scrollTo from "../utils/scrollTo"

type navButtonProps = {
    text: string,
    id: string
}

export default function NavButton({text, id}: navButtonProps) {
  return (
    <>
        <h3 
            className="group cursor-pointer relative"
            onClick={() => scrollTo(`${id}`)}
        >
            {text}
            <div className="h-[2px] bg-blue-primary absolute left-0 -bottom-1.5 w-0 group-hover:w-full transition-all duration-300"/>
        </h3>
    </>
  )
}
