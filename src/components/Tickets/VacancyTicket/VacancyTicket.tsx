import InputSelect from "../../InputSelect";
import Row from "../../Row";

const VacancyTicket = () => {
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
                    value: '',
                }} onChange={() => console.log('change')}/>
            </Row>
        </div>
    );
};

export default VacancyTicket;