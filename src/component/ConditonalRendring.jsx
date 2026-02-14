import React from 'react'

const details = [
    { id: 1, name: "Carrat", isfruit: true },
    { id: 2, name: "Apple", isfruit: false },
];


const ConditonalRendring = () => {
    return (
        <>
            <div>
                {details.map((item) => (
                     <div key={item.id} className='main'>
                        <h3 style={{ color: item.isfruit ? 'blue':'red' }}>{item.name}</h3>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ConditonalRendring