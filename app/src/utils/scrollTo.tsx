export default function scrollTo(id:string){
    const divElement: HTMLElement | null = document.getElementById(id);
    if(divElement){
        divElement.scrollIntoView({ behavior: "smooth", block: "start" })
    }
}