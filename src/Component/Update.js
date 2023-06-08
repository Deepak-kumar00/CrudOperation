import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Update() {
  const [id, setId]=useState(0);
  const [name, setName]=useState("");
  const [email, setEmail]=useState("");

  const history=useNavigate();

  const handleUpdate=(e)=>{
    e.preventDefault();
    axios.put(`https://6480cefbf061e6ec4d49e690.mockapi.io/crud-practice/${id}`,{
      name: name,
      email: email,
    })
    .then(()=>{
      history("/Read");
    });
  }

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));

  }, []);
  return (
    <div className="container my-3">
        <h2>Update</h2>
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
            value={name}
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
          value={email}
          />
        </div>
        <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        <button onClick={handleUpdate} type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </div>
  )
}
