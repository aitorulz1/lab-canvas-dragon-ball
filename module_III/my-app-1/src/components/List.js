import React from 'react'
import Buzz from './Buzz'
import Fizz from './Fizz'

const nums = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15
]

const List = () => {
    const elements = nums.map(num => (num % 2 === 0)) ? <Fizz/> : <Buzz/>

return (
    <div className="List">
        <ul>
            {elements}
        </ul>
    </div>
)}

export default List