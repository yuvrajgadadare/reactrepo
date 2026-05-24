import { useState } from "react"

export const Sample=()=>{
    const [count,setCounter]=useState(0);
    const Increment=()=>{
         var cnt=count;
         cnt++;
        setCounter(cnt);
    }
    return(
        <div style={{"paddingLeft":"20%"}}>
            <h1>Hi Hello</h1>
            <h2>Welcome to My First React App</h2>
            <h2>{count}</h2>
            <button onClick={Increment}>Click</button>
        </div>
    )
}