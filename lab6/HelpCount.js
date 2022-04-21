import React, {useState} from 'react';
import { StyleSheet } from 'react-native';

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

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      padding: 15,
      alignItems: 'center',
    }
  });
