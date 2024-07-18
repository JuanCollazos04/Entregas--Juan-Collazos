import { useEffect, useState } from "react";
import ItemList from "../ItemListContainer/ItemList";
import { getProducts, getProductsByCategory } from "../../productos";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ Bienvenidos }) => {
  const [products, setProducts] = useState([]);
  const {category} = useParams();

  useEffect(() => {
    if (!category) {
      getProducts()
        .then((devuelve) => {
          setProducts(devuelve);
        })
        .catch((err) => console.log(err));
    } else {
      getProductsByCategory(category)
        .then((devuelve) => {
          setProducts(devuelve);
        })
        .catch((err) => console.log(err));
    }
  }, [category]);

  return (
    <div className="contenido">
      <h1>{Bienvenidos}</h1>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;