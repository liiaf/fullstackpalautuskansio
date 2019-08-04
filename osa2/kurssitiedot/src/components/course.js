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


export default Course