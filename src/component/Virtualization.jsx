import React, { useState } from 'react'

const Virtualization = () => {

    const arr = Array.from({ length: 100 }, (_, index) => index + 1)

    const height = '300px'
    const itemheight = '30px'

    const noOfVisibleItem = Math.floor(parseInt(height) / parseInt(itemheight));

    const [indices, setIndices] = useState([0, noOfVisibleItem])

    const visibleList = arr.slice(indices[0], indices[1])

    const handleScroll = (e) => {
        const { scrollTop } = e.target
        const newStartingIndex = Math.floor(scrollTop / parseInt(itemheight));
        const endingIndex = newStartingIndex + noOfVisibleItem;
        setIndices([newStartingIndex, endingIndex])
        
    }

    return (
        <>
            <div style={{
                height: height,
                backgroundColor: "grey",
                overflowY: "auto"
            }} onScroll={handleScroll}>

                <div style={{ height: arr.length * parseInt(itemheight) }}>
                    <div style={{
                        transform: `translateY (${indices[0] * parseInt(itemheight)}) `
                    }}>
                        {visibleList.map((item) => {
                        return (
                            <p key={item} style={{
                                height: itemheight,
                                borderBottom: '1px solid black'
                            }}>item - {item}</p>
                        )
                    })}
                    </div>
                </div>

            </div>
        </>
    )
}

export default Virtualization