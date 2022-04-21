import React, {useState} from 'react';
import { Button, StyleSheet } from 'react-native';
import './app.css'

//new functional component #1

function HelpCount() {
    const [count, setCount] = useState(0);
    
    return (
        <div>
        <p> If you expirence trouble logging in, please press the help button here:</p>
        <button onClick= {() => setCount(count+1)}>
            Help</button>
            {/* <button onClick= {() => {setCount(count+1); something here }}>
            Help</button> */}
        <p>We recieved your help request. {count} email(s) has been sent to you.</p>
        </div>
    );
}
export default HelpCount; 

