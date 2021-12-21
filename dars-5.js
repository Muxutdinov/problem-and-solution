let numbers = [1,2,3,4]

let output = move(numbers,0,2)

console.log(output);

function move(array,index,offset){
    let position = index + offset
    if(position>=array.length){
        console.error("Invalid offset")
    }
    let result = [...array]
    let element = result.splice(index,1)[0]
    result.splice(position,0,element)
    return result
}