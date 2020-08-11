import { API } from "../config";



export const createCategory = (userId, token, category) => {
  return fetch(`${API}/category/create/${userId}`, {
      method: 'POST',
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json', //When getting image with category, it should be form data
          Authorization: `Bearer ${token}`      //Not Application/json
      },
      body: JSON.stringify(category)
  })
      .then(response => {
          return response.json();
      })
      .catch(err => {
          console.log(err);
      });
};


export const createProduct = (userId, token, product) => {
    return fetch(`${API}/product/create/${userId}`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
           // 'Content-Type': 'application/json', Should be for data
            Authorization: `Bearer ${token}`
        },
        body: product //Because it is form data, we are returning only product
    })
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });
  };



  export const getCategory = categoryId => {
    return fetch(`${API}/category/${categoryId}`, {
        method: 'GET'
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const getCategories = () => {
    return fetch(`${API}/categories`, {
        method: 'GET'
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};