import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBell} from '@fortawesome/free-solid-svg-icons'
import './App.css';
import NotificationsList from "./components/NotificationsList";


function App() {
    const [open, setOpen] = useState(false)

    return (
        <div className="notification_wrap">
            <div className="notification_icon" onClick={() => setOpen(!open)}>
                <FontAwesomeIcon icon={faBell}/>
            </div>
            {open &&
            <NotificationsList/>}
        </div>
    );
}

export default App;
