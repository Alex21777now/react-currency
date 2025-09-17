import React, { Component } from 'react'
import SecondComponent_2 from '../Components/SecondComponent_2';

export default class About extends Component {
  render() {
      return (
        <div>
          <div>
          <p></p>
                            <strong>RECEIVE Articles Automatically</strong>
                            <p>&nbsp;</p>
              Automatic
              
          </div>
          <div>
              <img src={require("../images/dev2.jpg")}
                   height="541"
                   width="721"
                   alt="devochka2"
                   style={{ marginBottom: '20px' }}
               />
          </div>
          222222222222222222222222222222222222222222222222222222222222
                      <div> <SecondComponent_2 /> </div> 
        </div>
      )
   }
}
