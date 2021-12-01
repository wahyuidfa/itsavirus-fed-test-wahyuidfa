import { ShoppingBagOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import React from "react";
import Navbar from "../../components/navbar/Navbar";
import styles from "./BagList.module.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import nike from "../../assets/nike.jpg";
import arrow from "../../assets/small_long_right.png";

function BagList() {
    let bagList = JSON.parse(localStorage.getItem("cart"));
    let sumAll = [];
    if (bagList === null) {
        sumAll = [];
    } else {
        sumAll = bagList.map((item) => item.price).reduce((prev, curr) => prev + curr, 0);
    }

    // let sumAll = bagList.map((item) => item.price).reduce((prev, curr) => prev + curr, 0);
    console.log(sumAll, "price");
    return (
        <>
            <Navbar />
            <div className={styles.container}>
                <div className={styles.headingContainer}>
                    <h1>Your Bag</h1>
                    <Badge badgeContent={bagList === null ? null : bagList.length} color="error">
                        <ShoppingBagOutlined sx={{ fontSize: "40px" }} />
                    </Badge>
                </div>
                {bagList ? (
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>PRODUCT</TableCell>
                                    <TableCell align="center">PRICE</TableCell>
                                    <TableCell align="center">QUANTITY</TableCell>
                                    <TableCell align="center">TOTAL</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {bagList.map((row) => (
                                    <TableRow
                                        key={row.name}
                                        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                    >
                                        <TableCell
                                            component="th"
                                            scope="row"
                                            sx={{ alignItems: "center", display: "flex" }}
                                        >
                                            <img
                                                src={nike}
                                                style={{ width: "40px", paddingRight: "10px" }}
                                            />
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="center">${row.price}</TableCell>
                                        <TableCell align="center">1</TableCell>
                                        <TableCell align="center">${row.price}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                ) : null}
                <div className={styles.totalContainer}>
                    <div className={styles.total}>
                        <p>Total</p>
                        <p>${sumAll}</p>
                    </div>
                </div>
                <div className={styles.btnContainer}>
                    <button className={styles.payButton}>
                        <p>PAY NOW</p>
                        <img src={arrow} alt="" />{" "}
                    </button>
                </div>
            </div>
        </>
    );
}

export default BagList;
