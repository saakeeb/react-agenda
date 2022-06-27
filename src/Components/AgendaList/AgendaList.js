import React, { useState } from 'react';
import List from '../List/List';
import ShowModal from '../ShowModal/ShowModal';
import style from './AgendaList.module.css';

const AgendaList = (props) => {
    const { agenda, completeAgenda, removeAgenda, updateAgenda } = props;

    // console.log("agendalist", props);
    
    const [edit, setEdit] = useState({
        id: null,
        title: "",
        desc: "",
        date: "",
        time: ""
    });

    //edit data
    const submitUpdate = value => {
        updateAgenda(edit.id, value );
        setEdit({
            id: null,
            tvalue: ''
        });
    };

    if (edit.id) {
        return <ShowModal edit={edit} onSubmit={submitUpdate} />;
    }

    return (
        <div className={style.rowsContainer}>
            {/* get data from agenda parent and map through it */}
            {
                agenda.map((agend, index) => <List
                    key={index}
                    agend={agend}
                    completeAgenda={completeAgenda}
                    removeAgenda={removeAgenda}
                    setEdit={setEdit}
                    updateAgenda={updateAgenda}
                ></List>)
            }
        </div>
    )
};

export default AgendaList;