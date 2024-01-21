//check if the sum of 2 numbs is 100
let num1 = 70;
let num2 = 30;
const fn = (num1, num2) => {
    let sum=num1+num2
  if (sum=100) { 
    return true

  } else {
    return false;
  }
};
// console.log(fn(num1, num2))



// get file extension name
const getExtensionName = (fileName)=>{
    return  fileName.slice(fileName.lastIndexOf('.'))
}
// console.log(getExtensionName('script.js'))



//Replace the every character in the string with next alphabet


 const Replace=(str)=>{
    //splits the string into array
    let newStr=str.split('');
    for(let i=0; i<newStr.length;i++){  
        let CurrentCharCode=newStr[i].charCodeAt(0) 
        if(newStr[i]==='z'){
            newStr[i]= 'a'
        }
        else if(newStr[i]==='Z'){
            newStr[i]='A'
        }
        else{
         newStr[i]=String.fromCharCode(CurrentCharCode+1)
        }   
    }
    console.log(newStr.join(''))
 }
//  Replace("abcdefZ")


 //Get the current date in the mm-dd-yy
 const dateNow = new Date()
 const Month=String(dateNow.getMonth()+1)
 const date=String(dateNow.getDate())
 const year=String(dateNow.getFullYear())
// console.log(Month+'/'+date+'/'+year)


//create a new sring add new in front of given string 
// if the given string begins with the new already
// return the original string

const ReplacethStr=(str)=>{
    if(str.includes('new')){
        return str
    }
    else{
        return 'new'+" "+str
    }
}
console.log(ReplacethStr('hello world'))