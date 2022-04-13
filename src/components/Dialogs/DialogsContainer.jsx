import { connect } from 'react-redux';
import { sendMessageCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { withAuthRedirect } from './../../hoc/withAuthRedirect';
import { compose } from 'redux';


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessage) => {
            dispatch(sendMessageCreator(newMessage))
        }
    }
}

//hoc
// let AuthRedirectComponent = withAuthRedirect(Dialogs) 

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)

// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);
// export default DialogsContainer;


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