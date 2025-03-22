





type HalfProductCards = {
    imageurl: string
    price: number
    title: string
    linkUrl: string
    tagText?: string
    reviewStars?: number
  reviewCount?: number
 }


const HalfProductCards = (props: any) => {
  return (
    <div className=' relative flex items-center p-10 justify-center '>
       <div className="flex-start ">
         <h1>{props.name}</h1>
        <h2>{props.description}</h2>
        <h3>{props.price}</h3>
        </div>
        <div className="bject-right">
          <img src={props.imageurl} alt="" className="h-50 w-50 " /> 
          </div> 

      
        </div>
    
  )
}

export default HalfProductCards
