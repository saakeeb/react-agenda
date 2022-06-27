import moment from 'moment';
import React, { useState } from 'react';
import style from './ShowModal.module.css';
import { GrClose } from 'react-icons/gr';

const ShowModal = (props) => {
    const [input, setInput] = useState(props.edit ?
        {
            title: props.edit.title,
            desc: props.edit.desc,
            date: props.edit.date,
            time: props.edit.time
        } : {
            title: "",
            desc: "",
            date: "",
            time: ""
        });

    const handleOnChange = (event) => {
        const name = event.target.name;
        setInput((oldValue) => {
            return { ...oldValue, [name]: event.target.value };
        });
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();

        //send data to parent agenda
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            title: input.title,
            desc: input.desc,
            date: input.date,
            time: input.time
        })

        setInput({
            title: "",
            desc: "",
            date: "",
            time: ""
        });
    }

    return (
        <div className={style.modal}>
            <div className={style.modalContent}>
                <button onClick={() => props.onCloseModal(false)} className={style.modalClose}>
                    <GrClose />
                </button>
                <h2>{moment(props.date).format('Do MMMM YYYY')}, Agenda</h2>

                <form className={style.modalForm} onSubmit={handleOnSubmit}>
                    {
                        props.edit ?
                            (
                                <>
                                    <div>
                                        <label htmlFor="tile">Title</label>
                                        <input
                                            type="text"
                                            name="title"
                                            placeholder='Title'
                                            value={input.title}
                                            onChange={handleOnChange}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="desc">Description</label>
                                        <textarea
                                            name="desc"
                                            placeholder='Description'
                                            value={input.desc}
                                            onChange={handleOnChange}
                                        ></textarea>
                                    </div>
                                    <div>
                                        <label htmlFor="date">Date</label>
                                        <input
                                            type="date"
                                            name="date"
                                            value={input.date}
                                            onChange={handleOnChange} />
                                    </div>
                                    <div>
                                        <label htmlFor="time">Time</label>
                                        <input
                                            type="time"
                                            name="time"
                                            onChange={handleOnChange}
                                            value={input.time}
                                        />
                                    </div>
                                    <button className={style.modalButton}>Update Data</button>
                                </>
                            ) : (
                                <>
                                    <div>
                                        <label htmlFor="tile">Title</label>
                                        <input
                                            type="text"
                                            name="title"
                                            placeholder='Title'
                                            value={input.title}
                                            onChange={handleOnChange}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="desc">Description</label>
                                        <textarea
                                            name="desc"
                                            placeholder='Description'
                                            value={input.desc}
                                            onChange={handleOnChange}
                                        ></textarea>
                                    </div>
                                    <div>
                                        <label htmlFor="date">Date</label>
                                        <input
                                            type="date"
                                            name="date"
                                            value={input.date}
                                            onChange={handleOnChange} />
                                    </div>
                                    <div>
                                        <label htmlFor="time">Time</label>
                                        <input
                                            type="time"
                                            name="time"
                                            onChange={handleOnChange}
                                            value={input.time}
                                        />
                                    </div>
                                    <button className={style.modalButton}>Save Data</button>
                                </>
                            )
                    }
                    
                </form>

            </div>
        </div>
    );
};

export default ShowModal;