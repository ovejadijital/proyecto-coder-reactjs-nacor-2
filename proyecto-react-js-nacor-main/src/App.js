
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./componentes/navbar/NavBar";
import ItemListContainer from "./componentes/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./componentes/itemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  
  return (
   <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer greeting={"hola bienvenidos"}/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
        <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
        <Route path='+' element={<h2>404: No Existe</h2>}/>
      </Routes>
      
    
   </BrowserRouter>
  );
}

export default App;
