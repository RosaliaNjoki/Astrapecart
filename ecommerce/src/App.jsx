import { Routes, Route} from 'react-router-dom'
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import items from "./pages/Items";
import Cart from "./pages/Cart";
import './App.css'

function App() {
  
  return (
      <div className = "min-h-screen by-gray-50">
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Items />}/>
            <Route path ="/login" element={<Login />} />
            <Route path ="/singup" element={<Signup />} />
            <Route path="/cart" element={<Cart />} />

          </Routes>
        </div>
        
      </div>

  );
}

export default App
