import React from 'react'
import Course from './components/Course'
const App = ({courses}) => {
    console.log('sddew ', {courses})
    return (
        <div>
            {courses.map((course, i) => <Course key={i} course={course} />)}
        </div>
    )
}
export default App