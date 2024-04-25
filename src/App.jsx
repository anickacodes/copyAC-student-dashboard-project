import './App.scss';
import CohortList from './Components/CohortList/CohortList';
import StudentList from './Components/StudentList/StudentList';
import  StudentData from './data/data.json';


function App() {




  return (
    <>
    <section className='Cohort-List'> <CohortList/></section>
    <div className='navbar'>
      <h1>Student Dashboard</h1>
    </div>
    <section className="Student-list"><StudentList/></section>
    </>
  );
}

export default App;
