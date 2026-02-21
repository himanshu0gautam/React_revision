import React from 'react'
import { useRef } from 'react';
import { useState } from 'react'

const P_Question = () => {
    // const [count, setCount] = useState(0);

    const [count, batchUpdata, flushUpdate] = customhook(0);

    const handleclick = () =>{
        console.log(batchUpdata);
        
        batchUpdata(prev => prev + 1);
        batchUpdata(prev => prev + 1);
        batchUpdata(prev => prev + 1);

        flushUpdate();
    }

  return (
    <>
    <div>
        <h2>{count}</h2>
        <button onClick={handleclick}>add 3 batched</button>
    </div>
    </>
  )
}

export default P_Question 



// 👉 Multiple state updates ko temporarily store karna
// 👉 Ek baar me apply karna (manual batching)

const customhook = (initialValue) => {

    const [state, setState] = useState(initialValue)

    // manually queue banyga to store update
    const updataQueue = useRef([])

    // add updata to queue
    const batchUpdata = (updataFn) =>{
        updataQueue.current.push(updataFn)
    };

    // apply all updata together
    const flushUpdate = () =>{
        setState(prevState => {
            let newState = prevState;

            updataQueue.current.forEach(fn => {
                newState = fn(newState)
            });

            // clear queue
            updataQueue.current = [];
            return newState
        });
    };

    return [state, batchUpdata, flushUpdate];
}

// output 
// 3 updates queue me jayenge →
// Ek hi render me apply honge ✅

// Custom hook me hum updates ko queue me store karte hain using useRef, aur later ek single setState call me apply karte hain, jisse multiple re-renders avoid hote hain and performance improve hoti hai.

