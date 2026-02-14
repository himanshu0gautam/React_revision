import React, { Profiler, useEffect } from 'react';
import UseMemo2child from './UseMemo2child'

const UseMemo = () => {

    const onRenderCallback = (
        id, // Profiler की id
        phase, // "mount" (पहली बार) या "update" (दुबारा render)
        actualDuration, // Render होने में लगा असली समय (milliseconds में)
        baseDuration, // बिना memoization के लगने वाला अनुमानित समय
        startTime, // Render कब शुरू हुआ
        commitTime // React ने changes कब अप्लाई किए
    ) => {
        console.log(`${id} (${phase}) took ${actualDuration}ms to render`);
    };

    return (
        <>
            <Profiler id="time" onRender={onRenderCallback}>
                <UseMemo2child />
            </Profiler>
        </>
    )
}

export default UseMemo


// useMemo use for memoize the value (save, cache) the value taki hume barr barr heavy calcaultion na krna pade

// ex -> ek heavy component hai - cart page hai - too many product hai - price cal. ho rhi hai - to esma hum cart page opem krega component humara re-render hoga to ye saari calculation dubare run hogi or phir state mein change hone sa bhi re-render hoga