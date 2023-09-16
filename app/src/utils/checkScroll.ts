export default function checkScroll(id:string):boolean {
    const div:HTMLElement | null = document.getElementById(id);
    if (div) {
        const rect = div.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        if (rect.top >= 0 && rect.bottom <= windowHeight) {
            return true;
        } 
        return false;
    }
    return false
}