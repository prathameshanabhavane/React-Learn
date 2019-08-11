import React, { Component } from 'react';
import Like from './common/like';
import Pagination from './common/pagination';
import { getMovies } from '../services/fakeMovieService.js';
import { paginate } from '../utils/pajinate';


class Movies extends Component {
    state = { 
        movies : getMovies(),
        currentPage : 1,
        pageSize : 4
     }

    handleDelete = (movie) => {
         console.log(movie);
         const movies = this.state.movies.filter( m => m._id !== movie._id);
        //  this.setState({movies : movies})
         this.setState({movies})
    }

    handleLike = (movie) => {
      const movies = [...this.state.movies];
      const index = movies.indexOf(movie);
      movies[index] = {...movies[index]}
      movies[index].liked = !movies[index].liked;
      this.setState({movies});
      // console.log('Like click', movie);
    }

    handlePageChange = page => {
      // console.log('Pageination');
      // console.log(page);
      this.setState({ currentPage : page });
    }


    render() { 
        const  { length : count } = this.state.movies;
        const { pageSize, currentPage, movies: allMoveis } = this.state;
        
        if ( count === 0 ) 
           return <p className="pt-3"> No movies in database. </p>;

        const movies = paginate(allMoveis, currentPage, pageSize);

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
              <th scope="col">Like</th>
              <th scope="col">Event</th>
            </tr>
          </thead>
          <tbody>
          { movies.map( movie => (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td><Like liked={movie.liked} onClick={() => this.handleLike(movie)} /></td>
              <td><button type="button" onClick={() => this.handleDelete(movie)} className="btn btn-danger">Delete</button></td>
            </tr>
          ))}
          </tbody>
        </table>
        <Pagination 
          itemsCount="abc" 
          pageSize={pageSize} 
          currentPage={currentPage}
          onPageChange={this.handlePageChange} />
        </React.Fragment>
        );
    }
}
 
export default Movies;