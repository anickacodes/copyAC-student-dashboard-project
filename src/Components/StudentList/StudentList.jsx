import React, { useEffect, useState } from 'react';
import '../StudentList/StudentList.scss';
import StudentCard from './StudentCard/StudentCard';

const StudentList = ({ data, cohort, displayNames }) => {

  

      const newArray = data.filter(byCohort => { 
        return byCohort.cohort.cohortCode === cohort
      })


    

  return (

  <>

  { cohort === 'All Students' ? 
  
  <div className='student-container'>

    <div className='students-and-count'>
        <h3>{cohort}</h3> 

        <p>Total Students: <span>{ data.length }</span></p> 

    </div>

    <div>
        <ul>

          { data.map((fellow, i ) => {



            return (

                <StudentCard fellow = { fellow } key ={fellow.id}  />
          )
        
          })}
        </ul>
    </div>
  
</div>

  : 
  
  <div className='student-container'>

    <div className='students-and-count'>

        <h3>{ displayNames( cohort ) }</h3> 
        <p>Total Students: { newArray.length }</p> 
    </div>

    <div>
        <ul>

          { newArray.map(fellow => {

              const { resume, github, linkedin, mockInterview } = fellow.certifications;

              const codeWartotal = fellow.codewars.current.total;

              const checkStatus = resume && github && linkedin && mockInterview && codeWartotal > 600;
          
            return (
            
            <li key= {fellow.id} > 
              <img src= {fellow.profilePhoto} />
              <section>
                <strong>{ `${ fellow.names.preferredName } ${ fellow.names.middleName[0] } ${ fellow.names.surname }` }</strong>
                <p>{ fellow.username }</p>
                <p><span className='dob'>Birthday: </span>{ fellow.dob }</p>
                <p className='show-more'><a href="">Show More...</a></p>
              </section>
              <p>{ checkStatus ? <span className='on-track'>On-Track to Graduation</span> 
                : 
                <span className='off-track'>Off-Track to Graduation</span> } 
              </p>
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