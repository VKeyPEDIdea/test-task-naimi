import React from 'react';
import classes from './InputCheckbox.module.scss';

interface InputCheckboxProps {
    label: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputCheckbox = ({
    label,
    onChange
}: InputCheckboxProps) => {
    return (
        <>
            <label className={classes.input}>
                <input className={classes.field} type="checkbox" onChange={onChange}/>
                <span className={classes.box}>
                    <span className={classes.surface}></span>
                </span>
                {label}
            </label>
        </>
    );
};

export default InputCheckbox;