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

}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, { id: 5, message: action.newMessage }],
                dialogs: [...state.dialogs, { id: 5, name: 'Lena' }]
            };
        }
        default:
            return state;
    }

}

export const sendMessageCreator = (newMessage) => ({ type: SEND_MESSAGE, newMessage });

export default dialogsReducer;