import React from "react";
import App from "next/app";
import TagManager from "react-gtm-module";

import "../style/fonts.scss";
import "../style/style.scss";
import "../style/print.scss";

class MyApp extends App<{ apolloClient: any }> {
  componentDidMount() {
    TagManager.initialize({ gtmId: "GTM-TS4XLK" });
  }

  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

export default MyApp;
