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
                <TableBody data={movies} />
            </table>
         );
    }
}

 
export default MoviesTable;