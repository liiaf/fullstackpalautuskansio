import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Header = (props) => {
    return (
        <div>
            <h1>{props.header}</h1>
        </div>
    )
}
const Statics = ({text , value}) => {


    return (
        <div>
            {text} {value}

        </div>
    )
}
const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
        {text}
    </button>
)


const App = () => {
    // tallenna napit omaan tilaansa
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [allClicks, setAll] = useState([])

    const handleGoodClick = () => {
        setAll(allClicks.concat('G'))
        setGood(good + 1)
    }

    const handleNeutralClick = () => {
        setAll(allClicks.concat('N'))
        setNeutral(neutral + 1)
    }

    const handleBadClick = () => {
        setAll(allClicks.concat('B'))
        setBad(bad + 1)
    }

    return (
        <div>
            <Header header='Give feedback' />

            <Button handleClick={handleGoodClick} text='Good' />
            <Button handleClick={handleNeutralClick} text='Neutral' />
            <Button handleClick={handleBadClick} text='Bad' />
            <Header header='Statics' />
            <Statics text='Good' value={good} />
            <Statics text='Neutral' value={neutral} />
            <Statics text='Bad' value={bad} />

        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)
