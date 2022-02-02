import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import mainContext from "./context/mainContext";
import CreateProduct from "./pages/CreateProduct";
import SingleProduct from "./pages/SingleProduct";
import AllProducts from "./pages/AllProducts";
import ShoppingCart from "./pages/ShoppingCart";
import './App.css';
import {useState} from "react";

function App() {
  const [getProducts, setProducts] = useState([])
  const [getProductsInCart, setProductsInCart] = useState([])
  const [getTotal, setTotal] =useState(0)
  return (
    <div className='d-flex center column'>
      <mainContext.Provider value={{getProducts, setProducts, getProductsInCart, setProductsInCart, getTotal, setTotal}}>
        <Router>
          <div>
            <Link to="/allproducts"><button>All Products</button></Link>
            <Link to="/createproduct"><button>Create Product</button></Link>
            <Link to="/shoppingcart"><button>Shopping Cart</button></Link>
          </div>
          <Routes>
            <Route path="/createproduct" element={<CreateProduct/>}/>
            <Route path="/shoppingcart" element={<ShoppingCart/>}/>
            <Route path="/allproducts" element={<AllProducts/>}/>
            <Route path="/product/:uuid" element={<SingleProduct/>}/>
          </Routes>
        </Router>

      </mainContext.Provider>
    </div>
  );
}

export default App;
