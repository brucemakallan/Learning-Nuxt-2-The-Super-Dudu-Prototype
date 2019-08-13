import axios from 'axios';

export const state = () => ({
  products: [],
  product: {
    title: 'sample title'
  }
});

export const getters = {
  products: state => state.products,
  product: state => state.product
};

export const mutations = {
  setAllProducts: (state, payload) => state.products = payload,
  setProduct: (state, payload) => state.product = payload,
};

export const actions = {
  fetchAllProducts: async () => {
    await axios.get(process.env.API)
      .then(res => console.log(res.data))
      .catch(error => console.log(error.data));
  }
};
