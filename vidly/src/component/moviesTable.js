import React, { Component } from 'react';
import Like from './common/like';
import TableHeader from './common/tableHeader';

class MoviesTable extends Component {
    
    columns = [
        { path : 'title', label: 'Ttile' },
        { path : 'genre.name', label: 'Genre' },
        { path : 'numberInStock', label: 'Stock' },
        { path : 'dailyRentalRate', label: 'Rate' },
        { key : 'like', label: 'Like' },
        { key : 'delete', label: 'Delete' },
    ];

    

    render() { 
        const { movies, onDelete, onLike, onSort, sortColumn } = this.props;
        return ( 
            <table className="table">
                <TableHeader 
                    columns={this.columns} 
                    sortColumn={sortColumn} 
                    onSort={onSort} 
                />
                <tbody>
                    { movies.map( movie => (
                        <tr key={movie._id}>
                            <td>{movie.title}</td>
                            <td>{movie.genre.name}</td>
                            <td>{movie.numberInStock}</td>
                            <td>{movie.dailyRentalRate}</td>
                            <td><Like liked={movie.liked} onClick={() => onLike(movie)} /></td>
                            <td><button type="button" onClick={() => onDelete(movie)} className="btn btn-danger">Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
         );
    }
}

 
export default MoviesTable;