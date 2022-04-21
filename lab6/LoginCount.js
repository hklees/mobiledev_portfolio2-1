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