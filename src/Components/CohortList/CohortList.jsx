import React from 'react'
import '../CohortList/CohortList.scss'
import studentData from '/Users/eliwills/Desktop/Pursuit/Lab-Work/student-dashboard-project/src/data/data.json'
const CohortList = () => {




  return (
    <div className='container'>
    <h2>Choose a Class by Start Date</h2>
        <div className='class-Date'>
            <p className='cohort-season'><strong>Winter 2026</strong></p>
            <hr />
            <p className='cohort-season'><strong>Fall 2026</strong></p>
            <hr />
            <p className='cohort-season'><strong>Summer 2026</strong></p>
            <hr />
            <p className='cohort-season'><strong>Spring 2026</strong></p>
            <hr />
            <p className='cohort-season'><strong>Winter 2025</strong></p>
            <hr />
            <p className='cohort-season'><strong>Fall 2025</strong></p>
            <hr />
            <p className='cohort-season'><strong>Summer 2025</strong></p>
            <hr />
            <p className='cohort-season'> <strong>Spring 2025</strong></p>
            <hr />
        </div>
    
    </div>
  )
}

export default CohortList