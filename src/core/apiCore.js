import { API } from "../config";
import queryString from "query-string";

export const getProducts = sortBy => {
    return fetch(`${API}/products?sortBy=${sortBy}&order=desc&limit=12`, {
        method: "GET"
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

// export const getCategories = () => {
//     return fetch(`${API}/categories`, {
//         method: "GET"
//     })
//         .then(response => {
//             return response.json();
//         })
//         .catch(err => console.log(err));
// };