import { useState } from 'react';
import classes from './App.module.scss';
import Card from './components/Card';
import ServiceTicket from './components/Tickets/ServiceTicket';
import VacancyTicket from './components/Tickets/VacancyTicket';
import './scss/index.scss';

const App = () => {
    const [ticket, setTicket] = useState(1);

    return (
        <div className={classes.app}>
            <h1>Формы заявок</h1>
            <Card title='О заявке'>
                {
                    ticket === 1
                        ? <ServiceTicket/>
                        : <VacancyTicket/>
                }
            </Card>
        </div>
    );
}

export default App;
