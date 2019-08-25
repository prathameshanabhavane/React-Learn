import React, { Component } from 'react';
import Like from './common/like';
import TableHeader from './common/tableHeader';
import TableBody from './common/tableBody';

class MoviesTable extends Component {
    
    columns = [
        { path : 'title', label: 'Ttile' },
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
            <table className="table">
                <TableHeader 
                    columns={this.columns} 
                    sortColumn={sortColumn} 
                    onSort={onSort} 
                />
                <TableBody data={movies} columns={this.columns}/>
            </table>
         );
    }
}

 
export default MoviesTable;