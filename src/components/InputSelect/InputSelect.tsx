import { useState } from 'react';
import GIcon from '../GIcon';
import classes from './InputSelect.module.scss';

interface IOption {
    title: string;
    value: string;
}

interface InputSelectProps {
    data: {
        id: string;
        optionList: IOption[];
    }
    value: string;
    onChange: (value: string) => void;
}

const InputSelect = ({
    data: {
        id,
        optionList,
    },
    value,
    onChange,
}: InputSelectProps) => {
	const [isOpened, setIsOpened] = useState(false);
	const [content, setContent] = useState('Не выбрано');

	const optionClickHandler = (content: string, value: string) => {
		setContent(content);
		onChange(value);
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

	return (
		<div className={classes.select}
			onClick={() => setIsOpened(!isOpened)}>
			<div className={classes.field}>{content}</div>
			<div className={classes.arrow} style={isOpened ? {transform: 'rotate(180deg)'} : {}}>
				<GIcon title='drop-down' color='#000'/>
			</div>
			<select id={id}
				value={value}
				className={classes.input}
				onChange={() => onChange(content)}>
				{getOptionList(optionList)}
			</select>
		</div>
	);
}

export default InputSelect;