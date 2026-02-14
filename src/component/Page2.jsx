import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Page2 = () => {

    const [data, setData] = useState("");
    const [country, setCoutry] = useState("");
    const [state, setState] = useState("");

    const navigate = useNavigate();

    const PrevHandler = (e) => {
        e.preventDefault();
        if(!data || !country || !state){
            alert("please save your data")
            navigate('/page2')
        }else {
            navigate('/')
        }
    }

    const NextHandler = (e) => {
        e.preventDefault();

        if (data === " ") {
            return alert("fill something else")

        } else {
            navigate('/page3')
        }

    }

    return (
        <>
            <form action="" >
                <div className="mainContainer">
                    <div className="form" style={{ display: 'flex', flexDirection: 'column' }}>
                        <label> district :
                            <input type="text" placeholder='Enter your district' onChange={e => setData(e.target.value)} />
                        </label>
                        <label> state  :
                            <input type="text" placeholder='Enter your state' onChange={e => setState(e.target.value)} />
                        </label>
                        <label> country :
                            <input type="text" placeholder='Enter your country' onChange={e => setCoutry(e.target.value)} />
                        </label>
                        <button type='Submit' onClick={NextHandler}>Next</button>
                        <button type='Submit' onClick={PrevHandler}>Prev</button>
                    </div>
                </div>

            </form>
        </>
    )
}

export default Page2