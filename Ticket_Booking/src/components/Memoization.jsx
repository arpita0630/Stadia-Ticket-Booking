import React, { useEffect } from 'react'
import { useState,useMemo } from 'react';

const Memoization = () => {
    const [counter,setCounter] = useState(0);

    const memo = useMemo(()=>{
        console.log("Inside the heavy computational function");
        for(let i = 0;i<1000000000;i++){
            // pass no thing to perform here
        } //Heavy Calculation
        return 2*2
    },[])

  return (
    <div>
        <h1>Counter ka value: {counter}</h1>
        <button onClick={()=>setCounter(counter+1)}>Increase the counter</button>
    </div>
  )
}

export default Memoization