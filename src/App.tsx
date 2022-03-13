import classes from './App.module.scss';
import Card from './components/Card';
import InputSelect from './components/InputSelect';
import Row from './components/Row';
import './scss/index.scss';

const App = () => {

    return (
        <div className={classes.app}>
            <h1>Формы заявок</h1>
            <Card title='О заявке'>
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
                        value: '',
                    }} onChange={() => console.log('change')}/>
                </Row>
            </Card>
        </div>
    );
}

export default App;
