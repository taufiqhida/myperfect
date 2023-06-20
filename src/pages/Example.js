import React, { Component } from 'react';

import Header from 'parts/Header';

export default class Example extends Component {
  render() {
    const breadcumb = [
    { pageTitle: "Home", pageHref: "" },
    { pageTitle: "House Details", pageHref: "" }
  ];
  

    return (
      <Header {...this.props}></Header>
    )
  }
}
