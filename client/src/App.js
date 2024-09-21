import logo from './logo.svg';
import './App.css';
import ProductDetails from './components/ProductDetails';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
    <ProductDetails/>
    <ToastContainer/>
    </>
  );
}

export default App;
