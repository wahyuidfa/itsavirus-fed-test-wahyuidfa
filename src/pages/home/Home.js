import React from "react";
import { Grid } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import Products from "../../components/products/Products";
import "./Home.module.css";
import Navbar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsAsync } from "../../redux/actions";
import getAllProductsReducers from "../../redux/reducers/getAllProductsReducers";

export default function Home() {
    const dispatch = useDispatch();
    const { products, loading, error } = useSelector((state) => state.getAllProductsReducers);

    useEffect(() => {
        dispatch(getAllProductsAsync());
    }, [dispatch]);
    console.log(products, "kosong");
    // const [product, setProduct] = useState([]);
    // const [loading, setLoading] = useState(true);
    // const [data, setData] = useState();
    // const [isData, setIsData] = useState()

    // useEffect(() => {
    //     axios
    //     .get(`https://my-json-server.typicode.com/megasuartika/fe-assignment/db`)
    //     .then((response) => {
    //         setIsData(response.data)
    //         setProduct(response.data.shoes)
    //         localStorage.setItem("db", JSON.stringify(response.data.shoes))
    //         setLoading(false)
    //         console.log(product, "test product")
    //     },)
    // }, [])

    return (
        <>
            <Navbar />
            <main>
                <h2>New Releases</h2>
                <Grid container justify="center" spacing={4} width="100%">
                    {products.map((product, index) => (
                        <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                            <Link style={{textDecoration:"none"}} to={`/detailproducts/${index}`}>
                                <Products products={product} />
                            </Link>
                        </Grid>
                    ))}
                </Grid>
            </main>
        </>
    );
}
