import './App.scss';
import CohortList from './Components/CohortList/CohortList';
import StudentList from './Components/StudentList/StudentList';
import studentData from './data/data.json'
import React, { useState } from 'react';


function App() {
// Variable for data
  const [cohort, setCohort] = useState("All Students");
  // const[students, setStudents] = useState(studentData)


//Utilizes the cohortCode, seperates and adds a space between the year and season then returns it as a string. ✅
  const displayNames = ( cohort ) => {
  
    let splitCohort = cohort.split('');

        splitCohort.splice(-4,0,' ');
    
    let joinedStringCohort = splitCohort.join(''); 
    
    return joinedStringCohort;

  }

  
  return (
<>
<section className='Cohort-List'> <CohortList studentData = { studentData } setcohort = { setCohort } displayNames = { displayNames }/> </section>
      <div className='navbar'>
          <h1>Student Dashboard</h1>
      </div>
      <StudentList data = { studentData } cohort = { cohort }  displayNames = { displayNames }/>
    </>
  );
}

export default App;