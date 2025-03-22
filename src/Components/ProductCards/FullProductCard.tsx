





type FullProductCards = {
    imageurl: string
    price: number
    title: string
    linkUrl: string
    tagText?: string
    reviewStars?: number
  reviewCount?: number
 }




const FullProductCards = (props: any) => {
  return (
    <div className='flex justify-between p-10 items-center'>
       
        <div className="text-left">
        <h1>{props.name}</h1>
        <h2>{props.description}</h2>
        <h3>{props.price}</h3> 
        </div>
        <div className="flex-end ">
          <img src={props.imageurl} alt="" className="h-90 w-90" />  
        </div>
    </div>
  )
}

export default FullProductCards
