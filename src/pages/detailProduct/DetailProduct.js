import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./DetailProduct.module.css";
import Navbar from "../../components/navbar/Navbar";
import nike from "../../assets/nike.jpg";
import shoes1 from "../../assets/shoes1.png";
import shoes2 from "../../assets/shoes2.png";
import shoes3 from "../../assets/shoes3.png";
import shoes4 from "../../assets/shoes4.png";
import { IconButton } from "@mui/material";
import PlayCircleRoundedIcon from "@mui/icons-material/PlayCircleRounded";
import { style } from "@mui/system";
import freeDelivery from "../../assets/free-delivery.png"

function DetailProduct() {
    let data = JSON.parse(localStorage.getItem("db"));
    const [isData, setIsData] = useState();
    const { index } = useParams();
    console.log(data, "test data");
    useEffect(() => {
        setIsData(data);
    }, []);

    const cart = JSON.parse(localStorage.getItem("cart"));
    const handleCart = () => {
        let newCart = [];
        if (localStorage.getItem("cart") === null) {
            newCart = [];
        } else {
            newCart = JSON.parse(localStorage.getItem("cart"));
        }
        newCart.push(data[index]);
        localStorage.setItem("cart", JSON.stringify(newCart));
        window.location.reload()
    };

    let sizeShoes = data[index].sizes;
    let colorShoes = data[index].colors;

    console.log(sizeShoes, "test ukuran");
    console.log();

    console.log(isData, "test detail");
    return (
        <>
            <Navbar />
            <div className={styles.container}>
                <div className={styles.allImgContainer}>
                    <div className={styles.imageMainContainer}>
                        <img className={styles.mainImage} src={nike} alt="imgmain" />
                    </div>
                    <ul className={styles.listImage}>
                        <li>
                            <img className={styles.imageBottom} src={shoes1} alt="" />
                        </li>
                        <li>
                            <img className={styles.imageBottom} src={shoes2} alt="" />
                        </li>
                        <li>
                            <img className={styles.imageBottom} src={shoes3} alt="" />
                        </li>
                        <li>
                            <img className={styles.imageBottom} src={shoes4} alt="" />
                        </li>
                    </ul>
                </div>
                <div className={styles.detailContainer}>
                    {isData ? <p>{isData[index].category}</p> : null}
                    {isData ? <h1>{isData[index].name}</h1> : null}
                    {isData ? <p>{isData[index].description}</p> : null}
                    <div className={styles.video}>
                        <a className={styles.videoButton} href={`${data[index].video}` }target="_blank" rel="noreferrer">
                            {/* <IconButton aria-label="anonim" color="default"> */}
                            <PlayCircleRoundedIcon
                                sx={{ color: "#000", width: "56px", height: "56px" }}
                                className={styles.playButton}
                            />
                            {/* </IconButton> */}
                        </a>
                        <p>PLAY VIDEO</p>
                    </div>
                    <div className={styles.sizeWrapper}>
                        <p>SELECT SIZE(US)</p>
                        <div className={styles.sizeList}>
                            {sizeShoes.map((sizes, index) => (
                                <div key={index} className={styles.sizeOne}>{sizes}</div>
                            ))}
                        </div>
                    </div>
                    <div className={styles.colorWrapper}>
                        <p>SELECT COLOR</p>
                        <div className={styles.colorList}>
                            {colorShoes.map((color, index) => (
                                <div key={index} className={styles.colorOne} style={{backgroundColor:`${color.color_hash}`}}></div>
                            ))}
                        </div>
                    </div>
                    {/* <button onClick={handleCart}>add to cart</button> */}
                </div>
                <div className={styles.addToBagContainer}>
                    <div className={styles.leftSide}>
                    <img style={{width:"20px", height:"20px", display: "flex",}} src={freeDelivery} alt=""/> <p>FREE SHIPPING OVER $100 PURCHASE</p>
                    </div>
                    <div className={styles.rightSide}>
                    <button onClick={handleCart} className={styles.bagBtn}>ADD TO BAG-${data[index].price}   </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DetailProduct;
