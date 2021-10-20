import { useState } from "react"
import { useEffect } from "react/cjs/react.development";
import "./Timer.css"
export default function Timer() {
    const [time, setTime] = useState(0);
    const [timerBtn, setTimerBtn] = useState("START");

    function handleBtnChange() {
        timerBtn === "PAUSE" ? setTimerBtn("START") : setTimerBtn("PAUSE");
    }

    function handleRestartChange(){
        setTime(0); 
    }

    useEffect(() => {
        if (timerBtn === "PAUSE") {
            const interval = setInterval(() => {
                setTime(time + 1);
            }, 1000);
            return () => clearInterval(interval);
        }
        else if(timerBtn === "START"){
            setTime(time);
        }
    }, [time, timerBtn]);

    return (
        <div className="container">
            <p className="timer">{time}s</p>
            <button className="change button" onClick={handleBtnChange}>{timerBtn}</button>
            <button className="reset button" onClick={handleRestartChange}>RESET</button>
        </div>
    )
}