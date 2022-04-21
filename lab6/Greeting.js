import React, {StyleSheet, Component, useState} from 'react';

const Greeting = () => {
    const [morning, updateMorning] = useState(<h1>Good Morning!</h1>)
    const handleUpdate = () => {
        updateMorning (<h1>Good Evening</h1>)
    }
    return (
        <div>
            { morning}
            <button onClick={ () => {handleUpdate() }} >It's not morning...</button>
            <br></br>
        </div>
    
    );
}
export default Greeting;

// const styles = StyleSheet.create({
//     button: {
//         alignItems: 'center',
//         justifyContent: 'center',
//         paddingVertical: 12,
//         paddingHorizontal: 32,
//     }
// });