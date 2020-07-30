import React, { useState } from 'react';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';



const Times = () => {
    let time1 = new Date().toLocaleTimeString();
    const [time, setTime] = useState(time1);

    const updateTime = () => {
        time1 = new Date().toLocaleTimeString();
        setTime(time1);


    }
    setInterval(updateTime, 1000);
    return (
        <>
            <>
                <div className=" text-center text-danger ">
                    <h1><span className="border border-warning">{time}</span></h1>
                </div>
            </>
        </>
    );
}




export default Times;
