// import React, { useRef } from 'react'

// const UseRef = () => {

//     // input ka phela ek refrence lega useref sa
//     const inputref = useRef()

//     const handlefocus = () =>{
//         inputref.current.focus()
//     }

//   return (
//     <>
//     <input ref={inputref} type="text" placeholder='enter name' />
//     <button onClick={handlefocus}>focus</button>
//     </>
//   )
// } 

// export default UseRef

import React, { useEffect, useRef, useState } from 'react'

const UseRef = () => {

    const [randomNo, setRandomNo] = useState(0);
    // const [randomcount, setRandomcount] = useState(0);

    const rendercount = useRef(0)

    const handlerandomNo = () => {
        const no = Math.floor(Math.random() * 100);
        setRandomNo(no);
    }

    useEffect(()=>{
        console.log("re-render trigger hua...");
        // setRandomcount(randomcount + 1)
        rendercount.current += 1;
    })

    return (
        <>
            <div>
                <h1>re-render count :{rendercount.current}</h1>
                <h2>{randomNo}</h2>
                <button onClick={handlerandomNo}>genrate random number</button>
            </div>
        </>
    )
}

export default UseRef