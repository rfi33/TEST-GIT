//STD 24145 SUJET F
function rearrangeString(str,array){
    let result='';
    if(str.length==array.length){
        for(let i=0;i<str.length;i++){
            result+=str[array.indexOf(i)]
        }
    return result
    }
    else
    return "erreur la chaîne de caracteres et le tableau doit être toujours égale"

}
console.log(rearrangeString("abcds",[0,3,1,2,4]))