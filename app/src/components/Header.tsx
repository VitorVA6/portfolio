export default function Header() {
  return (
    <header className="flex justify-between py-6 px-40 items-center absolute w-full text-white">
        <h1 className="text-[28px] cursor-pointer flex items-center">
            <span className="py-0.5 px-2 font-bold bg-blue-primary rounded-md mr-2 text-2xl">V</span>
            Vitor
        </h1>
        <nav className="flex gap-12 font-medium items-center">
            <h3 className="cursor-pointer text-blue-primary">Início</h3>
            <h3 className="cursor-pointer">Sobre mim</h3>
            <h3 className="cursor-pointer">Habilidades</h3>
            <h3 className="cursor-pointer">Trabalhos</h3>
            <button className="border border-blue-primary text-blue-primary rounded-md px-5 py-2.5">Contate-me</button>
        </nav>
    </header>
  )
}
