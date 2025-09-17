import React, { Component } from "react";
import {
  Card

} from "react-bootstrap";
import { Button } from '@material-ui/core';
import { useState } from "react";
import Form from "./Form.js";
import KursVse from "./KursVse";
import "../App.css";




export default class FirstComponent_2 extends Component {



state = {
  adult: undefined,
  backdrop_path: undefined,
  genre_ids: undefined,
  id: undefined,
  original_language: undefined,
  original_title: undefined,
  overview: undefined,
  popularity: undefined,
  poster_path: undefined,
  release_date: undefined,
  title: undefined,
  video: undefined,
  vote_average: undefined,
  vote_count: undefined
  
  
}

async componentDidMount() {


const api_url1 = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=4e5548c37fdfda0975c70c0688c24955`);
const data1 = await api_url1.json();
console.log(data1);
const randomInt = Math.floor(Math.random() * 19);

this.setState({
  adult1: data1.results[randomInt].adult,
  backdrop_path1: data1.results[randomInt].backdrop_path,
  genre_ids1: data1.results[randomInt].genre_ids,
  id1: data1.results[randomInt].id,
  original_language1: data1.results[randomInt].original_language,
  original_title1: data1.results[randomInt].original_title,
  overview1: data1.results[randomInt].overview,
  popularity1: data1.results[randomInt].popularity,
  poster_path1: data1.results[randomInt].poster_path,
  release_date1: data1.results[randomInt].release_date,
  title1: data1.results[randomInt].title,
  video1: data1.results[randomInt].video,
  vote_average1: data1.results[randomInt].vote_average,
  vote_count1: data1.results[randomInt].vote_count,
  data1: data1,
  error: ""
});
console.log(this.state);  

}

  render() {
    
  
    return (
    
 
    <div className="flex-child-magenta">     
    
          

      <Form kursMethod1={this.gettingKurs1}

          

         adult1={this.state.adult1}
         backdrop_path1={this.state.backdrop_path1}
         genre_ids1={this.state.genre_ids1}
         id1={this.state.id1}
         original_language1={this.state.original_language1}
         original_title1={this.state.original_title1}
         overview1={this.state.overview1}
         popularity1={this.state.popularity1}
         poster_path1={this.state.poster_path1}
         release_date1={this.state.release_date1}
         title1={this.state.title1}
         video1={this.state.video1}
         vote_average1={this.state.vote_average1}
         vote_count1={this.state.vote_count1}
         error={this.state.error}
         data1={this.state.data1}

       />

      <>


{
  <KursVse
  

         adult1={this.state.adult1}
         backdrop_path1={this.state.backdrop_path1}
         genre_ids1={this.state.genre_ids1}
         id1={this.state.id1}
         original_language1={this.state.original_language1}
         original_title1={this.state.original_title1}
         overview1={this.state.overview1}
         popularity1={this.state.popularity1}
         poster_path1={this.state.poster_path1}
         release_date1={this.state.release_date1}
         title1={this.state.title1}
         video1={this.state.video1}
         vote_average1={this.state.vote_average1}
         vote_count1={this.state.vote_count1}
         error={this.state.error}
         data1={this.state.data1} 

   />
 }
     </>

       
     </div>

    
    );
            }
          }