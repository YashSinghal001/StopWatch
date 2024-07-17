import React,{useState,useEffect, useRef} from 'react'

const StopWatch = () => {
    //this time Past time
    const [time, setTime] = useState(null);
    //this time is now 
    const [now, setNow] = useState(null);
    const Inrterval=useRef(null)


function Start(){
 setNow(Date.now());
 setTime(Date.now());
//  Date. now() - returns the number of milliseconds since midnight 1 January, 1970 
Inrterval.current=setInterval(() => {
    setTime(Date.now())
}, 10);
}
function Stop(){
clearInterval(Inrterval.current)
}
const TimePassed=(time-now)/1000;

function Reset(){
    setTime(0);
    setNow(0); 
}

  return (
    <div className='cnter'>

<h1>StopWatch</h1>
<h2>Stopwatch: {TimePassed.toFixed(3)}</h2>
<div className="btns">
    <button onClick={Start}>Start</button>
    <button onClick={Stop}>Stop</button>
    <button onClick={Reset}>Reset</button>
</div>




    </div>
  )
}

export default StopWatch