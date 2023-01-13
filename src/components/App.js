import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {
  const [emailValue, setEmail] = useState('');
  const [submitted,setSubmission] = useState(false);
  const emailChangeHandler = (event) => {
    setEmail(event.target.value)
  }
  const validateForm = (event) => {
    event.preventDefault();
    //console.log("onSubmission"+event.target)
    // const formData = new FormData(event.target)
    // console.log(formData)
    setSubmission(true)
  }
  return (
    <div id="main">
      <h1>Sign Up</h1>
      <form onSubmit={validateForm}>
        <label htmlFor="name">Name </label>
        <input type="text" data-testid = 'name' placeholder="Name"/><br/><br/>

        <label htmlFor="email">Email</label>
        <input type="text" data-testid = 'email' value={emailValue} onChange={emailChangeHandler} placeholder="Email" /><br/><br/>

        <label htmlFor="gender">Gender</label>
        <select data-testid = 'gender' >
          <option>male</option>
          <option>female</option>
          <option>other</option>
        </select><br/><br/>

        <label htmlFor="phone">Phone Number</label>
        <input type='number' data-testid="phoneNumber" placeholder="Phone Number"/><br/><br/>

        <input type="password" data-testid = 'password' minLength={"6"} placeholder="Password"/><br /><br />

        <input type="submit" data-testid = 'submit'/>
      </form>
      {submitted ? "Hello "+emailValue.split("@")[0]: ''}
    </div>
  )
}


export default App;
