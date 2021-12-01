
import { Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import nike from "../../assets/nike.jpg";
import useStyles from "./styles"

function Products({ products }) {
    const classes = useStyles();
    return (
        <Card elevation={0} className={classes.root}>
            <CardMedia className={classes.media} image={nike} title={products.name} />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="p" fontSize="18px" gutterBottom>
                        {products.name}
                    </Typography>
                    <Typography variant="p" fontSize="18px" color="textSecondary">${products.price}</Typography>
                </div>
                <Typography variant="p" fontSize="14px" color="textSecondary">
                    {products.category}
                </Typography>
            </CardContent>
            {/* <CardActions disableSpacing className={classes.cardActions}>
                <IconButton aria-label="Add to Cart">
                    <AddShoppingCart />
                </IconButton>
            </CardActions> */}
        </Card>
    );
}

export default Products;
