import React, {useEffect, useState} from 'react';

//new functional component #2
function Timeout() {
    const [count, setCount] = useState(0);
    const [countInTimeout, setCountInTimeout] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setCountInTimeout(count);
        }, 4000); //4 seconds
        setCount(5);
    }, []);

    return (
        <div>
            Count: {count}
            setTimeout Count: {countInTimeout}
        </div>
    );
};