import { getAllProducts } from "../../services";

export const getAllProductsAsync = () => {
    return (dispatch) => {
        dispatch({ type: "getallproducts/get-start" });
        getAllProducts()
            .then((response) => {
                dispatch(getAllProductsSuccess(response.data.shoes));
                localStorage.setItem("db", JSON.stringify(response.data.shoes))
                console.log(response.data.shoes, "test");
            })
            .catch((error) => {
                dispatch(getAllProductsFailed(error));
            });
    };
};

export const getAllProductsSuccess = (getAllProducts) => ({
    type: "getallproducts/get-success",
    payload: {
        getAllProducts,
    },
});

export const getAllProductsFailed = (error) => ({
    type: "getallproducts/get-failed",
    payload: {
        error,
    },
});
