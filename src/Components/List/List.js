import React from 'react';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBinLine } from 'react-icons/ri';

const List = (props) => {
    const { agend, index, completeAgenda, setEdit, removeAgenda } = props;
    return (
        <div>
            <div
                className={agend.isComplete ?
                    'todo-row complete' : 'todo-row'}
                key={index}
            >
                <div key={agend.id} onClick={() => completeAgenda(agend.id)}>
                    <span>{agend.title}</span>
                    <span>{agend.date}</span>
                    <span>{agend.time}</span>
                </div>
                <div className="icon">
                    <FiEdit
                        onClick={() => setEdit({
                            title: agend.title,
                            desc: agend.desc,
                            date: agend.date,
                            time: agend.time

                        })}
                        className='edit-icon'
                    />
                    <RiDeleteBinLine
                        onClick={() => removeAgenda}
                        className='delete-icon'
                    />
                </div>
            </div>
        </div>
    );
};

export default List;