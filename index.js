

function Random(){

let number  = Math.floor(Math.random() * 70) - 30;
if(number<0){
    console.log(number, "  minis");
}
else{
    console.log(number, "Plus");
}
}

Random()