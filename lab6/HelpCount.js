import React, {useState} from 'react';
import { Button, Text } from 'react-native';

//new functional component #1

function HelpCount() {
        const [count, setCount] = useState(0);
    
        return (
                <div>
                    <Text>If you expirence trouble logging in, please press the help button here:   </Text>
                {/* <p> If you expirence trouble logging in, please press the help button here:</p> */}
                <button onClick= {() => setCount(count+1)}>
                    Help</button>
                    <br></br>
                    <Text>We recieved your help request. {count} email(s) has been sent to you.</Text>
                {/* <p>We recieved your help request. {count} email(s) has been sent to you.</p> */}
                </div>
            );
        };
        


export default HelpCount; 

