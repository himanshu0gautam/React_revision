import React, { useEffect, useState } from 'react'
import Memo2child from './Memo2child';

const Memo = () => {

    const [count, setCount] = useState(0);

        useEffect(() => {
            console.log("Parent rendring ....");
        })

    return (
        <>
            <Memo2child count={count}/>

            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
            }}>Memo
                <div className="">{count}</div>

                <button onClick={() => setCount(count + 1)}>click</button>
            </div>
        </>

    )
}

export default Memo

// ye mera parent component hai mein isma koi bhi state change krata hu ho mere child componet bhi rerender hota hai

// solution : Memo
// react memo = Hoc same as Hof (function ka andar ek or function)

// function hoc(component){
//     return ()=>{}
// }

// jissa hume rerender sa bachna hai hum usma memo ka use krega jasa ki child ko rukna hai rerender sa

// React.memo shallow comparison karta hai, isliya reference stability bahit important hai

// primitive datatype (number, string, boolean, null, undefined) esma to react.memo badiya work kata hai ------ reference type mein kch alag tarika hota hai ([],{},function)

// agar reference type ko bhi rerender sa rokna hai to child comp. mein ->
// const enchanceMemo= memo(Memo2child, (prevProp, nextProp)=>{
//     return true
// })