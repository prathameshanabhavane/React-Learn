import React, { Component } from 'react';
import MoviesTable from './moviesTable';
import ListGroup from './common/listGroup';
import Pagination from './common/pagination';
import { getMovies } from '../services/fakeMovieService.js';
import { paginate } from '../utils/pajinate';
import { getGenres } from '../services/fakeGenreService';
import { Link } from 'react-router-dom';
import _ from 'lodash';

class Movies extends Component {
    state = { 
        movies : getMovies(),
        genres : [],
        currentPage : 1,
        pageSize : 4,
        sortColumn : { path:'title' , order:'asc'}
     }

    componentDidMount() {
      const genres = [ { _id : "", name : "All Genre" }, ...getGenres() ]
      this.setState({ 
        movie : getMovies(),
        genres
      });
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

    handeleGenreSelect = genre => {
      // console.log(genre);
      this.setState( { selectedGenre : genre, currentPage : 1 } )
    }

    handleSort = sortColumn => {
      this.setState( { sortColumn } )
    }

    getPageData = () => {

      const { pageSize, sortColumn, currentPage, selectedGenre, movies: allMoveis } = this.state;

      const filtered = selectedGenre && selectedGenre._id
        ? allMoveis.filter(m => m.genre._id === selectedGenre._id) 
        : allMoveis;

      const sorted = _.orderBy(filtered, [sortColumn.path],[sortColumn.order])

      const movies = paginate(sorted, currentPage, pageSize);

      return { totalCount: filtered.length, data: movies };
    }

    render() { 
        const  { length : count } = this.state.movies;
        const { pageSize, sortColumn, currentPage } = this.state;

        if ( count === 0 ) 
           return <p className="pt-3"> No movies in database. </p>;
           
        const { totalCount , data: movies } = this.getPageData();

        return (  
        <div className="row">
          <div className="col-12 col-md-3">
              <ListGroup 
                items={this.state.genres} 
                selectedItem={this.state.selectedGenre}
                onItemsSelect={this.handeleGenreSelect} />
          </div>
          <div className="col-12 col-md-9">
            <Link to="/movies/new" className="btn btn-primary" style={{ marginBottom: 20 }}>
              New Movies
            </Link>
            <p className="pt-3">Showing {totalCount} movies in database.  </p>
            <MoviesTable 
              movies={movies}
              sortColumn={sortColumn}
              onLike={this.handleLike}
              onSort={this.handleSort}
              onDelete={this.handleDelete} />
            <Pagination 
              itemsCount={totalCount} 
              pageSize={pageSize} 
              currentPage={currentPage}
              onPageChange={this.handlePageChange} />
          </div>
        </div>
        );
    }
}
 
export default Movies;