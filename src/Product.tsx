import { useParams } from "react-router-dom"
const Product = ()=> {
    const params = useParams()
    return(
      <>
      {/* {data.params((params))} */}
      <div>
                
                <p>{params.id}</p>
        </div>
      </>
        
    )
}
export default Product