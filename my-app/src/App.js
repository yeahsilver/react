import React, {Component} from 'react';
import './App.css';
import Movie from './Movie'

class App extends Component{
  // Render: componentWillMount() -> render() -> componentDidMount()
  // Update: componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()
  
  // 컴포넌트 업로드
  state = {}

  componentDidMount(){
    this._getMovies();
  }

  _renderMovies = () => {
    const movies = this.state.movies.map( ( movie ) => {
      // index 대신 movie.id를 사용하면 속도가 향상됨.
      return <Movie 
      title={movie.title_english} 
      poster={movie.medium_cover_image} 
      key={movie.id} 
      genres={movie.genres}
      synopsis={movie.synopsis}
      />
    })
    return movies
  }

  _getMovies = async () => {
    // await: callApi를 끝나는 것을 기다림.
    const movies = await this._callApi()
    this.setState({
      movies
    })
  }

  _callApi = () => {
    return fetch('https://yts.mx/api/v2/list_movies.json?sort_by=rating')
    .then(response => response.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))
  }

  render(){
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies(): 'Loading'}
      </div>
    );
  }
}

export default App;
