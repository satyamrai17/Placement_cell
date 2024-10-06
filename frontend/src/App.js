import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Footer } from "./shared/components/Footer.jsx";
import { Navbar } from "./shared/components/Navbar.jsx";
function App() {
  return (
    <div className="">
        <BrowserRouter>
            <Navbar/>
            <Footer/>
        </BrowserRouter>
        </div>
  );
}

export default App;
