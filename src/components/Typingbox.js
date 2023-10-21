import React, { useState } from "react"

const Typingbox=()=>{
    
    const [time,setTime]=useState(15)
    const displayText="silver science half town explain air due nervous company pilot else herself glass between judge needs machinery afraid result raise none ball mainly beauty coming earth lunch typical start oxygen finally becoming or number rear distant minute corner traffic magic sum activity food mad fast alphabet substance tobacco above trick"
    let keychar=0;
    return(
        <div>
           <div className="row-1">
               <div>{time}</div>
               <div>
                    <button onClick={()=>setTime(15)}>15</button>
                    <button onClick={()=>setTime(30)}>30</button>
                    <button onClick={()=>setTime(60)}>60</button>
                </div>
           </div>
           <div className="text-box">
            {displayText.split("").map((char)=>(<span key={'char'+(keychar++)}>{char}</span>))}

           </div>
        </div>
    )
}

export default Typingbox