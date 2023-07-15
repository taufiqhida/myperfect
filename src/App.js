import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'assets/scss/style.scss';
import LandingPage from 'pages/LandingPage';
import Example from 'pages/Example';
import Checkout from 'pages/Checkout';
import DetailsPage from 'pages/DetailsPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

        <Route exact path="/" component={LandingPage} />
        <Route exact path="/properties/:id" component={DetailsPage}/>
        <Route exact path="/checkout" component={Checkout}/>
        <Route exact path="/example" component={Example}/>
        </Switch>
      </Router>
      <ToastContainer/>
    </div>
  );
}

export default App;
