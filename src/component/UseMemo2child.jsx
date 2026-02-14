import React, { useMemo, useState } from 'react'

const UseMemo2child = () => {

    const [count, setCount] = useState(0);
    const [quatity, setQuatity] = useState(1);

    const noo = 0;
    
    const expensiveTask = ()=> {
        for(let i=1; i<=2000000000; i++){}
        return noo + 1;
    }
    // expensiveTask();

    const expensiveresult = useMemo(()=>{
       const result = expensiveTask();
        return result
    },[quatity])

  return (
   <>
   
    <div>UseMemo2child</div>
    <div>{expensiveresult}</div>
    <button onClick={()=> setCount(count + 1)}>count :{count}</button>
    <button onClick={()=> setQuatity(quatity + 1)}>quatity :{quatity}</button>
   </>

  )
}

export default UseMemo2child