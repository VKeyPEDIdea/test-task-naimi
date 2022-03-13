import { useState } from "react";
import InputSelect from "../../InputSelect";
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
    const [exp, setExp] = useState('');

    const onChangeExp = (value: string) => {
        setExp(value);
    };

    return (
        <div>
            <Row title='Опыт работы:'>
                <InputSelect data={expSelect}
                    value={exp}
                    onChange={onChangeExp}/>
            </Row>
        </div>
    );
};

export default VacancyTicket;