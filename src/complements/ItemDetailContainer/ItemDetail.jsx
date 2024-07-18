import ItemCount from "../item/itemcount"


const ItemDetail = ({name, img, price, category, description, stock}) => {
  return (
    <article className="D-articulo">
        <h1>{name}</h1>
        <img className="D-img" src={img}/>
        <p>{description}</p>
        <h2>{price}</h2>
        <ItemCount stock={stock} />

    </article>
  )
}

export default ItemDetail