import React, { useState } from "react";
import InputCheckbox from "../../InputCheckbox";
import InputSelect from "../../InputSelect";
import InputText from "../../InputText";
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
const connectionSelect = {
    id: '2',
    optionList: [
        {
            title: 'Написать в чате',
            value: '1',
        },
        {
            title: 'Повзонить',
            value: '2',
        }
    ],
}
const unitsSelect = {
    id: '3',
    optionList: [
        {
            title: 'За всю работу',
            value: '1',
        },
        {
            title: 'За кв. метр',
            value: '2',
        },
        {
            title: 'За час',
            value: '3',
        },
    ],
}
const moneyAmountInput = {
    id: '5'
};

const ServiceTicket = () => {
    const [description, setDescription] = useState('');
    const [city, setCity] = useState('');
    const [connection, setConnection] = useState('');
    const [units, setUnits] = useState('');
    const [moneyAmount, setMoneyAmount] = useState('');
    const [personConfirm, setPersonConfirm] = useState(false);
    const [photo, setPhoto] = useState(false);
    const [review, setReview] = useState(false);

    const onCityChange = (value: string) => {
        setCity(value);
    };

    const onConnectionChange = (value: string) => {
        setConnection(value);
    };

    const onUnitsChange = (value: string) => {
        setUnits(value);
    };

    const onDescritionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(e.target.value);
    };

    const onMoneyAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMoneyAmount(e.target.value);
    };

    const onPersonConfirmChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPersonConfirm(e.target.checked);
    };

    const onPhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhoto(e.target.checked);
    };

    const onReviewChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setReview(e.target.checked);
    };

    return (
        <div>
            <Row title='Описание:'>
                <InputTextArea placeholder='Введите описание'
                    value={description}
                    onChange={onDescritionChange}/>
            </Row>
            <Row title='Город заявки:'>
                <InputSelect data={citySelect}
                    value={city}
                    onChange={onCityChange}/>
            </Row>
            <Row title='Способ связи:'>
                <InputSelect data={connectionSelect}
                    value={connection}
                    onChange={onConnectionChange}/>
            </Row>
            <Row title='Сколько готовы заплатить:'>
                <div className='col-2'>
                    <InputText data={moneyAmountInput}
                        value={moneyAmount}
                        onChange={onMoneyAmountChange}/>
                    <InputSelect data={unitsSelect}
                        value={units}
                        onChange={onUnitsChange}/>
                </div>
            </Row>
            <Row title='Требования к специалистам:'>
                <div className='col-3'>
                    <InputCheckbox label='Личность подтверждена' onChange={onPersonConfirmChange}/>
                    <InputCheckbox label='С фото работ в анкете' onChange={onPhotoChange}/>
                    <InputCheckbox label='С отзывами' onChange={onReviewChange}/>
                </div>
            </Row>
        </div>
    );
};

export default ServiceTicket;
