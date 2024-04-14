
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./componentes/navbar/NavBar";
import ItemListContainer from "./componentes/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./componentes/itemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./componentes/cart/Cart";
import { CartProvider } from './context/CartContext';
import ChecKout from './componentes/checkout/ChecKout';

function App() {
  
  return (
  <CartProvider>
   <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer greeting={"hola bienvenidos"}/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
        <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<ChecKout/>}/>
        <Route path='+' element={<h2>404: No Existe</h2>}/>
      </Routes>
       </BrowserRouter>
  </CartProvider>
  );
}

export default App;
