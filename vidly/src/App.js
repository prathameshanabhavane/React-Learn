import React from 'react';
import Movies from './component/Movies';
import { Route, Redirect, Switch } from 'react-router-dom';
import Customer from './component/customers';
import Rentals from './component/rentals';
import NotFound from './component/notFound';
import NavBar from './component/NavBar';
import MovieForm from './component/movieForm';
import Login from './component/login';
import Register from './component/register';
import AddMovies from './component/addMovie';
import './App.css';




function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <Switch>
          <Route path="/movies/new" component={AddMovies}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/movies/:id" component={MovieForm}></Route>
          <Route path="/movies" component={Movies}></Route>
          <Route path="/customer" component={Customer}></Route>
          <Route path="/rentals" component={Rentals}></Route>
          <Route path="/not-found" component={NotFound}></Route>
          <Redirect from="/" exact to="/movies"></Redirect>
          <Redirect to="/not-found"></Redirect>
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
