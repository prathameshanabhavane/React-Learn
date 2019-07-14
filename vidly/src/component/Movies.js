import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService.js';


class Movies extends Component {
    state = { 
        movies : getMovies(),
     }

    handleDelete = (movie) => {
         console.log(movie);
         const movies = this.state.movies.filter( m => m._id !== movie._id);
        //  this.setState({movies : movies})
         this.setState({movies})
    }


    render() { 
        const  { length : count } = this.state.movies;
        if ( count === 0 ) 
           return <p className="pt-3"> No movies in database. </p>;
        return (  
        <React.Fragment>
        <p className="pt-3">Showing {count} movies in database.  </p>
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
        { this.state.movies.map( movie => (
          <tr key={movie._id}>
            <td>{movie.title}</td>
            <td>{movie.genre.name}</td>
            <td>{movie.numberInStock}</td>
            <td>{movie.dailyRentalRate}</td>
            <td><button type="button" onClick={() => this.handleDelete(movie)} className="btn btn-danger">Delete</button></td>
          </tr>
        ))}
        </tbody>
        </table>
        </React.Fragment>
        );
    }
}
 
export default Movies;