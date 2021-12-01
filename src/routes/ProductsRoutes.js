import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import DetailProduct from "../pages/detailProduct/DetailProduct";
import BagList from "../pages/bagList/BagList";

export default function ProductsRoutes() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/detailProducts/:index" element={<DetailProduct/>}/>
                <Route path="/baglist" element={<BagList/>}/>
            </Routes>
        </Router>
    )
}