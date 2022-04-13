import React from 'react';
import s from './Dialogs.module.css';
import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';
import { Field, reduxForm } from 'redux-form';

const Dialogs = (props) => {
    let stateLoc = props.dialogsPage;

    let dialogsElements = stateLoc.dialogs.map(d => <DialogsItem name={d.name} id={d.id} key={d.id} />);
    let messagesElements = stateLoc.messages.map(m => <Message message={m.message} key={m.id} />);

    const addNewMessage = (value) => {
        if (value.dialogsNewMessageForm) {
            props.sendMessage(value.dialogsNewMessageForm);
        }
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__items}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage} />
        </div>
    )
}


const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'textarea'} name={'dialogsNewMessageForm'} placeholder={'Enter you message'} />
            </div>
            <div>
                <button>send</button>
            </div>
        </form>

    )
}
const AddMessageFormRedux = reduxForm({ form: 'dialogsNewMessageForm' })(AddMessageForm)

export default Dialogs;
