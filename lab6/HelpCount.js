import React, {useState} from 'react';
import { Button, Text, StyleSheet } from 'react-native';

//new functional component #1

function HelpCount() {
        const [count, setCount] = useState(0);
    
        return (
                <div>
                    <Text>If you expirence trouble logging in, please press the help button here:   </Text>
                {/* <p> If you expirence trouble logging in, please press the help button here:</p> */}
                <Button title="Help" onPress={() => setCount(count+1)}></Button>
                {/* <button onClick= {() => setCount(count+1)}>Help</button> */}
                    <br></br>
                    <Text>You have sent in {count} help request(s). {count} email(s) was been sent to you.</Text>
                {/* <p>We recieved your help request. {count} email(s) has been sent to you.</p> */}
                </div>
            );
        };
        
const styles= StyleSheet.create ({
    text: {
        fontSize: 30,
    }
})

export default HelpCount; StyleSheet;

