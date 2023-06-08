import React, { useState } from 'react'

const InDecrement = () => {
  const [num, setNum] = useState(0);

//   const IncHandler= () =>{
//     setNum(num+1)
//   }

  return (
    <div>
        <h1>{num}</h1>
        <button onClick={()=>setNum(num+1)}>+</button>
        <button onClick={()=>setNum(num-1)}>-</button>
    </div>
  )
}

export default InDecrement