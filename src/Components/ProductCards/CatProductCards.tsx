





type CatProductCards = {
    imageurl: string
    price: number
    title: string
    linkUrl: string
    tagText?: string
    reviewStars?: number
  reviewCount?: number
 }




const CatProductCards = (props: any) => {
  return (
    <div className='items-center border-gray-200 border-2 flex justify-center '>
        <div className="">
          <img src={props.imageurl} alt="" className="h-30 w-auto" />  
        <h1>{props.name}</h1>
        
        
        </div>
    </div>
  )
}

export default CatProductCards
