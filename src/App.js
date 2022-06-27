import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import ShowModal from './Components/ShowModal/ShowModal';
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
    console.log("handleClick", e);
    // setValue(e);
    setModalShow(true);
  }

  return (
    <div className={style.app}>
      {/* {
        modalShow &&
        <ShowModal
            onCloseModal={setModalShow}
            date={date}
          ></ShowModal>
        
      } */}
      
      <div className={style.appContent}>
        <Calendar onClickDay={handleClick} onChange={handleOnChange} value={date} />
        <Agenda date={date} modalShow={modalShow} onCloseModal={setModalShow}></Agenda>
      </div>
    </div>
  );
};

export default App;