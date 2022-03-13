import { useState } from "react";
import InputSelect from "../../InputSelect";
import InputTextArea from "../../InputTextArea";
import Row from "../../Row";

const citySelect = {
    id: '1',
    optionList: [
        {
            title: 'Нур-Султан',
            value: '1',
        },
        {
            title: 'Караганда',
            value: '2',
        }
    ],
};

const ServiceTicket = () => {
    const [city, setCity] = useState('');

    const onChangeCity = (value: string) => {
        setCity(value);
    };

    return (
        <div>
            <Row title='Описание:'>
                <InputTextArea />
            </Row>
            <Row title='Город заявки:'>
                <InputSelect data={citySelect}
                    value={city}
                    onChange={onChangeCity}/>
            </Row>
        </div>
    );
};

export default ServiceTicket;