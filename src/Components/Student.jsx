import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'

const Student = (props) => {
    function handleDelete(stdId) {
        async function deleteStd() {
            if (!stdId) return;
            await axios.delete(`https://students-7zab.onrender.com/students/${stdId}`)
            window.location.reload()
        }
        deleteStd()
        
    }
    return (
        <div>
            <div className="card h-100 shadow border-0 rounded-3 mx-auto my-2" style={{ width: "18rem" }}>
                <div className="card-body">
                    <h5 className="card-title">Name: {props.std.name}</h5>
                    <p className="card-text">Course: {props.std.course}</p>
                    <p className="card-text">Age: {props.std.age}</p>
                    <p className="card-text">Location: {props.std.location}</p>
                    <p className="card-text">Marks: {props.std.marks}</p>
                    {props.std.isPresent ? (
                        <span className="badge bg-success">Present</span>
                    ) : (
                        <span className="badge bg-danger">Absent</span>
                    )}
                    <div className='d-flex gap-2 mt-2'>
                        <Link  className='btn btn-primary btn-sm' to={`/view/${props.std.id}`}>View</Link>
                        <Link className='btn btn-info btn-sm' to={`/edit/${props.std.id}`}>Edit</Link>
                        <a className='btn btn-danger btn-sm' onClick={() => handleDelete(props.std.id)}  >Delete</a>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Student