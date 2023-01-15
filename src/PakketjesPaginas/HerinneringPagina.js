import React, { useState } from 'react'
import SockJS from 'sockjs-client';
import { over } from 'stompjs';
import Appbar from '../components/Appbar';
import { Container } from '@mui/system';
import TextField from '@mui/material/TextField';



var stompClient = null;
const HerinneringPagina = () => {
    const [chat, setChat] = useState([]);
    const [connectData, setConnectData] = useState({
        connected: false,
        message: ""
    })

    const onConnected = () => {
        setConnectData({ ...connectData, "connected": true });
        stompClient.subscribe('/topic', onMessageReceived);
    }

    const verbindingMaken = () => {
        let Sock = new SockJS('http://localhost:8080/ws');
        stompClient = over(Sock);
        stompClient.connect({}, onConnected, onError);
    }

    const handleValue = (event) => {
        const { value } = event.target;
        setConnectData({ ...connectData, "message": value });
    }

    const onMessageReceived = (payLoad) => {
        let payloadData = JSON.parse(payLoad.body);
        chat.push(payloadData);
        setChat([...chat])
    }

    const onError = (err) => {
        console.log(err);
    }

    const sendMessage = () => {
        if (stompClient) {
            let chatMessage = {
                message: connectData.message
            };
            stompClient.send('/app/message', {}, JSON.stringify(chatMessage));
            setConnectData({ ...connectData, "message": "" });
        }
    }

    return (
        <>
            <Appbar />
            <br />
            <button type="button" onClick={verbindingMaken}>
                connect
            </button>
            <div className="container">
                {connectData.connected ?
                    <div className="chat-box">
                        <div className='chat-content'>
                            <ul className='chat-messages'>
                                {chat.map((chat, index) => (
                                    <li className='message' key={index}>
                                        <div className='message-data'>{chat.message}</div>

                                    </li>
                                ))}
                            </ul>
                            <div className='send-message'>
                                <input type='text' className='input-message'
                                    name='message' placeholder='enter public message' value={connectData.message}
                                    onChange={handleValue} />
                                <button type='button' className='send-button' onClick={sendMessage}>send</button>
                            </div>
                        </div>
                    </div>
                    :
                    <div>
                        <h1 style={{ marginLeft: "100px", marginTop: "-40px", color: "white", fontSize: "60px" }}>Druk op verbinden</h1>
                    </div>}
            </div>
        </>
    )
}

export default HerinneringPagina