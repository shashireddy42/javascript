//Looping in array
let arr=[100,"shashi",true,256,900]
for(var i=0; i<arr.length;i++){
    // console.log(arr[i])
}
//InBuilt loop methods
let num=[200,300,400,500];

//map
const newArray=num.map((item,index,array)=>{
    // console.log(item,"item")
    // console.log(index,"index")
    // console.log(array,"array")
})


//filter
const filterArray=num.filter((item,index,array)=>{
    // console.log( item)
})

//reduce
const reduceArray=num.reduce((prev,item)=>{
    return prev+item
},0)
console.log(reduceArray)