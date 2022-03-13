import { useState } from "react";
import InputSelect from "../../InputSelect";
import Row from "../../Row";

const ServiceTicket = () => {
    const [city, setCity] = useState('');

    const onChangeCity = (value: string) => {
        setCity(value);
    };

    return (
        <div>
            <Row title='Описание'>
                <InputSelect data={{
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
                    value: city,
                }} onChange={onChangeCity}/>
            </Row>
        </div>
    );
};

export default ServiceTicket;