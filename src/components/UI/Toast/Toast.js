import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import styles from './Toast.module.css';

const Toast = props => {
    const [toastIsOpen, setToastIsOpen] = useState(true);

    const onClickHandle = (event) => {
        props.toggle();
    };

    return (<>
        {toastIsOpen ? 
            <div className={styles.modal}>
                <div className={styles.content}>
                    <h1>{props.title}</h1>
                    <p>{props.content}</p>
                    <div className={styles['ok-btn']} >
                        <button type='button'  onClick={onClickHandle} >Okay</button>
                    </div>
                </div>
            </div> 
        :
        null
        }
        </>
    );
    
};

const ErrorModal = props => {
    return (
        <>
            {ReactDOM.createPortal(<Toast title={props.title} content={props.content} toggle={props.toggle} />,
                document.getElementById('toast-root'))  }
        </>
    )
};

export default ErrorModal;