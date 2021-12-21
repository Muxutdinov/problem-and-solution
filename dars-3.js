// 0 - 50: F
// 51 - 60 : D
// 61 - 70: C
// 71 - 80: B
// 81 - 100 A



const marks = [99,80,59,70,40]
Score(marks)
function Score(mark){

    const num = marks.reduce((a,b)=>{
        return  a+b 
    })
    const nom = Math.floor(num / 5)
    if( nom <= 50 ){
        console.log("F");
    }
    else if( nom > 50 && nom <= 60){
        console.log("D");
    }
    else if( nom > 60 && nom <= 70){
        console.log("C");
    }
    else if( nom > 70 && nom <= 80){
        console.log("B");
    }
    else if( nom > 80 && nom <= 100){
        console.log("A");
    }
}