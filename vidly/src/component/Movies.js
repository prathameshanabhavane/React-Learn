import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService.js';


class Movies extends Component {
    state = { 
        Movies : getMovies(),
     }
    render() { 
        return (  
        <table className="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Genre</th>
            <th scope="col">Stock</th>
            <th scope="col">Rate</th>
            <th scope="col">Event</th>
          </tr>
        </thead>
        <tbody>
        { this.state.Movies.map( movie => (
          <tr>
            <td>{movie.title}</td>
            <td>{movie.genre.name}</td>
            <td>{movie.numberInStock}</td>
            <td>{movie.dailyRentalRate}</td>
            <td><button type="button" class="btn btn-danger">Delete</button></td>
          </tr>
        ))}
        </tbody>
        </table>
        );
    }
}
 
export default Movies;