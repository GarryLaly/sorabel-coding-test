/* eslint-disable func-names */
import { observable, action } from "mobx";
import firebase from "../config/firebase";

class Store {
  @observable products = [];

  @observable productDetail = {};

  @observable isLoading = false;

  @action setLoading = isLoading => {
    this.isLoading = isLoading;
  };

  @action setProducts = products => {
    this.products = products;
  };

  @action setProductDetail = productDetail => {
    this.productDetail = productDetail;
  };

  @action getProductDetail = slug => {
    return this.products.filter(item => item.slug === slug);
  };

  @action loadProducts = () => {
    this.setLoading(true);
    const that = this;
    return firebase
      .firestore()
      .collection("products")
      .onSnapshot(function(response) {
        const products = [];
        response.docs.forEach(doc => {
          const { slug, name, price, photo, sizes, description } = doc.data();
          products.push({
            id: doc.id,
            slug,
            name,
            price,
            photo,
            sizes,
            description
          });
        });
        that.setProducts(products);
        that.setLoading(false);

        return products;
      });
  };

  @action loadDetail = productSlug => {
    this.setLoading(true);
    const that = this;
    return firebase
      .firestore()
      .collection("products")
      .where("slug", "==", productSlug)
      .onSnapshot(function(response) {
        let product = {};
        response.docs.forEach(doc => {
          const { slug, name, price, photo, sizes, description } = doc.data();
          product = {
            id: doc.id,
            slug,
            name,
            price,
            photo,
            sizes,
            description
          };
        });

        that.setProductDetail(product);
        that.setLoading(false);

        return product;
      });
  };
}

const store = new Store();
export default store;
