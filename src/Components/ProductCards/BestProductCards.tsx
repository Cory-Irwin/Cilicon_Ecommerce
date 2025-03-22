





type BestProductCards = {
    imageurl: string
    price: number
    title: string
    linkUrl: string
    tagText?: string
    reviewStars?: number
  reviewCount?: number
 }




const BestProductCards = (props: any) => {
  return (
    <div className='items-center flex justify-center '>
        <div className="">
          <img src={props.imageurl} alt="" className="h-30 w-30" />  
        <h1>{props.name}</h1>
        <h2>{props.description}</h2>
        <h3>{props.price}</h3>
        
        </div>
    </div>
  )
}

export default BestProductCards
