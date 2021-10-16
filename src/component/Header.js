import { useState } from 'react'

const Cards = () => {
     const [card, setcard] = useState([
          {
               Image : "https://z.nooncdn.com/products/tr:n-t_240/v1563786689/N22732308A_1.jpg",
               Title : 'Apple Air Pods',
               Price : "AED 439.00",
               Date : "Arrives Tomorrow"
          },          
          {
               Image : "https://z.nooncdn.com/products/tr:n-t_240/v1605592272/N41233397A_1.jpg",
               Title : 'Apple IPhone 12 Pro Max',
               Price : "AED 4299.00",
               Date : "Arrives Tomorrow"
          },
          {
               Image : "https://z.nooncdn.com/products/tr:n-t_240/v1611138575/N41910684A_1.jpg",
               Title : 'Apple MacBook Pro',
               Price : "AED 4239.00",
               Date : "Arrives Tomorrow"
          },
          {
               Image : "https://z.nooncdn.com/products/tr:n-t_240/v1621832642/N47555809A_1.jpg",
               Title : 'Evvoli 70inch 4K QLED TV',
               Price : "AED 2299.00",
               Date : "Availabe"
          },   {
               Image : "https://z.nooncdn.com/products/tr:n-t_240/v1563786689/N22732308A_1.jpg",
               Title : 'Apple Air Pods',
               Price : "AED 439.00",
               Date : "Arrives Tomorrow"
          },          
          {
               Image : "https://z.nooncdn.com/products/tr:n-t_240/v1605592272/N41233397A_1.jpg",
               Title : 'Apple IPhone 12 Pro Max',
               Price : "AED 4299.00",
               Date : "Arrives Tomorrow"
          },
          {
               Image : "https://z.nooncdn.com/products/tr:n-t_240/v1611138575/N41910684A_1.jpg",
               Title : 'Apple MacBook Pro',
               Price : "AED 4239.00",
               Date : "Arrives Tomorrow"
          },
          {
               Image : "https://z.nooncdn.com/products/tr:n-t_240/v1621832642/N47555809A_1.jpg",
               Title : 'Evvoli 70inch 4K QLED TV',
               Price : "AED 2299.00",
               Date : "Availabe"
          },
          {
            Image : "https://z.nooncdn.com/products/tr:n-t_240/v1563786689/N22732308A_1.jpg",
            Title : 'Apple Air Pods',
            Price : "AED 439.00",
            Date : "Arrives Tomorrow"
       },          
       {
            Image : "https://z.nooncdn.com/products/tr:n-t_240/v1605592272/N41233397A_1.jpg",
            Title : 'Apple IPhone 12 Pro Max',
            Price : "AED 4299.00",
            Date : "Arrives Tomorrow"
       },
       {
            Image : "https://z.nooncdn.com/products/tr:n-t_240/v1611138575/N41910684A_1.jpg",
            Title : 'Apple MacBook Pro',
            Price : "AED 4239.00",
            Date : "Arrives Tomorrow"
       },
          
         
     ])
     return (
          <div className="d-flex flex-wrap ms-5">
               
               {card.map((e,i)=>{
                    return(
                     < section className="card me-2 my-2 text-center" style={{width: 8.8+"rem"}} key={i}>
                         <img src={e.Image} class="card-img-top" alt="..." />
                         <div class="card-body">
                           <h5 class="card-title">{e.Title}</h5>
                           <p class="card-text">{e.Price}</p>
                           <p class="card-text">{e.Date}</p>
                           
                         </div>
                       </section>
                    )
               })}
          </div>
         
     )
}

export default Cards;