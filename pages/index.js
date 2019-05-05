import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

class Home extends React.PureComponent {
  render() {
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
              <div className="row">
                <div className="col-md-4">
                  <div className="card mb-4 shadow-sm">
                    <img
                      src="../static/img/produk.jpeg"
                      alt="produk"
                      width="100%"
                    />
                    <div className="card-body">
                      <h5>Kautsariya Flowery Simple Mini Dress</h5>
                      <p className="card-text badge badge-success">
                        Rp. 30.000
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-secondary"
                          >
                            Lihat Dulu
                          </button>
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-secondary"
                          >
                            Beli Sekarang
                          </button>
                        </div>
                        <p className="card-text badge badge-secondary">
                          S, L, XL
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card mb-4 shadow-sm">
                    <img
                      src="../static/img/produk.jpeg"
                      alt="produk"
                      width="100%"
                    />
                    <div className="card-body">
                      <h5>Kautsariya Flowery Simple Mini Dress</h5>
                      <p className="card-text badge badge-success">
                        Rp. 30.000
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-secondary"
                          >
                            Lihat Dulu
                          </button>
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-secondary"
                          >
                            Beli Sekarang
                          </button>
                        </div>
                        <p className="card-text badge badge-secondary">
                          S, L, XL
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card mb-4 shadow-sm">
                    <img
                      src="../static/img/produk.jpeg"
                      alt="produk"
                      width="100%"
                    />
                    <div className="card-body">
                      <h5>Kautsariya Flowery Simple Mini Dress</h5>
                      <p className="card-text badge badge-success">
                        Rp. 30.000
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-secondary"
                          >
                            Lihat Dulu
                          </button>
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-secondary"
                          >
                            Beli Sekarang
                          </button>
                        </div>
                        <p className="card-text badge badge-secondary">
                          S, L, XL
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card mb-4 shadow-sm">
                    <img
                      src="../static/img/produk.jpeg"
                      alt="produk"
                      width="100%"
                    />
                    <div className="card-body">
                      <h5>Kautsariya Flowery Simple Mini Dress</h5>
                      <p className="card-text badge badge-success">
                        Rp. 30.000
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-secondary"
                          >
                            Lihat Dulu
                          </button>
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-secondary"
                          >
                            Beli Sekarang
                          </button>
                        </div>
                        <p className="card-text badge badge-secondary">
                          S, L, XL
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card mb-4 shadow-sm">
                    <img
                      src="../static/img/produk.jpeg"
                      alt="produk"
                      width="100%"
                    />
                    <div className="card-body">
                      <h5>Kautsariya Flowery Simple Mini Dress</h5>
                      <p className="card-text badge badge-success">
                        Rp. 30.000
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-secondary"
                          >
                            Lihat Dulu
                          </button>
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-secondary"
                          >
                            Beli Sekarang
                          </button>
                        </div>
                        <p className="card-text badge badge-secondary">
                          S, L, XL
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    );
  }
}

export default Home;
