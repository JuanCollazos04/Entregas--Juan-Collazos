import { Link } from "react-router-dom";

const Item = ({ id, name, img, category, price }) => {
  return (
    <article className="Articulo">
      <h1>{name}</h1>
      <img className="img" src={img} alt={name} />
      <h2>{"$" + price}</h2>
      <Link className="detalles" to={`/item/${id}`}>Ver Detalle</Link>
      <hr />
    </article>
  );
};

export default Item;