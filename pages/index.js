import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import firebase from "../config/firebase";

import { toCurrency } from "../helpers/formatter";

class Home extends React.PureComponent {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection("products");
    this.unsubscribe = null;
    this.state = {
      products: [],
      isLoading: false
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    this.unsubscribe = this.ref.onSnapshot(querySnapshot =>
      this.onCollectionUpdate(querySnapshot)
    );
  }

  onCollectionUpdate(querySnapshot) {
    const products = [];
    querySnapshot.forEach(doc => {
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
    this.setState({
      products,
      isLoading: false
    });
  }

  render() {
    const { products, isLoading } = this.state;

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
                        <img src={item.photo} alt={item.slug} width="100%" />
                        <div className="card-body">
                          <h5>{item.name}</h5>
                          <p className="card-text badge badge-success">
                            {toCurrency(item.price)}
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

export default Home;
