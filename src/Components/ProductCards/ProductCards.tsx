





type ProductCards = {
    imageurl: string
    price: number
    title: string
    linkUrl: string
    tagText?: string
    reviewStars?: number
  reviewCount?: number
 }




const ProductCards = (props: any) => {
  return (
    <div className='items-center border-gray-200 border-2 flex justify-center '>
        <div className="">
          <img src={props.imageurl} alt="" className="h-30 w-auto" />  
        <h1>{props.name}</h1>
        <h2>{props.description}</h2>
        <h3>{props.price}</h3>
        
        </div>
    </div>
  )
}

export default ProductCards
