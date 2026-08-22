import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Edit = () => {
  const navigate = useNavigate()
  const [std, setStd] = useState({})

  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [course, setCourse] = useState("")
  const [marks, setMarks] = useState("")
  const [location, setLocation] = useState("")
  const [isPresent, setIspresent] = useState(false)

  let {id} = useParams()

  async function getStudent(){
    let res = await axios.get(`http://localhost:3000/students/${id}`)
    setStd(res.data)
    setName(res.data.name)
    setAge(res.data.age)
    setCourse(res.data.course)
    setMarks(res.data.marks)
    setLocation(res.data.location)
    setIspresent(res.data.isPresent)
  }


  useEffect(()=>{
    getStudent()
  }, [])


  function handleSubmit(e){
      e.preventDefault()

      let newStudent = {
      name: name,
      course: course,
      age: age,
      location: location,
      marks: marks,
      isPresent:isPresent,
    }

    async function editStudent() {
      await axios.put(`https://students-7zab.onrender.com/students/${id}`, newStudent)
      navigate("/")

    }
    editStudent()
    }










  return (
     <div className="container col-md-6 mx-auto mt-4 p-4 shadow-sm rounded border">
  <h2 className="mb-4 text-center">Edit Student</h2>
  
  <form onSubmit={handleSubmit}>
    <div className="mb-3">
      <label className="form-label">Student Name</label>
      <input type="text" className="form-control" placeholder="Enter Name here" 
      value={name}
      onChange={(e)=>setName(e.target.value)} />
    </div>

    <div className="mb-3">
      <label className="form-label">Student Course</label>
      <input type="text" className="form-control" placeholder="Enter course name here" 
      value={course}
      onChange={(e)=>setCourse(e.target.value)}/>
    </div>

    <div className="mb-3">
      <label className="form-label">Student Age</label>
      <input type="number" className="form-control" placeholder="Enter your age here" 
      value={age}
      onChange={(e)=>setAge(e.target.value)} />
    </div>

    <div className="mb-3">
      <label className="form-label">Student Location</label>
      <input type="text" className="form-control" placeholder="Enter your location here" 
      value={location}
      onChange={(e)=>setLocation(e.target.value)} />
    </div>

    <div className="mb-3">
      <label className="form-label">Student Marks</label>
      <input type="number" className="form-control" placeholder="Enter student marks here" 
      value={marks}
      onChange={(e)=>setMarks(e.target.value)}/>
    </div>

    <div className="mb-3">
      <label className="form-label">Attendance</label>
      <select value={isPresent}
        onChange={(e)=>setIspresent(e.target.value === `true`)} className="form-select">
        <option >Select Status</option>
        <option value="true">Present</option>
        <option value="false">Absent</option>
      </select>
    </div>

    <button type="submit" className="btn btn-primary w-100">Add Student</button>
  </form>
</div>
  )
}

export default Edit