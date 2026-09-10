import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Student from '../Components/Student'
import { Link } from 'react-router-dom'


const Home = () => {
  const [students, setStudent] = useState([])
  const [loading, setLoading] = useState(true) 

  async function getData() {
    try {
      let res = await axios.get("https://students-7zab.onrender.com/students")
      setStudent(res.data)
    } catch (error) {
      console.error("Error fetching students:", error)
    } finally {
      setLoading(false) 
    }
  }

  useEffect(() => {
    getData()
  }, [])

  
  const shimmerCards = [1, 2, 3, 4, 5, 6]

  return (
    <div>
      <h1 className='bg-warning text-center py-1'>Student Management</h1>
      <div className='text-end me-3'>
        <Link to={"/addstudent"} className='btn btn-dark me-3'>Add Student</Link>
      </div>
      <div className='container'>
        <div className='row'>
          {loading ? (
            // Shimmer UI Cards
            shimmerCards.map((item) => (
              <div className='col-4 mt-3' key={item}>
                <div className='shimmer-card'>
                  <div className='shimmer-box' style={{ height: '24px', width: '60%', marginBottom: '12px' }}></div>
                  <div className='shimmer-box' style={{ height: '16px', width: '85%', marginBottom: '8px' }}></div>
                  <div className='shimmer-box' style={{ height: '16px', width: '40%', marginBottom: '16px' }}></div>
                  <div className='d-flex gap-2'>
                    <div className='shimmer-box' style={{ height: '32px', width: '70px', borderRadius: '4px' }}></div>
                    <div className='shimmer-box' style={{ height: '32px', width: '70px', borderRadius: '4px' }}></div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            // Actual Data Cards
            students.map((student) => (
              <div className='col-4 mt-3' key={student.id}>
                <Student std={student} />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default Home