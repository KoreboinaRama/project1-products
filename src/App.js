import "./App.css";

import axios from "axios";
import { useState } from "react";

function App() {
  let [inputText, setInputText] = useState("");
  let [products, setProducts] = useState([]);

  async function onClickBtn() {
    try {
      let apiUrl = "https://dummyjson.com/products/search?q=" + inputText;
      let apiRes = await axios.get(apiUrl);
      console.log(apiRes.data.products);
      setProducts(apiRes.data.products);
    } catch (ex) {
      alert(ex.message);
    }
  }
  return (
    <div className="container">
      <div className="row">
        <div className="input-cont">
          <input
            className="form-control"
            placeholder="Search"
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />

          <button
            className="btn btn-warning m-4"
            type="button"
            onClick={(e) => onClickBtn()}
          >
            Search
          </button>
        </div>

        <ul className="list-cont">
          {products.map((eachProd) => (
            <li className="items" key={eachProd.id}>
              <div className="img-contain">
                <img src={eachProd.thumbnail} className="img" />
              </div>
              <div className="data">
                <h1 className="brand">{eachProd.brand}</h1>
                <p className="category">{eachProd.category}</p>
                <p className="des">{eachProd.description}</p>
                <p className="status">{eachProd.availabilityStatus}</p>
                <p className="price">{eachProd.price}</p>
                <p className="rte">{eachProd.rating}</p>
                <p className="pol">{eachProd.returnPolicy}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
