import React, { useState, useEffect } from 'react';

// Sync "props" to 'state' using React hooks : useState() & useEffect

const NetflixOriginals = (props) => {

  const [netflixOriginals, setNetflixOriginals] = useState([]);

  useEffect(() => {
        setNetflixOriginals(props.netflixOriginals);
    }, [props])


  return (
    <div>
          {
           netflixOriginals.map( (movie) => (
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
       
       ))
    }
     
    </div>
  );
};

export default NetflixOriginals;