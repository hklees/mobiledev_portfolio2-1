import React, {Component, useState} from 'react';

const Greeting = () => {
    const [morning, updateMorning] = useState("Good morning!")
    const handleUpdate = () => {
        updateMorning ("Good Evening!")
    }
    return (
        <div>
            <button onClick={ () => {handleUpdate() }} >It's not morning...</button>

        </div>
    
    );
}
export default Greeting;
