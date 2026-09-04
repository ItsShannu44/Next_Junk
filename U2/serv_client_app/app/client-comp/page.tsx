"use client"

import { useState } from "react"

export default function Counter()
{
    const [count,setCount] = useState(0);
    return(
        // <div style={{display:"flex",justifyContent:"center", alignItems:"center", textAlign:"center", marginTop:"300px"}}>
        <button onClick={()=>setCount(count+1)} >Count: {count} </button>
        // </div>
    )
}