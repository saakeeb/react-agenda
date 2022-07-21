import React from 'react';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBinLine } from 'react-icons/ri';
import './List.css';

const List = (props) => {
    const { agend, index, completeAgenda, setEdit, removeAgenda } = props;
    return (
        <div className={agend.isComplete ?
            'todo-rows complete' : 'todo-rows'}>
            <div
                className={agend.isComplete ?
                    'todo-row complete' : 'todo-row'}
                key={index}
            >
                <div key={agend.id} onClick={() => completeAgenda(agend.id)}>
                    <span className='row-title'>{agend.title}</span>
                    <p className='row-para'>{agend.desc}</p>
                    <div className="row-schedule">
                        <span className='row-date'>{agend.date}</span>
                        <span className='row-time'>{agend.time}</span>
                    </div>
                </div>
                <div className="icons">
                    <FiEdit
                        onClick={() => setEdit({
                            id: agend.id,
                            title: agend.title,
                            desc: agend.desc,
                            date: agend.date,
                            time: agend.time

                        })}
                        className='edit-icon'
                    />
                    <RiDeleteBinLine
                        onClick={() => removeAgenda(agend.id)}
                        className='delete-icon'
                    />
                </div>
            </div>
        </div>
    );
};

export default List;