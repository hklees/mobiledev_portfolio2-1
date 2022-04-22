import React, {useState} from 'react';
import { Button } from 'react-native';

//new functional component #1
function message() {
    return (
        <p> message here {count} </p>
    )
} 

// function HelpCount() {
//     const [count, setCount] = useState(0);
   
//     return (
//         <div>
//         <p> If you expirence trouble logging in, please press the help button here:</p>
//         <button onClick= {() => setCount(count+1)}>
//             Help</button>
//         <p>We recieved your help request. {count} email(s) has been sent to you.</p>
//         </div>
//     );
// };

function HelpCount() {
    const [count, setCount] = useState(0);
   
    return (
        <div>
        <p> If you expirence trouble logging in, please press the help button here:</p>
        <button onClick= {() => {setCount(count+1); message}}>
            Help</button>
        
        </div>
    );
};


export default HelpCount; 

