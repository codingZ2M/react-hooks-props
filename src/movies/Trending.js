import React, {useEffect, useState} from 'react'

const Trending = (props) => {

    const [trendingMovies, setTrendingMovies] = useState([]);

    useEffect(  () => {
          setTrendingMovies(props.trendingMovies);
      }  , [props] )
  
  
    return (
      <div>
            {
             trendingMovies.map( 
                 (movie) => (
              <p>
                <strong>original Title:  </strong>
                {movie.original_title} 
                <br/>
                <strong>Poster Path:  </strong>
                {movie.poster_path} 
                <br/>
                <strong>Release Date:  </strong>
                {movie.release_date}
                <br/>
                <strong>Backdrop Path:  </strong>
                {movie.backdrop_path}
                <br/>
                <strong>Rating:  </strong>
                {movie.rating}
                <br/>
                <strong>Type:  </strong>
                {movie.type}
                <hr/>
         </p>
         
           )
         )
      }
       
      </div>
    );
  };
   export default Trending;
