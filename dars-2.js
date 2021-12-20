// ===========  Task
// Tezlik cheklovi => 70 km/soat
// point => guvohnoma olib qoyiladi


const SPEEDLIMIT = 70
const MAXPOINTS = 12
const POINT  = 5

function checkSpeed(speed){
if(speed < SPEEDLIMIT + POINT){
    console.log("OK");
}
else{
    const Points = Math.floor((speed - SPEEDLIMIT) / POINT);
    if( Points >= MAXPOINTS ){
        console.log("Guvohnoma olib qo'yilsin");
    }
    else{
        console.log(Points);
    }
}
}

checkSpeed(75)