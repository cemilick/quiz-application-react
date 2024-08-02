import React from "react";

import '../App.css';

interface RadioOptions {
    value: string;
    label: string;
}

interface IRadio {
    options: RadioOptions[];
    name: string;
    defaultValue?: string;
    onChange?: (value: any) => void;
    required?: boolean;
}

const Radio: React.FC<IRadio> = ({ options, name, defaultValue, onChange, required }) => {

    return (
        <>
            {options.map((option, index) => {
                return (
                    <div key={"radio" + index} className="input-wrapper">
                        <input
                            type="radio"
                            required={required}
                            id={option.value}
                            name={name}
                            className="input-radio"
                            value={option.value}
                            defaultChecked={option.value === defaultValue}
                            onChange={(e) => onChange?.(e.target.value)}
                        />
                        <label className="label-radio" htmlFor={option.value}>{option.label}</label>
                    </div>
                );
            })}
        </>
    )
}

export default Radio;