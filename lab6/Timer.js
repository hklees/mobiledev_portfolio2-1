import React, {useEffect, useState} from 'react';

//new functional component #2
// const Timeout = () => {
//     const [count, setCount] = useState(0);
//     const [countInTimeout, setCountInTimeout] = useState(0);

//     useEffect(() => {
//         setTimeout(() => {
//             setCountInTimeout(count);
//         }, 4000); //4 seconds
//         setCount(5);
//     }, []);

//     return (
//         <div>
//             Count: {count}
//             setTimeout Count: {countInTimeout}
//         </div>
//     );
// };
 const Timer = () => {
     useEffect(() => {
         const timer = setTimeout(() => {
             setCount('Timeout called');
         }, 2000);
         return () => clearTimeout(timer);
        }, []);
         
        return (
            <div>
                Testing this
            </div>
        );
     };
     export default Timer;