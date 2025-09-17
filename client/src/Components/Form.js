import React, { useState } from "react";
import styled from 'styled-components';
import {
  Navbar,
  Nav,
  FormControl,
  Container,
  Button
} from "react-bootstrap";




const Styles = styled.div`
  /*padding: 3rem;*/


.btn-circle {
    top: 183px;
    right: 30px;
    position: fixed;
    z-index: 2000;
    width: 90px;
    height: 90px;
    border-radius: 45px;
    text-align: center;
    padding-left: 0;
    padding-right: 0;
    font-size: 13px;
    white-space: normal; /* восстанавливаем свойству значение по умолчанию */
}
`
/*const data11 = props.data1.map((dat1) => ({dat1}));*/

export default function Form(props) {
// const Form = props => (
 
//const [search, setSearch] = useState('');

function scrollToTop () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth', // Для плавной анимированной прокрутки
  });
};

return (
<div>

    {/*<form>


           <input type="number" name="date" placeholder="Дата напр. 20161215"/>
           <button>Получить курс</button>
    </form>*/}
    {/*<button onClick={props.kursMethod1}>Вывести текущий курс всех валют</button>*/}
    
    {/*<button type="button" class="btn btn-primary">Store --- to DB to BackEND</button>*/}
   {/* <button type="button" class="btn btn-outline-danger ms-1">PULL --- from DB from BackEND</button>*/}
  {/*<button type="button" class="btn btn-outline-success ms-2">Clear localStorage</button>*/}
  <p></p>
  {/*<div> 
                <FormControl
                  type="text"
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder='Search movies'
                  className="mr-sm-2"
                />&emsp;
                <p></p>
                <Button variant="outline-info mt-1">Search</Button>

      <div>
      {props.data1.results.filter(dat1 => {
                return search.toLowerCase() === ''
                  ? dat1
                  : dat1.title.toLowerCase().includes(search);
              })
              .map(dat1 => (
                <div>
                  <p>{dat1.title}</p>
                  <p>{dat1.popularity}</p>
                  <p>{dat1.vote_average}</p>
                  <p>{dat1.original_language}</p>
                </div>
              ))}

      
      
      </div>
               
  </div>*/}   
  <Styles>
    <button type="button" class="btn btn-outline-info btn-circle float-end" onClick={() => scrollToTop()}><i class="fas fa-map">GO UPWARD ^</i></button>
  </Styles>
</div>

// );
// export default Form;
);
            }