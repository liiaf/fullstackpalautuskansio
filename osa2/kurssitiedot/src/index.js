import React from 'react'
import ReactDOM from 'react-dom'



const Header = (props) => {

    return (
        <div>
            <h1>{props.course}</h1>
        </div>
    )
}
const Part = (props) => (

    <p>
        {props.part.name} {props.part.exercises}
    </p>

)

const Content = (props) => {


    return (
        < div >
            {props.parts.map(part => <Part key={part.id} part={part} />)}

        </div >
    )
}

const Total = (props) => {
    let sum = 0
    props.parts.map(part => { sum += part.exercises })
    return (
        <h3>
            Number of exercises {sum}

        </h3>
            
       

    )
}
const Course = ({ course }) => {

    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />


        </div>
    )
}
const Courses = (props) => {

    return (
        <div>

            {props.courses.map((course, i) => <Course key={i} course={course} />)}

        </div>
    )
}



const App = () => {
    const courses = [
        {
            name: 'Half Stack application development',
            parts: [
                {
                    name: 'Fundamentals of React',
                    exercises: 10,
                    id: 1
                },
                {
                    name: 'Using props to pass data',
                    exercises: 7,
                    id: 2
                },
                {
                    name: 'State of a component',
                    exercises: 14,
                    id: 3
                },
                {
                    name: 'Redux',
                    exercises: 11,
                    id: 4
                }
            ]
        },
        {
            name: 'Node.js',
            parts: [
                {
                    name: 'Routing',
                    exercises: 3,
                    id: 1
                },
                {
                    name: 'Middlewares',
                    exercises: 7,
                    id: 2
                }
            ]
        }
    ]


    return (


        <div>
            <Courses courses={courses} />
        </div>

    )
}

ReactDOM.render(<App />, document.getElementById('root'))
