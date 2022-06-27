import moment from 'moment';
import React, { useState } from 'react';
import style from './ShowModal.module.css';

const ShowModal = (props) => {
    const [modalDate, setModalDate] = useState({
        date: props.date
    });

    console.log("date", modalDate);

    const handleOnChange = (e) => {
        setModalDate(e.target.value);
    }

    return (
        <div className={style.modal}>
            <div className={style.modalContent}>
                <button onClick={() => props.onCloseModal(false)} className={style.modalClose}>X</button>
                <h2>{moment(props.date).format('Do MMMM YYYY')}, Agenda</h2>
                <form className={style.modalForm}>
                    <div>
                        <label htmlFor="tile">Title</label>
                        <input type="text" name="title" placeholder='Title'/>
                    </div>
                    <div>
                        <label htmlFor="desc">Description</label>
                        <textarea name="desc" placeholder='Description'></textarea>
                    </div>
                    <div>
                        <label htmlFor="date">Date</label>
                        <input type="date" name="date" value={modalDate} onChange={handleOnChange} />
                    </div>
                    <div>
                        <label htmlFor="time">Time</label>
                        <input type="time" name="time" />
                    </div>
                </form>

            </div>
        </div>
    );
};

export default ShowModal;