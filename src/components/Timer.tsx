import Countdown, { CountdownRendererFn } from "react-countdown";
import React from "react";
import { FaClock } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { updateTimer } from "../redux/reducers/surveyReducer";

interface ITimer {
    time: number;
    onTimesUp?: (value: boolean) => void;
}

const Timer: React.FC<ITimer> = ({ time, onTimesUp }) => {
    const dispatch = useDispatch();

    const renderer: CountdownRendererFn = ({ hours, minutes, seconds, completed }) => {
        if (completed) {
            // Render a completed state
            onTimesUp?.(true);
        } else {

            // Render a countdown
            return <div className="d-flex justify-center flex-column text-right">
                <div className="time-label">Time remainings:</div>
                <span className="time-value"><FaClock size={'1.5vw'} className="time-icon" /> {minutes} minutes {seconds} seconds</span>
            </div>;
        }
    };

    return (<Countdown
        date={Date.now() + time}
        renderer={renderer}
        precision={3}
        onTick={({ minutes, seconds }) => dispatch(updateTimer({ minutes, seconds: (seconds + 1) }))}
    />)
}

export default Timer;