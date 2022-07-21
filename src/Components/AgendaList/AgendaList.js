import React, { useState } from 'react';
import List from '../List/List';
import ShowModal from '../ShowModal/ShowModal';
import style from './AgendaList.module.css';
import { read, utils, writeFile } from 'xlsx';
import { BiDownload } from 'react-icons/bi';

const AgendaList = (props) => {
    const { agenda, setAgenda, completeAgenda, removeAgenda, updateAgenda} = props;

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
            value: ''
        });
    };

    if (edit.id) {
        return <ShowModal edit={edit} onSubmit={submitUpdate} />;
    }

    const handleImport = ($event) => {
        const files = $event.target.files;
        if (files.length) {
            const file = files[0];
            const reader = new FileReader();
            reader.onload = (event) => {
                const wb = read(event.target.result);
                const sheets = wb.SheetNames;

                if (sheets.length) {
                    const rows = utils.sheet_to_json(wb.Sheets[sheets[0]]);
                    setAgenda(rows);
                }
            }
            reader.readAsArrayBuffer(file);
        }
    }
    const handleExport = () => {
        const headings = [[
            'id',
            'title',
            'desc',
            'date',
            'time'
        ]];
        const wb = utils.book_new();
        const ws = utils.json_to_sheet([]);
        utils.sheet_add_aoa(ws, headings);
        utils.sheet_add_json(ws, agenda, { origin: 'A2', skipHeader: true });
        utils.book_append_sheet(wb, ws, 'Report');
        writeFile(wb, 'Agenda Report.xlsx');
    }

    return (
        <>
            {/* Import and export data to excel sheet */}
            <div className={style.csvContainer}>
                <div className={style.csvImport}>
                            <div className="input-group">
                                <div className="custom-file">
                            <input type="file" name="file" className={style.csvInput} required onChange={handleImport}
                                        accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" />
                                </div>
                            </div>
                        </div>
                <div className={style.csvExport}>
                    <button onClick={handleExport} className={style.csvOutput}>
                        Export <BiDownload />
                            </button>
                        </div>
            </div>
            <div className={style.rowsContainer}>
                {/* get data from agenda parent and map through it */}
                {
                    agenda.map((agend, index) =>
                        <List
                            key={index}
                            agend={agend}
                            completeAgenda={completeAgenda}
                            removeAgenda={removeAgenda}
                            setEdit={setEdit}
                            updateAgenda={updateAgenda}
                        ></List>
                    )
                }
            </div>
        </>
        
    )
};

export default AgendaList;