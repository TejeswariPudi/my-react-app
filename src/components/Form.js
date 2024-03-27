import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
 
export default function Form() {
    return (
        <div>
            <h4>Popup - GeeksforGeeks</h4>
            <Popup trigger=
                {<button> Edit </button>}
                position="right center">
                <div><input type="text"/></div>
                <button>Click here</button>
            </Popup>
        </div>
    )
};