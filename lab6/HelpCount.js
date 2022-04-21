import React, {useState} from 'react';
import { StyleSheet } from 'react-native';

//new functional component #1
function buttonStuff() {

    return (
        <p>We recieved your help request. {count} email(s) has been sent to you.</p>
        )
}

function HelpCount() {
    const [count, setCount] = useState(0);
   
    return (
        //<View styles={styles.HelpCount}>
        <div>
        <p> If you expirence trouble logging in, please press the help button here:</p>
        {/* <button onClick= {() => setCount(count+1)}>
            Help</button> */}
            <button onClick= {() => setCount(count+1)}>
            Help</button>
        {/* <p>We recieved your help request. {count} email(s) has been sent to you.</p> */}
        </div>
       // </View>
    );
}

export default HelpCount; buttonStuff; 

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
