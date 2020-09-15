import React, {Component} from 'react';
import './Movie.css';

class Movie extends Component{
    render(){
        return (
            <div>
                <MoviePoster />
                <h1>Hello this is a movie</h1>
            </div>
        )
    }
}

class MoviePoster extends Component{
    render(){
        return (
            <img src="https://upload.wikimedia.org/wikipedia/en/6/63/MockingjayPart1Poster3.jpg"/>
        )
    }
}
export default Movie