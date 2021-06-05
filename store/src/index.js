import React from "react";
import reactDom from "react-dom";
import { renderIntoDocument } from "react-dom/cjs/react-dom-test-utils.production.min";
import './index.css';

export class Login extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">
        <div className="header">Login</div>
        <div className="form">
          <label className="name" htmlFor="username">username</label>
       <div className="form-group"><input type="text" name="username"></input></div>
       <label className="name" htmlFor="password">password</label>
       <div className="form-group"><input type="password" name="password"></input></div>
        </div>
        <br></br>
       <button type="button" className="btn">Login</button>
      </div>
    )
  }
}
reactDom.render(<Login/>,document.getElementById("root"))