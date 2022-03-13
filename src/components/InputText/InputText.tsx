import React from 'react';
import classes from './InputText.module.scss';

interface InputTextProps {
    data: {
        id: string;
    }
    value: string;
    placeholder?: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const InputText = ({
    data: {
        id,
    },
    value,
    placeholder,
    onChange,
}: InputTextProps) => {
    return (
        <div>
            <input
                onChange={onChange}
                type='text'
                id={id}
                placeholder={placeholder}
                value={value}
                className={classes.input}/>
        </div>
    );
};

export default InputText;