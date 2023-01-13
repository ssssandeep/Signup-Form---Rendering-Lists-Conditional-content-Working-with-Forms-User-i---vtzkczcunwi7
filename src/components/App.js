import React, {Component, useState} from "react";
import '../styles/App.css';

const App = (event) => {
  const [error, setError] = useState([]);
  const validateForm = () => {
    event.preventDefault()
    const formData = new FormData(event.target)
    for(let [key,value] of formData.entries()){
      console.log(key+" : "+value);
    }
  }
  return (
    <div id="main">
      <h1>Sign Up</h1>
      <form onSubmit={validateForm}>
        <label htmlFor="name">Name </label>
        <input type="text" data-testid = 'name' placeholder="Name"/><br/><br/>

        <label htmlFor="email">Email</label>
        <input type="email" placeholder="Email" /><br/><br/>

        <label htmlFor="gender">Gender</label>
        <select data-testid = 'gender' >
          <option>male</option>
          <option>female</option>
          <option>other</option>
        </select><br/><br/>

        <label htmlFor="phone">Phone Number</label>
        <input type='number' placeholder="Phone Number"/><br/><br/>

        <input type="password" data-testid = 'password' placeholder="Password"/><br /><br />

        <input type="submit" data-testid = 'submit'/>
      </form>
      
    </div>
  )
}


export default App;
