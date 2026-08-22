import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const View = () => {
  let [std, setStd] = useState([])


  let {id} = useParams()

  async function getStudent(){
    let res = await axios.get(`https://students-7zab.onrender.com/students/${id}`)
    setStd(res.data)
  }

  useEffect(()=>{
    getStudent()
  }, [])

  


  return (
    <div>
      <h1>Details page of {std.name} </h1>
      <div class="card">
  <div class="card-header">
    {std.name}
  </div>
  <div className="card-body">
    <h5 className="card-title">Name : {std.name}</h5>
    <p className="card-text">Age : {std.age}</p>
    <p className="card-text">Course : {std.course}</p>
    <p className="card-text">Location : {std.location}</p>
    <p className="card-text">Marks : {std.marks}</p>
    {std.isPresent ? <a href="#" className="btn btn-success btn-sm">Present</a> : <a href="#" class="btn btn-danger btn-sm">Absent</a>}
    <Link className="btn btn-warning btn-sm mx-2" to={"/"}>Back</Link>
  </div>
</div>
    </div>
  )
}

export default View