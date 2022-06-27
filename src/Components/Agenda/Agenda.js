import moment from 'moment';
import React from 'react';

const Agenda = (props) => {
    return (
        <div>
            <h2>{moment(props.date).format('Do MMMM YYYY')}, Agenda</h2>
        </div>
    );
};

export default Agenda;