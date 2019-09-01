import React from 'react';
import './App.css';
import Movies from './component/Movies';
import { Route, Redirect, Switch } from 'react-router-dom';
import Customer from './component/customers';
import Rentals from './component/rentals';
import NotFound from './component/notFound';


function App() {
  return (
    <main className="container">
      <Switch>
        <Route path="/movies" component={Movies}></Route>
        <Route path="/customer" component={Customer}></Route>
        <Route path="/rentals" component={Rentals}></Route>
        <Route path="/not-found" component={NotFound}></Route>
        <Redirect from="/" exact to="/movies"></Redirect>
        <Redirect to="/not-found"></Redirect>
      </Switch>
    </main>
  );
}

export default App;
