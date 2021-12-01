const initialState = {
    products: [],
    loading: false,
    error: "",
};

function getAllProductsReducers(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case "getallproducts/get-start":
            return {
                ...state,
                loading: true,
            };
        case "getallproducts/get-success":
            return {
                products: payload.getAllProducts,
                loading: false,
                error: "",
            };
        case "getallproducts/get-failed":
            return {
                ...state,
                loading: true,
                error: payload.error,
            };
        default:
            return state;
    }
}

export default getAllProductsReducers;
