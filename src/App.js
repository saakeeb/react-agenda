import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ShowModal from './Components/ShowModal/ShowModal';

const App = () => {
  const [value, setValue] = useState(new Date());
  const [modalShow, setModalShow] = React.useState(false);

  const handleOnChange = (e) => {
    // console.log(e);
    setValue(e);
  }

  const handleClick = (e) => {
    console.log(e);
  }

  return (
    <div>
      <Calendar onClickDay={handleClick} onChange={() => handleOnChange()} value={value} />
      
      
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch modal
      </Button>

      <ShowModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};

export default App;