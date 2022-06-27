import React, { useState } from 'react';
import List from '../List/List';

const AgendaList = (props) => {
    const { agenda, completeAgenda, removeAgenda } = props;

    console.log("agendalist", props);
    
    const [edit, setEdit] = useState({
        id: null,
        title: "",
        desc: "",
        date: "",
        time: ""
    });

    return (
        <div>
            {
                agenda.map((agend, index) => <List
                    key={index}
                    agend={agend}
                    completeAgenda={completeAgenda}
                    removeAgenda={removeAgenda}
                    setEdit={setEdit}
                ></List>)
            }
        </div>
    )
};

export default AgendaList;