import moment from 'moment';
import React, { useState } from 'react';
import AgendaList from '../AgendaList/AgendaList';
// import CSVDown from '../CSVDown/CSVDown';
import ShowModal from '../ShowModal/ShowModal';
import style from './Agenda.module.css';;

const Agenda = (props) => {
    // console.log("", props);
    const [agenda, setAgenda] = useState([]);

    // console.log('agenda ', agenda);
    //get data from child
    const addAgenda = (agent) => {
        const new_agenda = [...agenda, agent];
        setAgenda(new_agenda);
        // console.log("agenda.js", ...agenda);
    }

    // const [edit, setEdit] = useState({
    //     id: null,
    //     title: "",
    //     desc: "",
    //     date: "",
    //     time: ""
    // });

    const updateAgenda = (todoId, newValue) => {
        setAgenda(prev => prev.map(item => (item.id === todoId ? newValue : item)));
    };

    const removeAgenda = id => {
        const removedArr = [...agenda].filter(todo => todo.id !== id);
        // console.log("removedArr", removedArr );
        setAgenda(removedArr);
    };

    const completeAgenda = id => {
        let updatedAgenda = agenda.map(agend => {
            if (agend.id === id) {
                agend.isComplete = !agend.isComplete;
            }
            return agend;
        });
        setAgenda(updatedAgenda);
    };

    
    return (
        <div>
            <h2 className={style.headerTitle}>{moment(props.date).format('Do MMMM YYYY')}, Agenda</h2>
            {/* show Output agenda */}
            <AgendaList
                agenda={agenda}
                setAgenda={setAgenda}
                completeAgenda={completeAgenda}
                removeAgenda={removeAgenda}
                updateAgenda={updateAgenda}
            />
            
            {/* show modal on condition */}
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