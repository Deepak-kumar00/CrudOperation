import React from 'react'

export default function Update() {
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
           // onChange={(e)=>setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Email
          </label>
          <input type="email" 
          className="form-control" 
          id="exampleInputPassword1" 
          //onChange={(e)=>setEmail(e.target.value)}
          />
        </div>
        <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        <button  type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </div>
  )
}
