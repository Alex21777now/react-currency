import React, { Component } from 'react'

export default class Blog extends Component {
  render() {
      return (
        <div>
          <div>
          <p></p>
                            <strong>CHOOSE YOUR FAVORITE MOVIES</strong>
                            <p>&nbsp;</p>
              Blog
          </div>
          <div>
              <img src={require("../images/dev4.jpg")}
                   height="541"
                   width="866"
                   alt="devochka4"
                   style={{ marginBottom: '20px' }}
               />
          </div>
        </div>
      )
   }
}
