import React, {Component, useEffect, useState} from "react";
import '../styles/App.css';

const App = () => {
  const [submitted,setSubmission] = useState(false);
  const [error,setErrorState] = useState([]);
  const [formData, setFormData] = useState({name:"", email:"", gender:"male", phoneNumber:"", password:""})
 
  const formDataChange = (event) => {
    const key = event.target.getAttribute('data-testid');
    //console.log(key,event.target.value)
    const data = {...formData, [key]:event.target.value};
    setFormData(data)
  }
  
  const validateForm = () => {
    const data = Object.values(formData);
    console.log("Checking all fields are present")
    const temp = [];
    const x = data.filter((val) => val!='');
    console.log(x)
    if(x.length==1){
      temp.push('All fields are mandatory')
    }

    console.log("checking name")
    const regExp = /^[A-Za-z0-9]+$/;
    if(!formData.name.match(regExp)){
        temp.push('Name is not alphanumeric')
        console.log('name error set')
        setErrorState(temp)
    }

    console.log("checking email")
    if(!formData.email.includes('@')){
      console.log('email error set')
      temp.push('Email must contain @')
    }

    if(!['male', 'female', 'other'].includes(formData.gender)){
      temp.push('Please identify as male, female or others')
    }

    if(!Number.isInteger(formData.phoneNumber)){
      temp.push('Phone Number must contain only numbers')
    }

    if(formData.password.length<6){
      temp.push('Password must contain atleast 6 letters')
    }
    setErrorState(temp)
    return true;

  }
  const submitHandle = (event) => {
    event.preventDefault();
    console.log(formData)
    validateForm()
    setSubmission(true)
    
  }
  console.log((submitted && error.length==0 ))
  console.log((submitted && error.length>0 ));
  return (
    <div id="main">
      <h1>Sign Up</h1>
      <form onSubmit={submitHandle}>
        <input type="text" data-testid = 'name' value={formData.name} onChange={formDataChange} placeholder="Name"/><br/><br/>

        <input type="text" data-testid = 'email' value={formData.email} onChange={formDataChange} placeholder="Email" /><br/><br/>

        <select data-testid = 'gender' value={formData.gender} onChange={formDataChange} >
          <option>male</option>
          <option>female</option>
          <option>other</option>
        </select><br/><br/>

        <input type='text' data-testid="phoneNumber" value={formData.phoneNumber} onChange={formDataChange} placeholder="Phone Number"/><br/><br/>

        <input type="password" data-testid = 'password' value={formData.password} onChange={formDataChange} placeholder="Password"/><br /><br />

        <input type="submit" data-testid = 'submit'/>
      </form>
      {(submitted && error.length==0 ) && "Hello "+formData.email.split("@")[0]}
      {(submitted && error.length > 0) && error.map((e,i) => {
        return <li key={i}>{e}</li>
      })}
    </div>
  )
}


export default App;
