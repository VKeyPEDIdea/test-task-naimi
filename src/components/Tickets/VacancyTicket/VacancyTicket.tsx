import { useState } from "react";
import InputSelect from "../../InputSelect";
import InputText from "../../InputText";
import InputTextArea from "../../InputTextArea";
import Row from "../../Row";

const expSelect = {
    id: '1',
    optionList: [
        {
            title: 'Без опыта работы',
            value: '1',
        },
        {
            title: 'От 1 года',
            value: '2',
        },
        {
            title: 'От 3 лет',
            value: '3',
        },
        {
            title: 'От 5 лет',
            value: '4',
        },
    ],
};

const VacancyTicket = () => {
    const [title, setTitle] = useState('');
    const [conditions, setConditions] = useState('');
    const [salaryFrom, setSalaryFrom] = useState('');
    const [salaryTo, setSalaryTo] = useState('');
    const [exp, setExp] = useState('');

    const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const onConditionsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setConditions(e.target.value);
    };

    const onSalaryFromChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSalaryFrom(e.target.value);
    };

    const onSalaryToChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSalaryTo(e.target.value);
    };

    const onChangeExp = (value: string) => {
        setExp(value);
    };

    return (
        <div>
            <Row title='Название вакансии:'>
                <InputText data={{ id: '1'}}
                    value={title}
                    onChange={onTitleChange}/>
            </Row>
            <Row title='Обязанности, требования, условия:'>
                <InputTextArea placeholder='Введите условия и требования к кандидату'
                    value={conditions}
                    onChange={onConditionsChange}/>
            </Row>
            <Row title='Зарплата:'>
                <div className='col-2'>
                    <InputText data={{ id: '3'}}
                        value={salaryFrom}
                        placeholder='От'
                        onChange={onSalaryFromChange}/>
                    <InputText data={{ id: '4'}}
                        value={salaryTo}
                        placeholder='До'
                        onChange={onSalaryToChange}/>
                </div>
            </Row>
            <Row title='Опыт работы:'>
                <InputSelect data={expSelect}
                    value={exp}
                    onChange={onChangeExp}/>
            </Row>
        </div>
    );
};

export default VacancyTicket;