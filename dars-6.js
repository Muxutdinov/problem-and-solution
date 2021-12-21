let numbers = [1,2,93,4,5]
let maxNumber = getMaxNumber(numbers)
console.log(maxNumber);

// =======1

// function getMaxNumber(array){
//     if(array.length===0){
//         console.log(undefined);
//     }
//      return   console.log(Math.max.apply(Math,array))
// }


//=============2

// function getMaxNumber(array){
//     if(array.length===0){
//         return undefined
//     }

//     let maxNumber = array[0];
//     for(let i = 1;i < array.length;i++){
//         if(array[i] > maxNumber)
//             maxNumber = array[i]
//         }
//         return maxNumber
// }


//========================3

function getMaxNumber(array){
    if( array.length === 0 ){
    return undefined
}
array.reduce((value,result)=>{
    return (value > result) ? value : result
})
}