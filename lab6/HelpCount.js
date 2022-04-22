import React, {useState} from 'react';
import { Button, StyleSheet } from 'react-native';

//new functional component #1

function HelpCount() {
    const [count, setCount] = useState(0);
   
    return (
        <div>
        <p> If you expirence trouble logging in, please press the help button here:</p>
        <button onClick= {() => setCount(count+1)}>
            Help</button>
        <p>We recieved your help request. {count} email(s) has been sent to you.</p>
        </div>
    );
}

export default HelpCount; StyleSheet.create ({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
    }
}) 



// const styles = StyleSheet.create({
//     HelpCount: {
//       flex: 1,
//       backgroundColor: '#fff',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//     button: {
//       padding: 15,
//       alignItems: 'center',
//     }
//   });
