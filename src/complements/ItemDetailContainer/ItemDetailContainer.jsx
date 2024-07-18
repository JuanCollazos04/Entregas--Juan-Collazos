import { useEffect, useState } from "react";
import { getProductById } from "../../productos"
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetailContainer/ItemDetail";


export const ItemDetailContainer = () => {
    const [product, setProduct] = useState();
    const {id} =  useParams()
    useEffect(()=>{
        getProductById(id)
            .then((res)=>{
                setProduct(res)
                console.log(product)
            })
            .catch((err)=> console.log(err))
    }, [id])
  return (
    <div className="D-container">
        <ItemDetail {...product} />
    </div>
  )
}