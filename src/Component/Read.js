import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//import Update from "./Update";

export default function Read() {
  const url = "https://6480cefbf061e6ec4d49e690.mockapi.io/crud-practice";
  const [data, setData] = useState([]);

  const setToLocalStorage = (id, name, email) =>{
    localStorage.setItem("id",id)
    localStorage.setItem("name",name)
    localStorage.setItem("email",email)
  }

  function getData() {
    axios.get(url).then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }

  function handleDelete(id){
    axios.delete(`https://6480cefbf061e6ec4d49e690.mockapi.io/crud-practice/${id}`).then(()=>{
        getData();
    })
  }

  useEffect(() => {
    getData();
  }, []);

  
  return (

    <div className="container my-3">
      <div className="d-flex justify-content-between m2">
        <h2>Read Operation</h2>
      <Link to="/"><button className="btn btn-success mx-3">
        AddData
      </button></Link>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        {data.map((eachData) => {
          return (
            <>
              <tbody>
                <tr>
                  <th scope="row">{ eachData.id }</th>
                  <td>{ eachData.name }</td>
                  <td>{ eachData.email }</td>
                  <td>
                    <Link to="/Update"><button onClick={()=>setToLocalStorage(eachData.id, eachData.name, eachData.email)} className="btn btn-success">Edit</button></Link>
                  </td>
                  <td>
                    <button className="btn btn-danger" onClick={()=>handleDelete(eachData.id)}>Delete</button>
                  </td>
                </tr>
              </tbody>
            </>
          );
        })}
      </table>
    </div>
  );
}
