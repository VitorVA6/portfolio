import aboutimg from '../images/about-img.png'
import AboutItem from './AboutItem'
import Button from './Button'
import Title from './Title'

export default function About() {
  return (
    <div className="flex flex-col py-16 px-40 gap-12 w-full bg-gray-900 text-gray-100">
        <Title textSize='text-3xl' w='w-1/2' marginB='mb-1'>Sobre mim</Title>
        <div className='flex gap-20'>
            <img 
              src={aboutimg} 
              alt="imagem de perfil"
              className='w-52 h-60' 
            />
            <div className='grid grid-cols-5 gap-10 px-10 py-8 rounded-2xl bg-blue-950 shadow-lg '>
              <div className='flex flex-col gap-6 col-span-3'>
                <p>Meu nome é Vitor Vaz Andrade, sou formando em Engenharia de computação pela Universidade Estadual de Feira de Santana (BA). Apaixonado por programação, em especial Typescript, JavaScript e Python. Atualmente, tenho focado em aprimorar cada vez mais as minhas habilidades nas tecnologias voltadas ao desenvolvimento web e mobile: back-end, front-end e banco de dados.</p>
                <Button>Download CV</Button>
              </div>
              <div className='flex flex-col gap-4 col-span-2'>
                <Title textSize='text-lg' w='w-1/2' marginB='mb-0.5'>Soft Skills</Title>
                <ul className='flex flex-col gap-1'>
                  <AboutItem>Bom trabalho em equipe</AboutItem>
                  <AboutItem>Autodidata</AboutItem>
                  <AboutItem>Raciocínio lógico apurado</AboutItem>
                  <AboutItem>Gerenciamento de tempo</AboutItem>
                  <AboutItem>Capacidade de solucionar problemas</AboutItem>
                </ul>
              </div>
            </div>
        </div>
    </div>
  )
}
