import React from 'react'
import '../StudentList/StudentList.scss';
import studentData from '/Users/eliwills/Desktop/Pursuit/Lab-Work/student-dashboard-project/src/data/data.json'


const StudentList = () => {

  let data = studentData;


  return (

    <div className='student-container'>
      <div className='students-and-count'>
        <h3>All Students</h3>
        <p>Total Students: {data.length}</p>
      </div>

      <div>
        <ul>
          {data.map(fellow => {
            return (<li>{fellow.names.preferredName}</li> )
          })}
        </ul>
      </div>
    
    
    </div>
  )
}

export default StudentList