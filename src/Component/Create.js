import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Create() {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");

    //const header={ "Access-Control-Allow-Origin":"*"}
    const history=useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("Clicked");
        axios.post(
            'https://6480cefbf061e6ec4d49e690.mockapi.io/crud-practice',
            {name: name, 
            email: email,
            //header,
        })
        .then(()=>{
            history('/Read');
        });
        
    };
  return (
    <div className="container my-3">
        <h2>Create</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e)=>setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Email
          </label>
          <input type="email" 
          className="form-control" 
          id="exampleInputPassword1" 
          onChange={(e)=>setEmail(e.target.value)}
          />
        </div>
        <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        <button onClick={handleSubmit} type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
