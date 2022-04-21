import React, {useState} from 'react';

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
export default LoginCount; 

// const styles = StyleSheet.create({
//     button: {
//         alignItems: 'center',
//         justifyContent: 'center',
//         paddingVertical: 12,
//         paddingHorizontal: 32,
//         borderRadius: 4,
//         elevation: 3,
//         backgroundColor: 'black',
//     },

//     text: {
//         fontSize: 16,
//         lineHeight: 21,
//         fontWeight: 'bold',
//         letterSpacing: 0.25,
//         color: 'white',
//     },
//     textinput: {
//         fontSize: 20,
//         width: 200,
//         borderBottomColor: '#737373',
//         borderBottomWidth: StyleSheet.hairlineWidth,
//         padding: 5,
//         margin: 5
//     },
// });
