// Create a new string from a given string the first 3 caracters and the last 3 chaarcters of string and add both
const stringHandling=(str1)=>{
    let strStart=str1.slice(0,3)
    let strEnd=str1.slice(-3)
    if(str1.length>3){
        return strStart+strEnd
    }
    else{
        return str1
    }
}
// console.log(stringHandling("shashi re"))



//Extract the first half of a string of even length

const extractTheString=(str)=>{
    if(str.length%2!=0){
        return "error"
    }
    else{
        let extractString=str.slice(0,str.length/2)
        return extractString;
    }
}

//console.log(extractTheString('shashi'))


//Concatenate two strings except the first character

const ConcatenateStr=(str1,str2)=>{
    let newStr1=str1.slice(1)
    let newStr2=str2.slice(1)
    return newStr1+newStr2
}
// console.log(ConcatenateStr('shashi','manish'))

//Find the nearest value to 100
const FindNearstValue=(a, b)=>{
    if(100-a<100-b){ 
     return a;
    }
    else{
        return b
    }
}
// console.log(FindNearstValue(80,99))
// Create an array of numbers. Use a method to add a new number to the end of the array. Print the updated array to the console.
const AddElements=(arr)=>{
     arr.push(10)
     return arr
}
// console.log(AddElements([1,2,3,4,5,6,7]))



// Use the filter method to create a new array containing only even numbers
const filterArray=(arr)=>{
    return arr.find((num)=> num%2==0);  
}
// console.log(filterArray([2,1901,2820,29020,7272727]))


//add the elemnts in array

function simpleArraySum(ar) {
    // Write your code here
    let sum=0
    for(let i=0; i < ar.length;i++){
       sum= sum+ar[i]
    }
    // console.log(sum)
}
// simpleArraySum([1,2,3,4,5])


// multiple the  to 10 times
function multiply(n) {
    let multi=1
    for(let i=1; i<11; i++){
        // console.log(i)
        multi= i * n
         console.log( `${i}*${n} = ${multi}`)
    }
}
// multiply(10)


//separate the strings to odd even 


function processData(input) {
        message = input.split("\n");
    var n = parseInt(message[0]);
    for (var x = 0; x < n; x++)
        {
            var m = message[x + 1];
            var l = m.length;
            var arr = m.split('');
            var ra = "";
            var rb = "";
            
            for (var y = 0; y < l; y++)
                {
                    if (y%2 == 0)
                        ra = ra + arr[y];
                    else
                        rb = rb + arr[y];
                }
            console.log(ra + " " + rb);
            
        }
   

}


processData("2\nHacker\nRank")
// processData("Rank")