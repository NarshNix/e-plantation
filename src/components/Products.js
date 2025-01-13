// Products.js
import { useEffect, useState } from "react";
import { plantsArray } from "../plants";
import "./product.css";
import { useDispatch, useSelector } from "react-redux";

export default function Products() {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredPlants, setFilteredPlants] = useState([]);
  const [addToCart, setAddToCart] = useState({}); // Track added items

  const selector = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    setPlants(plantsArray);
    setFilteredPlants(plantsArray); // Initialize with all plants
  }, []);

  useEffect(() => {
    if (search.trim() === "") {
      setFilteredPlants(plants);
    } else {
      const filtered = plants.filter((product) =>
        product.category.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredPlants(filtered);
    }
  }, [search, plants]);

  function addItem(product) {
    dispatch({ type: "ADD_TO_CART", payload: product });
    setAddToCart((prevState) => ({ ...prevState, [product.name]: true }));
  }

  return (
    <>
      <div className="search-category">
        <label htmlFor="category">Category</label>
        <input
          type="text"
          id="category"
          placeholder="Search by Category"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="products">
        {filteredPlants.map((product) =>
          product.plants.map((plant) => (
            <div key={plant.name} className="product-container">
              <div className="img-container">
                <img src={plant.image} alt={plant.name} />
              </div>
              <div className="product-title">
                <h3>{plant.name}</h3>
                <p>{plant.description}</p>
                <p>{plant.cost}</p>
                <button
                  disabled={addToCart[plant.name]}
                  onClick={() => addItem(plant)}
                >
                  {addToCart[plant.name] ? "Added to Cart" : "Add To Cart"}
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}
