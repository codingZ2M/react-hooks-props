import React, { useState } from 'react';
import './App.css';
import ActionMovie from './movies/ActionMovie';
import NetflixOriginals from './movies/NetflixOriginals';
import Trending from './movies/Trending';

// Passing Data Between a Parent and Child in React
const App = () => {
  
    const [actionMovies, setActionMovies] = useState([]);
    const [netflixOriginals, setNetflixOriginals] = useState([]);
    const [trendingMovies, setTrendingMovies] = useState([])
  
    const getActionMovies = () => {
  
      setActionMovies( 
         [...actionMovies,
            {
              original_title: "Infinite",
              poster_path: "https://image.tmdb.org/t/p/original/niw2AKHz6XmwiRMLWaoyAOAti0G.jpg",
              release_date: "2021-09-08",
              backdrop_path: "https://image.tmdb.org/t/p/original/wjQXZTlFM3PVEUmKf1sUajjygqT.jpg",
              rating: 8.7,
              type: "Action"
            },
            {
              original_title: "F9",
              poster_path: "https://image.tmdb.org/t/p/original/bOFaAXmWWXC3Rbv4u4uM9ZSzRXP.jpg",
              release_date: "2021-05-19",
              backdrop_path: "https://image.tmdb.org/t/p/original/xXHZeb1yhJvnSHPzZDqee0zfMb6.jpg",
              rating: 7.8,
              type: "Action"
            },
         ]
      );
   }
  
  
   const getNetflixOriginals = () => {
  
    setNetflixOriginals( 
       [...netflixOriginals,
        {
         original_title: "Taskmaster NZ",
          poster_path: "https://image.tmdb.org/t/p/original/7pui9iCoLpzd7WH3hBDNlJkRtRP.jpg",
          release_date: "2020-10-21",
          backdrop_path: "https://image.tmdb.org/t/p/original/ysmxmX2512QrqkCEbqUzzJEdZyO.jpg",
          rating: 9,
          type: "Netflix Originals"
          },
          
          
          {
          original_title: "Wellington Paranormal",
          poster_path: "https://image.tmdb.org/t/p/original/eaGpAP4bKMjVlMIoGqKzMRJ2OIG.jpg",
          release_date: "2018-07-11",
          backdrop_path: "https://image.tmdb.org/t/p/original/yj8lWif4xcQCMIwPqEhqroso9jv.jpg",
          rating: 6.8,
          type: "Netflix Originals"
          },
       ]
    );
  }
  


  const getTrendingMovies = () => {
  
    setTrendingMovies( 
       [...trendingMovies,
          {
            original_title: "Infinite",
            poster_path: "https://image.tmdb.org/t/p/original/niw2AKHz6XmwiRMLWaoyAOAti0G.jpg",
            release_date: "2021-09-08",
            backdrop_path: "https://image.tmdb.org/t/p/original/wjQXZTlFM3PVEUmKf1sUajjygqT.jpg",
            rating: 8.7,
            type: "Action"
          },
          {
            original_title: "F9",
            poster_path: "https://image.tmdb.org/t/p/original/bOFaAXmWWXC3Rbv4u4uM9ZSzRXP.jpg",
            release_date: "2021-05-19",
            backdrop_path: "https://image.tmdb.org/t/p/original/xXHZeb1yhJvnSHPzZDqee0zfMb6.jpg",
            rating: 7.8,
            type: "Action"
          },
       ]
    );
 }


    return (
      <div className="App">
        <ActionMovie  actionMovies = { actionMovies} />
        <button onClick={getActionMovies}>Action Movies</button>
      <hr/>
        
        <NetflixOriginals  netflixOriginals = { netflixOriginals} />
        <button onClick={getNetflixOriginals}>Netflix Originals</button>
        <hr/>

        <Trending  trendingMovies ={trendingMovies} />
        <button onClick={getTrendingMovies}> Trending Movies</button>
        <hr/>

      </div>
    );
  }  ;
  
  
  export default App;
  