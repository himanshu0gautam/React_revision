import React, { useEffect, useState } from 'react'

const Debouncing = () => {

    const [input, setInput] = useState('');
    const [debouncing, setDebouncing] = useState('')

    const fakeapi = (input) => {
        console.log("fakeapi call ...", input);
    }

    useEffect(() => {
        const handler = setTimeout(() => {
            if (input) {
                setDebouncing(input)
                fakeapi(input);
            }
        }, 800);

        return () => clearTimeout(handler)
    }, [input])


    return (
        <>
            <div style={{
                width: "100%",
                height: '95vh',
                display: 'flex',
                backgroundColor: 'gray',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
            }}>
                <div style={{
                    display: 'flex'
                }}>
                    Debouncing</div>
                <input type="text"
                    value={input}
                    placeholder='Seacrh bar'
                    onChange={(e) => setInput(e.target.value)}
                />
            </div>
        </>
    )
}

export default Debouncing


// import React, { useState } from 'react'

// const dummydata = [
//     {
//         "id": 101,
//         "title": "Wireless Headphones",
//         "category": "Electronics",
//         "price": 2999,
//         "rating": 4.5,
//         "stock": 15
//     },
//     {
//         "id": 102,
//         "title": "Smart Watch",
//         "category": "Electronics",
//         "price": 4500,
//         "rating": 4.2,
//         "stock": 8
//     },
//     {
//         "id": 103,
//         "title": "Coffee Mug",
//         "category": "Lifestyle",
//         "price": 500,
//         "rating": 4.8,
//         "stock": 50
//     }
// ]

// const ApiRetry = () => {

//     const [data, setData] = useState([]);

//     const apiCallfunction = async (isRetry = false) => {
//         try {
//             const res = await fetch("http://localhost:3000/api")
//             console.log("ok", res);

//         } catch (error) {
//             if (!isRetry) {
//                 console.log("1 time api call");
//                 apiCallfunction(true)
//             } else {
//                 console.log("2 time try");

//                 console.error("2nd ", error);
//             }
//         }
//     }

//     apiCallfunction();

//     return (
//         <div>ApiRetry</div>
//     )
// }

// export default ApiRetry