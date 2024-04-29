import React, { useState } from 'react';
import '../StudentList/StudentList.scss';



// Filters through the Student List //


const StudentList = ({data, cohort, setstudentlist, studentList}) => {

      const newArray = data.filter(byCohort => { 
        return byCohort.cohort.cohortCode === cohort 
      })
  
  
  console.log(newArray)


  return (

  <>
  
  <div className='student-container'>

    <div className='students-and-count'>
        <h3>{cohort}</h3> {/* This will change every time a cohort is clicked */}
        <p>Total Students: {newArray.length}</p> {/* This will change every time to display the current length of the cohort that was selected */} 
        <hr />
    </div>

    <div>
        <ul> 
          {/* This will change depending on the status of current cohort or none */}
          {newArray.map(fellow => {
          
            return (
            
            <li key= {fellow.id} > 
              <img src= {fellow.profilePhoto} />
              <section>
                <strong>{fellow.names.preferredName +' '+ fellow.names.middleName[0] +' '+ fellow.names.surname}</strong>
                <p>{fellow.username}</p>
                <p><span className='dob'>Birthday: </span>{fellow.dob}</p>
                <p className='show-more'><a href="">Show More...</a></p>
              </section>
            </li> 
          )
        
          })}
        </ul>
    </div>
  
</div>

</>
)
}

export default StudentList