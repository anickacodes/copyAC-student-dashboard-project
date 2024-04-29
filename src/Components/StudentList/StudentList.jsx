import React, { useState } from 'react';
import '../StudentList/StudentList.scss';



// Filters through the Student List //


const StudentList = ({data, cohort}) => {

      const newArray = data.filter(byCohort => { 
        return byCohort.cohort.cohortCode === cohort 
      })
  
  return (

  <>
  {cohort === 'All Students' ? 
  
  <div className='student-container'>

    <div className='students-and-count'>
        <h3>{cohort}</h3> 
        <p>Total Students: {data.length}</p> 
    </div>

    <div>
        <ul>

          {data.map(fellow => {
          
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

  : 
  
  <div className='student-container'>

    <div className='students-and-count'>
        <h3>{cohort}</h3> 
        <p>Total Students: {newArray.length}</p> 
    </div>

    <div>
        <ul>

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
  
  }

</>
)
}

export default StudentList