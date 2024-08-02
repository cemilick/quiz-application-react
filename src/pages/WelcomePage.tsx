import React, { useState } from 'react';
import '../App.css'
import { FaTruckLoading } from 'react-icons/fa';
import { BarLoader, CircleLoader, SyncLoader } from 'react-spinners';

interface IWelcomePage {
    onStarted: () => void;
    isContinue?: boolean;
}

const WelcomePage: React.FC<IWelcomePage> = ({ onStarted, isContinue }) => {
    const [isLoading, setIsLoading] = useState(false);
    const label = isContinue ? "Continue" : "Start";
    const handleLoading = async (callback: () => void) => {
        setIsLoading(true);
        setTimeout(() => {
            callback();
            setIsLoading(false);
        }, 2000);
    }

    return isLoading ? (<BarLoader width={'70vw'} color='white' />) : (
        <div>
            <h1 className="title mb-3">Welcome to the Quiz Application</h1>
            <p className="subtitle">This application are made only for technical test in MadeIndonesia.com</p>
            <button className="btn btn-primary btn-main" onClick={() => handleLoading(onStarted)}>Click Here to {label}</button>
        </div>
    )
}

export default WelcomePage
