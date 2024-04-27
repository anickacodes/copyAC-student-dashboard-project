import './App.scss';
import CohortList from './Components/CohortList/CohortList';
import StudentList from './Components/StudentList/StudentList';
import studentData from '/Users/eliwills/Desktop/Pursuit/Lab-Work/student-dashboard-project/src/data/data.json'
import React, { useState } from 'react';


function App() {

  let data = studentData;
  
  const [cohort, setCohort] = useState("All Students");
  const [numberOfStudents, setNumberOfStudents] = useState(0);
  const [studentList, setStudentList] = useState(data);

  //RESEARCH ON PROPS YOU NEED PROPS FOR THIS DESPERATELY


  return (
<>
<section className='Cohort-List'> <CohortList setcohort = { setCohort }/> </section>
      <div className='navbar'>
          <h1>Student Dashboard</h1>
      </div>
      <StudentList data = { data } cohort = { cohort }/>
    </>
  );
}

export default App;