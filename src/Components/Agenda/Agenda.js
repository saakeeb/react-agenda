import moment from 'moment';
import React, { useState } from 'react';
import AgendaList from '../AgendaList/AgendaList';
import ShowModal from '../ShowModal/ShowModal';

const Agenda = (props) => {
    // console.log("", props);
    const [agenda, setAgenda] = useState([]);

    console.log('agenda ', agenda);

    const addAgenda = (agent) => {
        const new_agenda = [...agenda, agent];
        setAgenda(new_agenda);
        console.log("agenda.js", ...agenda);
    }

    const completeAgenda = id => {
        let updatedAgenda = agenda.map(agend => {
            if (agend.id === id) {
                agend.isComplete = !agend.isComplete;
            }
            return agend;
        });
        setAgenda(updatedAgenda);
    };
    const removeAgenda = id => {
        const removedArr = [...agenda].filter(todo => todo.id !== id);

        setAgenda(removedArr);
    };

    return (
        <div>
            <h2>{moment(props.date).format('Do MMMM YYYY')}, Agenda</h2>
            
            <AgendaList
                agenda={agenda}
                completeAgenda={completeAgenda}
                removeAgenda={removeAgenda}
            />

            {
                props.modalShow &&
                <ShowModal
                    onCloseModal={props.onCloseModal}
                    date={props.date}
                    onSubmit={addAgenda}
                ></ShowModal>

            }
        </div>
    );
};

export default Agenda;