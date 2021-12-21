const books = [
    { title:"Clean Code", year:2009, rating:8.2 },
    { title:"Code Complete, 2nd edition", year:2008, rating:7.2 },
    { title:"Design Patters", year:2012, rating:3.4 },
    { title:"Soft Skills", year:2043, rating:9.1 },
    { title:"Refactoring ", year:2008, rating:5.6 },
    { title:"The Progmatic", year:2021, rating:9.8 },
    { title:"The Proggrammer", year:2007, rating:4.3 },
    { title:"The Code", year:2011, rating:3.3 },
]
// SortBooks(books)

//=================1

// function SortBooks(books){
//     books.map((value,index)=>{
//      if(value.year > 2008 && value.rating > 8){
//          console.log(value.title);
//      }
//     })
// }






//================2
const titles = books.filter((value)=>value.rating > 8 && value.year > 2008).sort((a,b)=>a.rating - b.rating).map(value=>value.title)

console.log(titles);