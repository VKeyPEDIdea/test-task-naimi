import React from 'react';
import classes from './InputText.module.scss';

interface InputTextProps {
    data: {
        id: string;
    }
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const InputText = ({
    data: {
        id,
    },
    value,
    onChange,
}: InputTextProps) => {
    return (
        <div>
            <input
                onChange={onChange}
                type='text'
                id={id}
                value={value}
                className={classes.input}/>
        </div>
    );
};

export default InputText;