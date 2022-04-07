import React from 'react';
import s from './Dialogs.module.css';
import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';

const Dialogs = (props) => {
    let stateLoc = props.dialogsPage;

    let dialogsElements = stateLoc.dialogs.map(d => <DialogsItem name={d.name} id={d.id} key={d.id} />);
    let messagesElements = stateLoc.messages.map(m => <Message message={m.message} key={m.id} />);
    let newMessageBody = stateLoc.newMessageBody;

    const onSendMessageClick = () => {
        if (stateLoc.newMessageBody !== '') {
            props.sendMessage()
        }
    }
    const onSendMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body)
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__items}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div>
                <div>
                    <textarea onChange={onSendMessageChange} value={newMessageBody} placeholder='Enter you message' cols="30" rows="2"></textarea>
                </div>
                <div>
                    <button onClick={onSendMessageClick}>send</button>

                </div>
            </div>
        </div>
    )
}

export default Dialogs;