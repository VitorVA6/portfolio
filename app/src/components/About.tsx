import aboutimg from '../images/about_img.png'
import AboutItem from './AboutItem'
import Button from './Button'
import HardItem from './HardItem'
import Title from './Title'

export default function About() {
  return (
    <div className="flex flex-col py-12 lg:py-16 px-5 md:px-10 xl:px-20 2xl:px-40 gap-8 lg:gap-12 w-full text-gray-100">
        <Title textSize='text-[26px] lg:text-3xl' w='w-1/2' marginB='mb-0.5 lg:mb-1'>Sobre mim</Title>
        <div className='flex flex-col lg:flex-row lg:gap-6 xl:gap-12 items-center'>
            <img 
              src={aboutimg} 
              alt="imagem de perfil"
              className='w-[300px] h-[300px] lg:w-[380px] lg:h-[380px] xl:w-[500px] xl:h-[500px]' 
            />
            <div className='grid grid-cols-5 gap-8 py-4 lg:py-8 rounded-2xl'>
              <div className='flex flex-col col-span-5'>
                <Title textSize='text-lg' w='w-1/2' marginB='mb-0.5'>Perfil</Title>
                <p className='mt-3.5 mb-5 md:mb-3.5'>Meu nome é Vitor Vaz Andrade, sou formando em Engenharia de computação pela Universidade Estadual de Feira de Santana (BA). Apaixonado por programação, em especial Typescript, JavaScript e Python. Atualmente, tenho focado em aprimorar cada vez mais as minhas habilidades nas tecnologias voltadas ao desenvolvimento web e mobile: back-end, front-end e banco de dados.</p>
                <Button>Download CV</Button>
              </div>
              <div className='flex flex-col gap-4 col-span-5 md:col-span-2'>
                <Title textSize='text-lg' w='w-1/2' marginB='mb-0.5'>Soft Skills</Title>
                <ul className='flex flex-col gap-1.5'>
                  <AboutItem>Bom trabalho em equipe</AboutItem>
                  <AboutItem>Autodidata</AboutItem>
                  <AboutItem>Raciocínio lógico apurado</AboutItem>
                  <AboutItem>Gerenciamento de tempo</AboutItem>
                </ul>
              </div>
              <div className='flex flex-col gap-4 col-span-5 md:col-span-3'>
                <Title textSize='text-lg' w='w-1/2' marginB='mb-0.5'>Hard Skills</Title>
                <ul className='flex flex-wrap gap-2 text-sm 2xl:text-base'>
                  <HardItem>HTML5</HardItem>
                  <HardItem>CSS3</HardItem>
                  <HardItem>JavaScript</HardItem>
                  <HardItem>TypeScript</HardItem>
                  <HardItem>React</HardItem>
                  <HardItem>Tailwind</HardItem>
                  <HardItem>Python</HardItem>
                  <HardItem>NodeJS</HardItem>
                  <HardItem>Express</HardItem>
                  <HardItem>MongoDB</HardItem>
                  <HardItem>MySQL</HardItem>
                </ul>
              </div>
            </div>
        </div>
    </div>
  )
}
