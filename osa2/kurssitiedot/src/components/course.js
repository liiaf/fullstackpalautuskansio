import React from 'react'
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
    let summa = props.parts.reduce((sum, osa) => sum + osa.exercises, 0);
    
    return (
        <h3>
            Number of exercises {summa}

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
export default Course