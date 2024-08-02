import React from 'react';
import '../App.css'
interface IWelcomePage {
    onStarted: () => void;
    isContinue?: boolean;
}

const WelcomePage: React.FC<IWelcomePage> = ({ onStarted, isContinue }) => {
    const label = isContinue ? "Continue" : "Start";
    return (
        <div>
            <h1 className="title mb-3">Welcome to the Quiz Application</h1>
            <p className="subtitle">This application are made only for technical test in MadeIndonesia.com</p>
            <button className="btn btn-primary btn-main" onClick={onStarted}>Click Here to {label}</button>
        </div>
    )
}

export default WelcomePage
