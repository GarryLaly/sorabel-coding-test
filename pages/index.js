import React from "react";
import Link from "next/link";
import { observer } from "mobx-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import store from "../stores/store";

import { toCurrency } from "../helpers/formatter";

class Home extends React.Component {
  componentDidMount() {
    store.loadProducts();
  }

  render() {
    const { products, isLoading } = store;

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
                  {products.map(item => (
                    <div key={item.id} className="col-md-4">
                      <div className="card mb-4 shadow-sm">
                        <Link href={`detail?product=${item.slug}`}>
                          <img
                            src={item.photo}
                            alt={item.slug}
                            width="100%"
                            className="cursor-pointer"
                          />
                        </Link>
                        <div className="card-body">
                          <Link href={`detail?product=${item.slug}`}>
                            <h5 className="cursor-pointer">{item.name}</h5>
                          </Link>
                          <p className="card-text badge badge-success">
                            {toCurrency(item.price)}
                          </p>
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                              <Link href={`detail?product=${item.slug}`}>
                                <button
                                  type="button"
                                  className="btn btn-sm btn-outline-secondary"
                                >
                                  Lihat Dulu
                                </button>
                              </Link>
                              <button
                                type="button"
                                className="btn btn-sm btn-outline-secondary"
                              >
                                Beli Sekarang
                              </button>
                            </div>
                            <p className="card-text badge badge-secondary">
                              {item.sizes}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
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

export default observer(Home);
