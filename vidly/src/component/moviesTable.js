import React, { Component } from 'react';
import Table from './common/table';
import Like from './common/like';
import { Link } from 'react-router-dom';


class MoviesTable extends Component {
    
    columns = [
        { path : 'title', label: 'Ttile', content: movie =>  <Link to={`/movies/${movie._id}`}> {movie.title} </Link> },
        { path : 'genre.name', label: 'Genre' },
        { path : 'numberInStock', label: 'Stock' },
        { path : 'dailyRentalRate', label: 'Rate' },
        { key : 'like', 
            label: 'Like', 
            content : movie => <Like liked={movie.liked} onClick={() => this.props.onLike(movie)} /> },
        { key : 'delete', 
            label: 'Delete', 
            content: movie => <button type="button" onClick={() => this.props.onDelete(movie)} className="btn btn-danger">Delete</button> },
    ];

    render() { 
        const { movies, onSort, sortColumn } = this.props;
        return ( 
            <Table columns={this.columns} data={movies} sortColumn={sortColumn} onSort={onSort} />
         );
    }
}

 
export default MoviesTable;