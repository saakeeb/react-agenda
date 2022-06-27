import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import Agenda from './Components/Agenda/Agenda';

import style from "./App.module.css"

const App = () => {
  const [date, setDate] = useState(new Date());
  const [modalShow, setModalShow] = useState(false);

  const handleOnChange = (e) => {
    // console.log("handleOnChange", e);
    setDate(e);
  }

  const handleClick = (e) => {
    // console.log("handleClick", e);
    setModalShow(true);
  }

  return (
    <div className={style.app}>
      <div className={style.appContent}>
        {/* Calender parent component */}
        <Calendar onClickDay={handleClick} onChange={handleOnChange} value={date} className={style.calenderContent} />
        {/* Agenda parent component */}
        <Agenda date={date} modalShow={modalShow} onCloseModal={setModalShow} className={style.agendaContent}></Agenda>
      </div>
    </div>
  );
};

export default App;