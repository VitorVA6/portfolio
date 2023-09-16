export default function checkResponsive(widthScreen: number):string{
    if(widthScreen <= 767) return 'SM'
    else if(widthScreen <= 1023) return 'MD'
    else if(widthScreen <= 1279) return 'LG'
    else if(widthScreen <= 1536) return 'XL'
    return '2XL'
}