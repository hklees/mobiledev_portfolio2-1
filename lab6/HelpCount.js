import React, {useState} from 'react';
import { Button, StyleSheet } from 'react-native';

//new functional component #1

function HelpCount() {
    const [count, setCount] = useState(0);
   
    return (
        <div>
        <p> If you expirence trouble logging in, please press the help button here:</p>
        <button style={styles.button} onClick= {() => setCount(count+1)}>
            Help</button>
        <p>We recieved your help request. {count} email(s) has been sent to you.</p>
        </div>
    );
};
const styles= StyleSheet.create({
    button: {
        color: 'blue',
    }
})

export default HelpCount; 

