import React from 'react'
import ReactDOM from 'react-dom'
import { tsPropertySignature } from '@babel/types';
import { EWOULDBLOCK } from 'constants';

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
    let sum =0
    props.parts.map(part => {sum += part.exercises} )
    return (
        <p>
            Number of exercises {sum}
        </p>

    )
}
const Course = ({ course }) => {
    console.log('ewd ', { course })
    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts ={course.parts} />


        </div>
    )
}



const App = () => {
    const course = {
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
            }
        ]
    }


    return (


        <div>
            <Course course={course} />
        </div>

    )
}

ReactDOM.render(<App />, document.getElementById('root'))
