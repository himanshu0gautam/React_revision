// navbar
// home
// about
// footer
// agar muja navbar sa data footer mein bejna hai to muja prop.drilling krni hogi parent to child or ab vo hi data muja about mein bhi chaiya to muja uska liya data phela home mein bjena hoga ya bhut bakar and lenghty process ho jayega 
// iska liya hume ek zustand se global state (store) bna lega or ussa data kise mein bhi bej sakta hai

import React from 'react'
import CreateStore from './Zustand-store'

const Zustand = () => {

    const state = CreateStore();
    console.log(state);

    const handleClick = ()=>{
        state.increment();
    }


    return (
        <>
            <div>Zustand</div>
            <h4>{state.id}</h4>
            <h4>{state.name}</h4>
            <button onClick={handleClick}>click</button>
        </>
    )
}

export default Zustand