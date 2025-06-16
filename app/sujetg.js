export const initializeNames=(str)=>{
    let result='';
    let array=str.split(' ')
        if(array.length-1>=2 ){
result+=array[0]
    for(let i=1;i<array.length-1;i++){
        result +=' '+array[i].charAt(0)+'.'
 }
 result+=' '+array[array.length-1]
 return result
        }
        
    else{
        return str
    }

}
console.log(initializeNames("Lois Mary Kristina Rakoto Lane"))
