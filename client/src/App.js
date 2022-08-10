import './App.css';
import io from "socket.io-client";
import React from 'react'
import {useEffect, useState} from "react";
import Horse from "./components/Horse";

function App() {


    const [info, setInfo] = useState('');

    useEffect(() => {
        const socket = io.connect('http://localhost:3002');
        socket.emit('start');
        socket.on('ticker', function (response) {
            setInfo(response);
        });
    }, []);

    return (
        <div className="App">
            <h1>Horses status</h1>
            {
                info.length > 0 ?
                    <Horse info={info}/>
                    :
                    <p>
                        Data not found or server is not working!!!
                    </p>
            }
        </div>
    );
}

export default App;
