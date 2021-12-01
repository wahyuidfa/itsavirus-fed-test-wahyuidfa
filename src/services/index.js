import axios from "axios";

export const getAllProducts = () => {
    return axios.get(`https://my-json-server.typicode.com/megasuartika/fe-assignment/db`);
    
};
