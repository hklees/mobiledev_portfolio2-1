import React, {useState} from 'react';
import { Button, StyleSheet } from 'react-native';
//new functional component #1
let a = 'invisible'
let b = 'visible'
function LoginCount() {
    const [count, setCount] = useState(0);

    return (
        <div>
        <p> If you expirence trouble logging in, please press the help button here:</p>
        {/* <button onClick= {() => setCount(count+1)}>
            Help</button> */}
            <button onClick= {() => {setCount(count+1); setShow(a); setShow(b)}}>
            Help</button>
        <p>We recieved your help request. {count} email(s) has been sent to you.</p>
        </div>
    );
}
export default LoginCount; 


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
