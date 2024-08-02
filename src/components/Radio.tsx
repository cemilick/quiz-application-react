import React from "react";

import '../App.css'

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
                    <div key={"radio" + index} style={{ display: 'flex', alignItems: 'center' }}>
                        <input
                            type="radio"
                            required={required}
                            id={option.value}
                            name={name}
                            style={{
                                width: '3vw',
                                height: '3vw',
                                marginBottom: '1vw',
                                marginTop: '1vw',
                                marginRight: '1vw'
                            }}
                            value={option.value}
                            defaultChecked={option.value === defaultValue}
                            onChange={(e) => onChange?.(e.target.value)}
                        />
                        <label style={{
                            fontSize: '2vw',
                            marginBottom: '1vw',
                            marginTop: '1vw',
                        }} htmlFor={option.value}>{option.label}</label>
                    </div>
                );
            })}
        </>
    )
}

export default Radio;