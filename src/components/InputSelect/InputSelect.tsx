import React, { useState } from 'react';
import GIcon from '../GIcon';
import classes from './InputSelect.module.scss';

interface IOption {
    title: string;
    value: string;
}

interface InputSelectProps {
    data: {
        id: string;
        value: string;
        optionList: IOption[];
    }
    onChange: () => void;
}

const InputSelect = ({
    data: {
        id,
        value,
        optionList,
    },
    onChange,
}: InputSelectProps) => {
	const [isOpened, setIsOpened] = useState(false);
	const [selectValue, setSelectValue] = useState(value);
	const [content, setContent] = useState('Не выбрано');

	const optionClickHandler = (content: string, value: string) => {
		setContent(content);
		setSelectValue(value);
	};

	const getOptionList = (options: IOption[]) => {
		return options.map(({ value, title }: IOption) => {
			return <option
				key={value}
				value={value}
				onClick={() => optionClickHandler(title, value)}
				className={classes.option}>{title}</option>;
		});
	};

	return(
		<div
			className={classes.select}
			onClick={() => setIsOpened(!isOpened)}>
			<div className={classes.field}>{content}</div>
			<div className={classes.arrow} style={isOpened ? {transform: 'rotate(180deg)'} : {}}>
				<GIcon title='drop-down' color='#000'/>
			</div>
			<select id={id}
				value={selectValue}
				className={classes.input}
				onChange={onChange}>
				{getOptionList(optionList)}
			</select>
		</div>
	);
}

export default InputSelect;