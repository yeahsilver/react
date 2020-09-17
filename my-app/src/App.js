import React, {Component} from 'react';
import './App.css';
import Movie from './Movie'

class App extends Component{
  // Render: componentWillMount() -> render() -> componentDidMount()
  // Update: componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()
  
  // 컴포넌트 업로드
  state = {
    movies: [
      {
        id: 1,
        title: "Matrix",
        poster: "https://ww.namu.la/s/97ed6d14776f0c6ff206f64ff447cc8b932f6c43eadd755a54a72d1ada738ba41abcab4e7c823efa25f244894fa8ca2ee44ba1b21731a1b90d181d5ad74432acb38478c22e4018986745a33415ac65839c4e93668aed70b546af9e8df77e6f4453157ba7d35165d81eda10c8e42a37ce"
      },
      {
        id: 2,
        title: "Full Metal Jacket",
        poster:"https://upload.wikimedia.org/wikipedia/en/9/99/Full_Metal_Jacket_poster.jpg"
      },
      {
        id: 3,
        title: "Old Boy",
        poster: "https://upload.wikimedia.org/wikipedia/ko/4/48/Old_Boy.jpg"
      },
      {
        id: 4,
        title: "Star Wars",
        poster: "https://lumiere-a.akamaihd.net/v1/images/avco_payoff_1-sht_v7_lg_32e68793.jpeg?region=0%2C0%2C1620%2C2400&width=960" 
      }
    ]
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        movies: [
          ...this.state.movies,{ // 리스트에 새로운 정보 추가! 없으면 movies의 배열이 아래의 내용으로 대체됨.
            id: 5,
            title: "Trainspotting",
            poster: "https://upload.wikimedia.org/wikipedia/en/7/71/Trainspotting_ver2.jpg"
          }
        ]
      })
    }, 1000)
  }
  render(){
    return (
      <div className="App">
        {this.state.movies.map( ( movie, index ) => {
        return <Movie title={movie.title} poster={movie.poster} key={index}/>
        })}
      </div>
    );
  }
}

export default App;
