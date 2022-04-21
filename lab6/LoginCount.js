import React, {useState} from 'react';
import { Button, StyleSheet } from 'react-native';
//new functional component #1
function LoginCount() {
    const [count, setCount] = useState(0);

    return (
        <div>
        <p>You have tried to login in {count} time(s).</p>
        <button onClick= {() => setCount(count+1)}>
        Click here</button>
        </div>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
    },
    
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },

});

export default LoginCount; 