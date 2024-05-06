import React from 'react'

const DropMenu = ({ viewInfo, setViewInfo, fellow }) => {
    
  let percentGoal = Math.round((fellow.codewars.current.total / fellow.codewars.goal.total) * 100);

  return (
    <div onClick={() => { setViewInfo(!viewInfo) } }>
      {viewInfo ? <span>Show Less...</span> : <span>Show More...</span>
      
      
      
      }
    { viewInfo && 
    <div onClick={() => setViewInfo(!viewInfo)}>
      <div>
        <p><strong>CodeWars</strong></p>
        <p> Current Total:{fellow.codewars.current.total}</p>
        <p>Last Week: {fellow.codewars.current.lastWeek}</p>
        <p>Goal: {fellow.codewars.goal.total}</p>
        <p>Percent of Goal Achieved:{ ` ${percentGoal}%` } </p>
      </div>
      <div>
        <p><strong>Scores</strong></p>
        <p>Assignments: {`${fellow.cohort.scores.assignments * 100} %`}</p>
        <p>Projects: {}</p>
        <p>Assessments: {}</p>
      </div>
      <div>
        <p><strong>Certifications</strong></p>
        <p>Resume: {fellow.certifications.resume ? "✅": "❌"}</p>
        <p>LinkedIn: {fellow.certifications.linkedin ? "✅": "❌"} </p>
        <p>Mock Interview: {fellow.certifications.github ? "✅": "❌"}</p>
        <p>Github: {fellow.certifications.mockInterview ? "✅": "❌"}</p>
      </div>
      
      </div> } 
    </div>
  )
}

export default DropMenu;