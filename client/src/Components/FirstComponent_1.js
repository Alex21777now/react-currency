import React, { Component } from "react";
import {
  Card

} from "react-bootstrap";
//import { Button } from '@material-ui/core';
import { Button } from "react-bootstrap";
import { useState } from "react";
import Form from "./Form.js";
import KursVse from "./KursVse";
import styled from 'styled-components';
import "../App.css";

import { CloseButton } from "react-bootstrap";


import { makeAutoObservable } from "mobx";
import { observer } from "mobx-react-lite";

import { Input } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import { Checkbox } from "@material-ui/core";
import { InputLabel } from "@material-ui/core";


const Styles = styled.div`
  /*padding: 3rem;*/


.btn-circle {
        margin-top: 20px;

    margin-left: 165px;
    
    
    z-index: 2000;
    width: 120px;
    height: 120px;
    border-radius: 60px;
    text-align: center;
    padding-left: 0;
    padding-right: 0;
    font-size: 13px;
    white-space: normal; /* восстанавливаем свойству значение по умолчанию */
}
`



class ArticleStore {
  articles = [];

  constructor() {
    makeAutoObservable(this);
  }

  addArticle(article) {
    if (article.pinned) {
      this.articles.unshift(article);
    } else {
      this.articles.push(article);
    }
  }

  updateArticle(index, updatedArticle) {
    this.articles[index] = updatedArticle;
    this.sortArticles();
  }

  deleteArticle(index) {
    this.articles.splice(index, 1);
  }

  sortArticles() {
    this.articles.sort((a, b) => b.pinned - a.pinned);
  }
}

const store = new ArticleStore();

const ArticleForm = observer(() => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [pinned, setPinned] = useState(true);

  const handleSubmit = () => {
    if (title && author && description) {
      store.addArticle({ title, author, description, image, pinned });
      setTitle("");
      setAuthor("");
      setDescription("");
      setImage(null);
      setPinned(true);
    }
  };

  return (
    //<div className="p-4 bg-orange-700 rounded-lg w-80 flex flex-col space-y-2">
    <div style={{
      width: "450px",
      height: "645px",
      backgroundColor: "#990066", // Eggplant color
      borderRadius: "10px",
      //display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",

      fontWeight: "bold",
      boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.5)",
    }}>
      <p>Put the content here</p>
      <InputLabel>Title</InputLabel>
      <Input value={title} onChange={(e) => setTitle(e.target.value)} />
      <InputLabel>Author</InputLabel>
      <Input value={author} onChange={(e) => setAuthor(e.target.value)} />
      <InputLabel>Article</InputLabel>
      <br></br>
      <TextField multiline style={{width: "400px",
      height: "150px", backgroundColor: "white", padding: "10px", boxSizing: "border-box", overflow: "auto", whiteSpace: "pre-wrap", wordBreak: "break-word" }} value={description} onChange={(e) => setDescription(e.target.value)} />
      <InputLabel>Image</InputLabel>
      <Input type="file" onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))} />
      <InputLabel className="flex items-center space-x-2">
        <Checkbox checked={pinned} onCheckedChange={setPinned} />
        <span>Pinned</span>
        </InputLabel>
        <Styles>
      {/*<Button onClick={handleSubmit} className="rounded-full">Create</Button>*/}
      <button type="button" class="btn btn-success btn-circle float-start" onClick={handleSubmit}>CREATE ^</button>
        </Styles>
    </div>
  );
});


const ArticleList = observer(() => {
  return (
    <div className="space-y-2">
      {store.articles.map((article, index) => (
        <ArticleItem key={index} article={article} index={index} />
      ))}
    </div>
  );
});


const ArticleItem = observer(({ article, index }) => {
  const [editing, setEditing] = useState(false);
  const [editedArticle, setEditedArticle] = useState(article);

  const handleEdit = () => { // UPDATED
    setEditedArticle({ ...article, image: article.image }); // UPDATED: Reset form with article data
    setEditing(true);
  };

  const handleSave = () => {
    store.updateArticle(index, editedArticle);
    setEditing(false);
  };

  return (
    //<Card className="bg-gray-700 p-4 w-96 flex flex-col space-y-2">
    <Card style={{
      width: "450px",
      //height: "790px",
      display: "flex",
      flexDirection: "column",
      backgroundColor: "rgb(65, 32, 32)", // Light green color #62e371
      borderRadius: "20px",
      borderColor: " #62e371",
      borderWidth: "1px",
      //display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      marginBottom: "10px",
      fontWeight: "bold",
      boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.5)",
    }}>
      {editing ? (
        <>
          
          <Input style={{ marginTop: "10px" }} value={editedArticle.title} onChange={(e) => setEditedArticle({ ...editedArticle, title: e.target.value })} />
          <Input value={editedArticle.author} onChange={(e) => setEditedArticle({ ...editedArticle, author: e.target.value })} /><br></br>
          <TextField multiline style={{width: "400px",
      height: "150px", backgroundColor: "white", padding: "10px", boxSizing: "border-box", overflow: "auto", whiteSpace: "pre-wrap", wordBreak: "break-word" }} value={editedArticle.description} onChange={(e) => setEditedArticle({ ...editedArticle, description: e.target.value })} />
          <InputLabel className="flex items-center space-x-2">
            <Checkbox
              checked={editedArticle.pinned}
              onCheckedChange={(checked) => {
                setEditedArticle({ ...editedArticle, pinned: checked });
                store.updateArticle(index, { ...editedArticle, pinned: checked });
              }}
            />
            <span>Pinned</span>
          </InputLabel>
          <Button style={{ marginBottom: "10px" }} onClick={handleSave}>Save</Button>
        </>
      ) : (
        <>
          <CloseButton className="position-absolute top-0 end-0 m-2" onClick={() => store.deleteArticle(index)} />
          {article.image && <img style={{ marginTop: "10px", width: "435px",
      height: "250px", objectFit: "contain" }} src={article.image} alt="Article" className="w-full h-32 object-cover rounded" />}<br></br>
          
          <h3 className="text-lg font-bold">{article.title}</h3>
          <p className="text-sm text-gray-300">by {article.author}</p>
          <p className="text-gray-400" style={{ marginLeft: '10px', marginRight: '10px' }} >{article.description}</p>
          <InputLabel className="flex items-center space-x-2">
            <Checkbox
              checked={editedArticle.pinned}
              onCheckedChange={(checked) => {
                setEditedArticle({ ...editedArticle, pinned: checked });
                store.updateArticle(index, { ...editedArticle, pinned: checked });
              }}
            />
            <span>Pinned</span>
          </InputLabel>
          <Button style={{ display: 'inline-block', marginRight: '3px' }} variant="info mt-1" onClick={handleEdit}>Edit</Button><br></br>
          <Button style={{ display: 'inline-block', marginRight: '3px', marginBottom: "10px" }} variant="info mt-1" onClick={() => store.deleteArticle(index)}>Delete</Button>
        </>
      )}
    </Card>
  );
});


//export default class FirstComponent_1 extends Component {
  export default function FirstComponent_1 () {

    function scrollToTop () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth', // Для плавной анимированной прокрутки
      });
    };
/*

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
*/
//  render() {


    return (

   

          <div className="flex-child magenta">

  <Styles>
    <button type="button" class="btn btn-outline-info btn-circle float-end" style={{ width: 90, height: 90, position: "fixed", top: 183, right: 30 }}  onClick={() => scrollToTop()}><i class="fas fa-map">GO UPWARD ^</i></button>
  </Styles>

  <div style={{ display: 'flex'}}>
  <div className="p-6 flex flex-col items-center space-y-4">
      <ArticleForm />
      <br></br>
      <ArticleList />
  </div>
 
 <div style={{ width: '50%', backgroundColor: 'darkgreen', padding: '20px', margin: '20px'}}>
     <p>Watch CNN</p>
 <iframe
        src="https://www.livenewsmag.com/livecnn/"
        title="Sky News Live"
        frameBorder="0"
        allow="encrypted-media"
       
      ></iframe>
       <br/><br/><br/>
      <p>Watch Fox News</p> 
  <iframe
        src="https://www.livenewsmag.com/fox-news-live-stream/"
        title="Sky News Live"
        frameBorder="0"
        allow="encrypted-media"
       
      ></iframe>
       <br/><br/><br/>
      <p>Watch MSNBC</p>
  <iframe
        src="https://www.livenewsmag.com/msnbc-news-live-stream/"
        title="Sky News Live"
        frameBorder="0"
        allow="encrypted-media"
       
      ></iframe>    
       <br/><br/><br/>
    </div>
    </div>

</div>

    
    );
         //   }
          }
