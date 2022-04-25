import React, {useEffect, useState} from 'react';
import { Text } from 'react-native';

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


 //this run timer so that after 1 mintute, the page will not work until refreshed
    //             const Timer = () => {
    //  useEffect(() => {
    //      const timer = setTimeout(() => {
    //          setCount('Timeout called');
    //      }, 60000); //timeout after 1 mintue
    //      return () => clearTimeout(timer);
    //     }, []);
         
    //     return (
    //         <div>
    //             <Text>
    //             For security purposes, this page will no longer work after 1 mintue.
    //             To reset your time, please refresh the page.
    //             </Text>
    //         </div>
    //     );
    //  };

    function Timer() {
        const [counter, setCounter] =useState(0)
        useEffect(() => {
            let interval
            const updateCounter = () => {
                setCounter(currentValue => currentValue +1) 
            }
            interval = setInterval(() => {
                updateCounter() 
            }, 10000) //10 seconds
            return () => {
                clearImmediate(interval)
            }
            }, [] )
            return (
                <div>
                    Count is {counter}
                </div>
            )
            }

     export default Timer;