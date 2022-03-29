const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        { id: 1, name: 'Sergey' },
        { id: 2, name: 'Vasa' },
        { id: 3, name: 'Dima' },
        { id: 4, name: 'Lena' }
    ],
    messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'Hello' },
        { id: 3, message: 'Hello world' },
        { id: 4, message: 'Hello piople' }
    ],
    newMessageBody: ''
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            return {
                ...state,
                newMessageBody: action.body
            };
        }
        case SEND_MESSAGE: {
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, { id: 5, message: state.newMessageBody }],
                dialogs: [...state.dialogs, { id: 5, name: 'Lena' }]
            };
        }
        default:
            return state;
    }

}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => {
    return { type: UPDATE_NEW_MESSAGE_BODY, body: body }
};

export default dialogsReducer;