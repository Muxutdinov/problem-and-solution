function FizzBuzz(input){
if(typeof input !== "number"){
    return "son emas!"
}
else if((input%5===0) && (input%5===0)){
    return "FizzBuzz"
}
else if(input%3===0){
    return "Fizz"
}
else if( input % 5 === 0 ) {
 return "Buzz"
}
else{
    return input
}
}
let natija =  FizzBuzz(8)
console.log(natija);
