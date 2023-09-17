export default function checkScroll(id:string):boolean {
    const div:HTMLElement | null = document.getElementById(id);
    if (div) {
        const rect = div.getBoundingClientRect();
        
        if (rect.top <= 1 && rect.bottom >= 5) {
            return true;
        } 
        return false;
    }
    return false
}