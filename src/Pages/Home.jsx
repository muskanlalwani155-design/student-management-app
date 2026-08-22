import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Student from '../Components/Student'
import { Link } from 'react-router-dom'


const Home = () => {
    const [students, setStudent] = useState([])

    async function getData(){
        let res = await axios.get("https://students-7zab.onrender.com/students")
        setStudent(res.data)
    }

    useEffect(()=>{
        getData()
    }, [])


  return (
    <div>
        <h1 className='bg-warning text-center text-center py-1'>Student Management</h1>
        <div className='text-end me-3' >
            <Link to={"/addstudent"} className='btn btn-dark me-3'>Add Student</Link>
        </div>
        <div className='container'>
            <div className='row'>
            {students.map((student)=>(
                <div className='col-4 mt-3' key={student.id}> 
                    <Student std= {student}/>
                </div>
            
                
            ))}
        </div>
        </div>
        
    </div>
  )
}

export default Home