
function ShowTubs(limit){
  for(let number = 2;number <= limit;number++){
      let IsPrime = true
      for(let InValue = 2;InValue < number ; InValue++){
          if(number % InValue ===0){
              IsPrime = false
            } break;
        }
        if(IsPrime) console.log(number);
    }
}
ShowTubs(10)


