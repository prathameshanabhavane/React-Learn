import React from 'react';
import Joi from 'joi-browser';
import Form from './common/form';
import { getMovie, saveMovie } from '../services/fakeMovieService.js';
import { getGenres } from '../services/fakeGenreService';

class AddMovies extends Form {
    state = { 
        data : {
			title : '',
            genreId : '',
            numberInStock: '',
            dailyRentalRate : ''
        },
        genres: [],
		errors : {}
    }

    schema = {
        _id: Joi.string(),
		title: Joi.string().required().label('Title'),
        genre: Joi.string().required().label('Genre'),
        numberInStock: Joi.string().min(0).max(100).required().label('Name'),
		dailyRentalRate: Joi.string().min(0).max(100).required().label('Rate'),
    };
    
    componentDidMount() {
        const genres = getGenres();
        this.setState({genres});

        const movieId = this.props.match.params.id;
        if(movieId === "new") return;

        const movie = getMovie(movieId);
        if (!movie) return this.props.history.replace("/not-found");

        this.setState({ data: this.mapToViewModel(movie) });
    }

    mapToViewModel(movie) {
        return {
            _id: movie._id,
            title: movie.title,
            genreId: movie.genre._id,
            numberInStock: movie.numberInStock,
            dailyRentalRate: movie.dailyRentalRate
        };
    }


    doSubmit = () => {
        saveMovie(this.state.data);

        this.props.history.push("/movies");
	};

    render() { 
        return ( 
            <div>
                <div className="row align-item-center">
                    <div className="col-12 col-lg-4 mx-auto">
                        <h1>Register</h1>
                        <form onSubmit={this.handleSubmit}>
                            {this.renderInput('title', 'Title')}
                            {this.renderSelect('genreId', 'Genre', this.state.genres)}
                            {this.renderInput('number_in_stock', 'Number in Stcok', 'number')}
                            {this.renderInput('dailyRentalRate', 'Rate')}
                            {this.renderButton("Save")}
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default AddMovies;