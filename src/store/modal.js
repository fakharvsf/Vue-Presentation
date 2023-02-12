// Utilities
import { defineStore } from "pinia";

export const useModalStore = defineStore("modal", {
  state: () => ({
    isOpen: false,
    products: null,
    //
  }),
  getters: {
    hiddenClass(state) {
      return !state.isOpen ? "hidden" : "";
    },
    getProductsGetter(state) {
      return state.products;
    },
  },
  actions: {
    getProducts() {
      fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((response) => {
          this.products = response.products;
          console.log(this.products);
        });
    },
  },
});

export const useUserStore = defineStore("user", {
  state: () => ({
    user: null,
    //
  }),
  getters: {
    hiddenClass(state) {
      return state.user;
    },
  },
  actions: {
    getData() {
      fetch("https://dummyjson.com/products/3")
        .then((res) => res.json())
        .then((response) => {
          // console.log(state.user);
          console.log(response);
          this.user = response;
          console.log("🚀 ~ file: modal.js:34 ~ .then ~ this.user", this.user);
        });
    },
  },
});
