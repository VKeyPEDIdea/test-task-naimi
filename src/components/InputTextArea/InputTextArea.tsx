import React from 'react';
import classes from './InputTextArea.module.scss';

const InputTextArea = ({
    placeholder,
    value,
    onChange
}: {
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}) => {
    return (
        <textarea className={classes.input}
            onChange={onChange}
            placeholder={placeholder}>
            {value}
        </textarea>
    );
};

export default InputTextArea;