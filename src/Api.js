import axios from 'axios';

export const customerData = async () => {
  return axios.get(import.meta.env.VITE_URL, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
    },
  });
};

export const customerByIdData = async (id) => {
  return axios.get(import.meta.env.VITE_URL + '/' + id, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
    },
  });
};
export const deleteData = async (id) => {
  return axios.delete(import.meta.env.VITE_URL + '/' + id, {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
    },
  });
};

export const postData = async (values) => {
  return fetch(import.meta.env.VITE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
    },
    body: JSON.stringify(values),
  })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(JSON.stringify(values));
      console.log(error);
    });
};

export const editData = async (values, id) => {
  return fetch(import.meta.env.VITE_URL + '/' + id, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
    },
    body: JSON.stringify(values),
  })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(JSON.stringify(values));
      console.log(error);
    });
};
/**
 * Higher-order function for async/await error handling
 * @param {function} fn an async function
 * @returns {function}
 */
export const catchErrors = (fn) => {
  return function (...args) {
    return fn(...args).catch((err) => {
      console.error(err);
    });
  };
};
