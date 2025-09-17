import React, { Component } from 'react'

export default class Contacts extends Component {
  render() {
      return (
        <div>
          <div>
          <p></p>
                            <strong>CHOOSE YOUR FAVORITE MOVIES</strong>
                            <p>&nbsp;</p>
              Contacts
          </div>
          <div>
              <img src={require("../images/dev3.jpg")}
                   height="541"
                   width="823"
                   alt="devochka3"
                   style={{ marginBottom: '20px' }}
               />
          </div>
        </div>
      )
   }
}
