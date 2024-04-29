import React from 'react'
import '../CohortList/CohortList.scss'
import studentData from '/Users/eliwills/Desktop/Pursuit/Lab-Work/student-dashboard-project/src/data/data.json'
import { v4 as generateUUID } from 'uuid';
import StudentList from '../StudentList/StudentList';


const CohortList = ({setcohort}) => {


let sortedByCohort = studentData.sort((a, b) => { 
    let startDateA = new Date(a.cohort.cohortStartDate);
    let startDateB = new Date(b.cohort.cohortStartDate);

    return startDateB - startDateA;
});

// Creates the Display of a unique array of every Class Cohort and start year 
let cohortSet = Array.from(new Set(sortedByCohort.map(student => 
  
  student.cohort.cohortCode

)))
// ^^^^

//Utilizes the cohortCode, seperates and adds a space between the year and season then returns it as a string. ✅
  let displayNames = cohortSet.map(cohort => {
  
    let splitCohort = cohort.split('');

    
splitCohort.splice(-4,0,' ');
    
    let joinedStringCohort = splitCohort.join(''); 
    
    return joinedStringCohort;


  })



  return (
    <div className='container'>
    <h2>Choose a Class by Start Date</h2>

        <div className='class-Date'>

        <p className='cohort-season' onClick={() => setcohort('All Students')}><strong>All Students</strong></p>
            <hr />

            { 
            cohortSet.map((cohortSeason, i) => {
              return(
              <>
              {/* add onclick to change "All Students to the current selected cohort"  '✅'*/}
              <p className='cohort-season' key={i} onClick={() => (setcohort(cohortSeason))}>  <strong>{cohortSeason} </strong> </p>
              
              <hr />
              </>
              )
            })}
        </div>
    
    </div>
  )
}

export default CohortList