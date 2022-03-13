import { useState } from 'react';
import classes from './App.module.scss';
import Button from './components/Button/Button';
import Card from './components/Card';
import ServiceTicket from './components/Tickets/ServiceTicket';
import VacancyTicket from './components/Tickets/VacancyTicket';
import './scss/index.scss';

const App = () => {
    const [activeTicket, setActiveTicket] = useState('1');

    const onTabClick = (id: string) => {
        setActiveTicket(id);
    };

    return (
        <div className={classes.app}>
            <h1>Формы заявок</h1>
            <div className={classes.navigation}>
                <Button title='Услуга' clickHandler={onTabClick} id='1' isActive={'1' === activeTicket}/>
                <Button title='Вакансия' clickHandler={onTabClick} id='2' isActive={'2' === activeTicket}/>
            </div>
            <Card title='О заявке'>
                {
                    activeTicket === '1'
                        ? <ServiceTicket/>
                        : <VacancyTicket/>
                }
            </Card>
        </div>
    );
}

export default App;
