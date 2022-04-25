import React, {useState} from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native';
// import {Button} from 'react-native-elements';

const Greeting = () => {
    const [morning, updateMorning] = useState(<h1>Good Morning!</h1>)
    const handleUpdate = () => {
        updateMorning (<h1>Good Evening!</h1>)
    }
    return (
        <div>
            { morning}
            {/* <button onClick={ () => {handleUpdate() }} >It's not morning...</button> */}
            <Button buttonStyle={{
                backgroundColor: 'red',
            }}
            title= "It's not morning..." onPress= { () => {handleUpdate() }} ></Button>
            <br></br>
        </div>
    
    );
}
export default Greeting; StyleSheet

// const styles = StyleSheet.create({
//     button: {
//         alignItems: 'center',
//         justifyContent: 'center',
//         paddingVertical: 12,
//         paddingHorizontal: 32,
//     }
// });