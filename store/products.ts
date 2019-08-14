import axios from 'axios'
import Product from '../models/Product'

export const state = (): object => ({
  products: [],
  product: {
    title: 'sample title'
  }
})

export const getters = {
  products: (state): Product[] => state.products,
  product: (state): Product => state.product
}

export const mutations = {
  setAllProducts(state, payload: Product[]): void {
    state.products = payload
  },
  setProduct(state, payload: Product): void {
    state.product = payload
  },
}

const url: string = process.env.API || ''
export const actions = {
  fetchAllProducts: async (): Promise<any> =>
    await axios.get(url)
      .then(res => console.log(res.data))
      .catch(error => console.log(error.data))
}
