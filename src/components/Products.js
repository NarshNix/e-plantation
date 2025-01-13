import { useEffect, useState } from "react";
import { plantsArray } from "../plants";

import "./product.css";

export default function Products() {
  const [plant, setPlants] = useState([]);
  const [search, setSearch] = useState("");
  let dispProduct;
  
  useEffect(() => {
    setPlants(plantsArray);
  }, []);

  console.log(plant);

  
    dispProduct = plant.map((product) => {
      return product.plants.map((plant) => {
        return (
          <div className="product-container">
            <div className="img-container">
              <img src={plant.image} alt={plant.name} />
            </div>
            <div className="product-title">
              <h3>{plant.name}</h3>
              <p>{plant.description}</p>
              <p>{plant.cost}</p>
              <button>Add To Cart</button>
            </div>
          </div>
        );
      });
    });

  return (
    <> 
      <div className="search-category">
        <label htmlFor="category">Category</label>
        <input type="text" id="category" placeholder="Search by Category" value={search} onChange={} />
      </div>
      <div className="products">{dispProduct}</div>;
    </>
  );
}
