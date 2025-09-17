import React, { Component } from "react";
import { useCallback } from 'react';
import { useState } from "react";
import PropTypes from 'prop-types'
import {
  Card,
  Modal
} from "react-bootstrap";
import './HeartButton.css';

import {
  Navbar,
  Nav,
  FormControl,
  Container,
  Button
} from "react-bootstrap";


               const movieList = [
                {
                  id: 1,
                  title: 'Movie 1',
                  description: 'This is the description of Movie 1.',
                },
                {
                  id: 2,
                  title: 'Movie 2',
                  description: 'This is the description of Movie 2.',
                },
                {
                  id: 3,
                  title: 'Movie 3',
                  description: 'This is the description of Movie 3.',
                },
              ];

               function RandArray(array){
                   var rand = Math.random()*array.length | 0;
                   var rValue = array[rand];
                   return rValue;
               }
               var myArray = ['secondary', 'success', 'warning', 'info', 'light', 'primary', 'danger'];
              
               const generalMovieList = [
                {
                  id: 1,
                  title: 'Movie 1',
                  description: 'This is the description of Movie 1.',
                },
                {
                  id: 2,
                  title: 'Movie 2',
                  description: 'This is the description of Movie 2.',
                },
                {
                  id: 3,
                  title: 'Movie 3',
                  description: 'This is the description of Movie 3.',
                },
              ];  
              


 function KursVse(props) {




const [search, setSearch] = useState('');

const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };




  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleCardClick = (dat1) => {
    setSelectedMovie(dat1);
  };

  const handleClose = () => {
    setSelectedMovie(null);
  };

  console.log(selectedMovie);
  




  const [movies, setMovies] = useState(generalMovieList);
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  const handleAddToFavorite = (dat1) => {
    if (!favoriteMovies.some((favMovie) => favMovie.id === dat1.id)) {
      setFavoriteMovies([...favoriteMovies, dat1]);
    }
  };

  const handleRemoveFromFavorite = (dat1) => {
    const updatedFavorites = favoriteMovies.filter((favMovie) => favMovie.id !== dat1.id);
    setFavoriteMovies(updatedFavorites);
  };


return (
  <div>
  
  

  <p>{ props.error }</p>
  { props.id1 &&             
    <div>
        <p>{<div><p>&nbsp;&nbsp;&nbsp;</p></div>}</p>
        <div> 
                <FormControl style={{
      width: "95%", position: "relative",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)"}}
                  type="text"
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder='Search Articles about Movies'
                  className="mr-sm-2"
                />&emsp;
                <p></p>
                <Button variant="outline-info mt-1">Search</Button>

      </div>
        <p>{        
             
             props.data1.results.filter(dat1 => {
              return search.toLowerCase() === ''
                ? dat1
                : dat1.title.toLowerCase().includes(search);
            })
             .map(dat1 => (

              

                <Card

                
                   border={RandArray(myArray)}
                   bg={'black'}
                

                   key={dat1.id} 
                   text={'gray'}
                   
                   style={{ width: '18rem', display: 'inline-block', margin: '15px', borderWidth: '3px'}}
                   className="mb-3"
                
                  

                 >

<Card.Header style={{ color: 'white'}}>The Movie</Card.Header>
{isHovered ? (
        <Card.Body>
          <Card.Title>"{dat1.title}"</Card.Title>
          
          <Card.Text><p>OVERVIEW: <strong>{dat1.overview}</strong></p></Card.Text>
          <img
src={`https://image.tmdb.org/t/p/w300${dat1.poster_path}`}
alt="Movie Poster"
style={{
margin: '2px 2px 2px 2px',
width: '100%',    // Set the width of the image to 100% of the container
height: '100%',   // Set the height of the image to 100% of the container
objectFit: 'cover' // Use object-fit to cover the container
}}                onClick={() => handleCardClick(dat1)}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
/>
        </Card.Body>
      ) : (
<Card.Body>


<div>

<img
src={`https://image.tmdb.org/t/p/w300${dat1.poster_path}`}
alt="Movie Poster"
style={{
margin: '2px 2px 2px 2px',
width: '100%',    // Set the width of the image to 100% of the container
height: '100%',   // Set the height of the image to 100% of the container
objectFit: 'cover' // Use object-fit to cover the container
}}                onClick={() => handleCardClick(dat1)}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
/>

</div>



   <Card.Text>
   <div style={{ display: 'inline-block',
                 
                 width: '100%', // Adjust the width as needed
                 padding: '10px', // Adjust the padding as needed
                 border: '1px #ccc',
                 margin: '1px',
                 backgroundColor: '#e3c684' }}>                     
     <p>{dat1.title}  <strong>({dat1.release_date.substring(0, 4)})</strong>
       <div style={{ color: '#e3c684',
                     display: 'inline-block',
                     width: '30%', // Adjust the width as needed
                     padding: '10px', // Adjust the padding as needed
                     /*border: '1px solid #ccc',*/
                     margin: '5px',
                     backgroundColor: '#444444',
                     borderRadius: '10px',
                     marginLeft: '25px'  }}>
                     <strong>{dat1.vote_average}</strong>
                     
       </div>
       <button className="heart-button" onClick={() => handleAddToFavorite(dat1)}>
                         <span></span>to Favorite
       </button>
      
     </p>
  
   </div>

   </Card.Text>

 </Card.Body>
      )}
   </Card>
                  

              ))
        }</p>

    </div>
  }


<div className="App">
  

      <Modal show={selectedMovie !== null} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Movie Details</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ background: '#023607', color: 'white' }} >
          {selectedMovie && (
            <>
              <h2>{selectedMovie.title}</h2>
              <img
     src={`https://image.tmdb.org/t/p/w500${selectedMovie.backdrop_path}`}
     alt="Movie Background"
     style={{
      margin: '2px 2px 2px 2px',
      width: '99%',    // Set the width of the image to 100% of the container
      height: '100%',   // Set the height of the image to 100% of the container
      objectFit: 'cover' // Use object-fit to cover the container
             }}
        />
              
              <div style={{ margin: '1px 10px 5px 10px'}}>{selectedMovie.overview}</div><br/>
              <p><strong>Original Release:        </strong>{selectedMovie.release_date}</p>
              <p><strong>Vote Average:        </strong>{selectedMovie.vote_average}</p>
              <p><strong>Vote count:        </strong>{selectedMovie.vote_count}</p>
              <p><strong>Popularity:        </strong>{selectedMovie.popularity}</p>
              <p><strong>Original Language:        </strong>{selectedMovie.original_language}</p>

            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>


    <div className="App">
      

      <h2>Favorite Movies List</h2>
      <div className="card-container">
        {favoriteMovies.map((movie) => (
          <Card key={movie.id} style={{ width: '18rem' , color: 'black'}}>
            <Card.Body>
            <img
src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
alt="Movie Poster"
style={{
margin: '2px 2px 2px 2px',
width: '100%',    // Set the width of the image to 100% of the container
height: '100%',   // Set the height of the image to 100% of the container
objectFit: 'cover' // Use object-fit to cover the container
}}                
/>
              <Card.Title>{movie.title}</Card.Title>
              <Card.Text>{movie.description}</Card.Text>
              <Button onClick={() => handleRemoveFromFavorite(movie)}>Remove from Favorites</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>

  </div>
);
}

export default KursVse;
