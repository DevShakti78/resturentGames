import {useState,useEffect} from 'react'
import "./res.css"
import axios from 'axios'

export default function RestaurantDetails() {
    const[pizza,setPizza] = useState([])
    const[page,setPage]=useState(1)
    const[rating,setRating]=useState([])
useEffect(()=>{
    axios.get(`http://localhost:3001/users?_limit=7&_page=${page}`).then((res)=>{
        setPizza(res.data)
        console.log(pizza)
        })
},[])
function changePage(){
  console.log("here")
  setPage(page+1)
}
//console.log(pizza)
// const ratingdata = (pizza.rating)=>{

// // for(var i=0;i<pizza.rating.length;i++){
// //   if()
// }

// const handleSort=(field)=>{
//   const sortdata = pizza.sort((a,b)=>{

//    if(field=="Card"){
//      return Card
//    }
//    else if(field=="Cash"){
//      return Cash
//    }
    
//   })
//   setPizza([...sortdata])
// }


const handleescSort=(field,asc=true)=>{
  const sortdata = pizza.sort((a,b)=>{

    if(asc){
      return a[field]-b[field]
    }
   
      return b[field]-a[field]
    
    
  })
  setPizza([...sortdata])
}

  return (
      <> <div><h1>MyResturentGames</h1></div>
      <div>
        <button>1</button>
      <button onClick={changePage}>2</button>
      <button>3</button>
      <button>4</button>
      </div>
      <div>
        <button>4 and above</button>
      <button>3 and above</button>
      <button>2 and above</button>
      <button>1 and above</button>
      </div>
      <div>
        <button>Cash</button>
      <button>Card</button>
      <button>All</button>
      
      </div>
      <div>
        <button onClick={()=>handleescSort("price")}>asc</button>
      <button onClick={()=>handleescSort("price",false)}>dsc</button>
     
      </div>
{pizza.map((e)=>{
    return(
        <>
        <div className='bodydiv' key={e.id}>
        <div className="content1"><img style={{height:"200px"}} src="https://upload.wikimedia.org/wikipedia/commons/6/62/Barbieri_-_ViaSophia25668.jpg" /></div>
        <div className="content2">
            <h1 className='title'>{e.title}</h1>
            <h3 className='cat'>{e.Catogery}</h3>
            <p>{"Cost for two"+" "+e.costfortwo}</p>
            <p>{e.price}</p>
            <p>{"Aceepts"+" "+e.Payment}</p>
        </div>
        <div className="content3">
            <h3>{e.rating}</h3>
            <h3>{e.Votes+ "Votes"}</h3>
            <h3>{e.reviews+ "Reviews"}</h3>
        </div>
              </div>
              <div className='orderonline'><h3 className='onlinecont'>Order Online = </h3></div>
           </>   
              
    )
}

  
   
)}
     
      
      </>
   
  )
}
