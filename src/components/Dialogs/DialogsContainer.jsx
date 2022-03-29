import { connect } from 'react-redux';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageCreator())
        },
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body))
        }

    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;


// const DialogsContainer = (props) => {
//     const onSendMessageClick = () => {
//         props.store.dispatch(sendMessageCreator())
//     }
//     const onSendMessageChange = (body) => {
//         props.store.dispatch(updateNewMessageBodyCreator(body))
//     }
//     return (
//         <Dialogs sendMessage={onSendMessageClick}
//             updateNewMessageBody={onSendMessageChange}
//             dialogsPage={props.store.getState().dialogsPage}
//         />
//     )
// }