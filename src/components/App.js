import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {
  //const [error, setError] = useState([]);
  const validateForm = (event) => {
    event.preventDefault();
    console.log("onSubmission")
    const formData = new FormData(event.target)
    console.log(formData)
    for(let [key,value] of formData){
      console.log(key+" : "+value);
    }
    console.log("submitted")
  }
  return (
    <div id="main">
      <h1>Sign Up</h1>
      <form onSubmit={validateForm}>
        <label htmlFor="name">Name </label>
        <input type="text" data-testid = 'name' placeholder="Name"/><br/><br/>

        <label htmlFor="email">Email</label>
        <input type="text" data-testid = 'email' placeholder="Email" /><br/><br/>

        <label htmlFor="gender">Gender</label>
        <select data-testid = 'gender' >
          <option>male</option>
          <option>female</option>
          <option>other</option>
        </select><br/><br/>

        <label htmlFor="phone">Phone Number</label>
        <input type='number' data-testid="phoneNumber" placeholder="Phone Number"/><br/><br/>

        <input type="password" data-testid = 'password' placeholder="Password"/><br /><br />

        <input type="submit" data-testid = 'submit'/>
      </form>
      
    </div>
  )
}


export default App;
