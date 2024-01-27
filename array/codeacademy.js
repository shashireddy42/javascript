
// Print all even numbers from 0 – 10

function PrintEventNumbers(){
    for(let i=0;i<10;i++){
        if(i%2===0){
            console.log(` ${i}: even Number`)
        }
    }
   
}

// Print a table containing multiplication tables

function PrintTables(){
    let multiply=1;
    for(let i=1;i<=12;i++){
        for(let n=1; n<=10;n++){
            multiply =i * n 
            console.log(`${i} * ${n} = ${multiply}`)
            if(n===10){
                console.log('  ')
            }
        }         
    }
  
}

// Create a length converter function

function ConverterFunction(kiloMeters){
    let miles= kiloMeters * 1000
    console.log(`${kiloMeters} km is equal to ${miles} meters`)
}

// Calculate the sum of numbers within an array

function CalculateSumofArray(array){
    let sum=0;
    for(let i=0; i<array.length;i++){
        sum +=  array[i]
        
    }
    console.log(sum)
  
}

// Create a function that can return the sum of a particular column or row number in a table

function CalculateRow(array){
    let sum=0;
    for(let i=0; i<array.length;i++){
        let arrayRow=array[i][0]
        sum+=arrayRow
    }
    console.log(sum)

}

// Create a function that reverses an array

function reverseArray(arr){
    for(let i=arr.length-1;i>=0;i--){
      console.log(arr[i])
    }

}
// Sort an array from lowest to highest

function sortArray(arr){
    let sort=arr.sort((a,b)=>a-b)
    console.log(sort)
}

// Remove the spaces found in a string

function removeSpaces(input){
    input=input.replace(/\s/g,'')
    console.log(input)
}

// Return a Boolean if a number is divisible by 10

function checkDivisibilityByTen(num){
    if(num%10===0){
        return true
    }
    else{ 
        return false
    }
}

// Create a function that filters out negative numbers

function filterNegativeValues(arr){
    for(let i=0; i<arr.length;i++){
        if(arr[i]<0){
            console.log('This value is negative: ' + i)
        }
    }
}
