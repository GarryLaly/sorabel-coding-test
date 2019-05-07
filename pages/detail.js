import React from "react";
import ImageZoom from "react-medium-image-zoom";
import { observer } from "mobx-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import store from "../stores/store";

import { toCurrency } from "../helpers/formatter";

class Detail extends React.PureComponent {
  constructor(props) {
    super(props);
    const { url } = this.props;
    const { query = {} } = url;
    const { product: slug } = query;

    store.loadDetail(slug);
  }

  render() {
    const { productDetail, isLoading } = store;

    return (
      <div>
        <Header title="Sorabel" />
        <main role="main">
          <section className="jumbotron text-center">
            <div className="container">
              <h1 className="jumbotron-heading">Sorabel</h1>
              <p className="lead text-muted">
                Shopping for products with free delivery and try it free.
              </p>
              <a href="#shopping" className="btn btn-primary my-2">
                Shop Now
              </a>
            </div>
          </section>

          <div className="album py-5 bg-light" id="shopping">
            <div className="container">
              {isLoading ? (
                <div className="text-center">
                  <img src="../static/img/loading.gif" alt="loading" />
                </div>
              ) : (
                <div className="row">
                  {productDetail.name ? (
                    <div className="col-md-4 offset-md-4">
                      <div className="card mb-4 shadow-sm">
                        <ImageZoom
                          image={{
                            src: productDetail.photo,
                            alt: productDetail.slug,
                            style: { width: "100%" }
                          }}
                          zoomImage={{
                            src: productDetail.photo,
                            alt: productDetail.slug
                          }}
                        />
                        <div className="card-body">
                          <h5>{productDetail.name}</h5>
                          <p className="card-text badge badge-success">
                            {toCurrency(productDetail.price)}
                          </p>
                          <div className="d-flex justify-content-between align-products-center">
                            <div className="btn-group">
                              <button
                                type="button"
                                className="btn btn-sm btn-outline-secondary"
                              >
                                Beli Sekarang
                              </button>
                            </div>
                            <p className="badge badge-secondary">
                              {productDetail.sizes}
                            </p>
                          </div>
                          <p
                            style={{
                              marginTop: 10,
                              fontSize: 14,
                              color: "#aaa"
                            }}
                          >
                            {productDetail.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="col-md-4 offset-md-4">
                      <div className="card mb-4 shadow-sm">
                        <div className="card-body">
                          <p className="card-text text-center">
                            Product not found
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </main>

        <Footer />
      </div>
    );
  }
}

export default observer(Detail);
