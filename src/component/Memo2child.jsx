import React, { memo, useEffect, useState } from 'react'

const Memo2child = ({count}) => {

    useEffect(() => {
        console.log("child rendring ....");
    })

    return (
        <div>
            child component {count}
        </div>
    )
}

const MemoEnhanceComponent = memo(Memo2child);

export default MemoEnhanceComponent