import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, IconButton, Typography, Badge } from "@mui/material";
import logo from "../../assets/logo.png";
import useStyles from "./styles";
import { AccountCircleOutlined, ShoppingBagOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";

function Navbar() {
    let addCart = JSON.parse(localStorage.getItem("cart"));
    const [isCart, setIsCart] = useState();
    const classes = useStyles();

    useEffect(() => {}, [addCart]);
    return (
        <>
            <AppBar elevation={0} position="fixed" className={classes.appBar} color="inherit">
                <Toolbar className={classes.toolBar}>
                   <Link to="/"> <Typography className={classes.title} color="inherit">
                        <img src={logo} alt="nike" className={classes.image} />
                    </Typography> </Link>
                    <Typography className={classes.listNavbar} color="inherit">
                        <ul className={classes.list}>
                            <li tabIndex="-1" className={classes.listNav} >New Release</li>
                            <li tabIndex="-1" className={classes.listNav}>Men</li>
                            <li tabIndex="-1" className={classes.listNav}>Women</li>
                            <li tabIndex="-1" className={classes.listNav}>Kids</li>
                            <li tabIndex="-1" className={classes.listNav}>Costumize</li>
                        </ul>
                    </Typography>
                    <div className={classes.rightSide}>
                        <Link style={{textDecoration:"none", cursor:"pointer", color:"black"}} to="/bagList">
                            {" "}
                            <IconButton aria-label="Show cart items" color="inherit">
                                <Badge
                                    badgeContent={addCart === null ? null : addCart.length}
                                    color="error"
                                >
                                    <ShoppingBagOutlined  />
                                </Badge>
                            </IconButton>{" "}
                        </Link>
                        <IconButton aria-label="anonim" color="inherit">
                            <AccountCircleOutlined />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default Navbar;
