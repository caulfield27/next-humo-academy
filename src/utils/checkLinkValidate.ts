export function isLInk(link: string){
    const checkLink = ['h','t','t','p']
    const linkArr = link.split('')
    const res = []
    for(let i = 0; i < 5;i++ ){
        if(linkArr[i] === checkLink[i]){
            res.push(linkArr[i])
        }
        
            
    }
    return res.length === 4

}