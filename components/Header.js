import Head from "next/head";
import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

const Header = ({ title }) => (
  <div>
    <Head>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link
        rel="stylesheet"
        href="../static/vendor/bootstrap/css/bootstrap.min.css"
      />
      <link rel="stylesheet" href="../static/css/style.css" />
      <link
        href="https://fonts.googleapis.com/css?family=Poppins:400,500,600"
        rel="stylesheet"
      />
      <title>{title}</title>
      <script type="text/javascript" src="../static/js/jquery.min.js" />
      <script
        type="text/javascript"
        src="../static/vendor/bootstrap/js/bootstrap.min.js"
      />
      <script type="text/javascript" src="../static/js/popper.min.js" />
    </Head>
    <header>
      <div className="navbar navbar-dark bg-dark shadow-sm">
        <div className="container d-flex justify-content-between">
          <Link href="/">
            <a href="/" className="navbar-brand d-flex align-items-center">
              <strong>{title}</strong>
            </a>
          </Link>
        </div>
      </div>
    </header>
  </div>
);

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
