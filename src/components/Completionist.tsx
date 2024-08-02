import React from "react";
import { useDispatch } from "react-redux";
import { resetAll } from "../redux/reducers/surveyReducer";

interface ICompletionist {
    isTimesUp?: boolean;
    score?: number;
}

const Completionist: React.FC<ICompletionist> = ({ isTimesUp, score }) => {
    const dispatch = useDispatch();

    const onTryAgain = () => {
        dispatch(resetAll());
        window.location.reload();
    }

    return isTimesUp ? (
        <div className="modal bg-dark">
            <h1>Times Up!</h1>
            <button className="btn btn-success" onClick={onTryAgain}>Click Here to Try Again!</button>
        </div>) : (
        <div className="modal bg-success">
            <h1 className="title">Congratulations for Finish this Quiz!</h1>
            <p className="subtitle">Thank you for your participation!</p>
            <p className="subtitle">Your score is</p>
            <h1 className="score">{score}</h1>
            <button className="btn btn-primary btn-main" onClick={onTryAgain}>Click Here to Start from Beginning</button>
        </div>
    )
}

export default Completionist;