let str="aaabcdeeAB"
let word=str.split('')
console.log(word)

const Frequency=()=>{
    let output={}
    for(let i=0;i<word.length;i++){
      
        {
            if(output[word[i]]==undefined){
               output[ word[i]]=1
            }
            else{
                output[word[i]]=output[word[i]]+1
            }
        }
    }
    return output
}
console.log(Frequency(str))