import React, {Component, useState} from 'react';

const Greeting = () => {
    const [morning, updateMorning] = useState("Good morning!")
    const handleUpdate = () => {
        updateMorning ("Good Evening!")
    }
    return (
        <div>
            { morning}
            <br></br>
            <button onClick={ () => {handleUpdate() }} >It's not morning...</button>

        </div>
    
    );
}
export default Greeting;

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
    }
});