const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        { id: 1, name: 'Vika' },
        { id: 2, name: 'Lena' },
        { id: 3, name: 'Dima' },
        { id: 4, name: 'Groot' }
    ],
    messages: [
        { id: 1, message: 'hi' },
        { id: 2, message: 'where other people ?' },
        { id: 3, message: 'hello guys :)' },
        { id: 4, message: 'I am groot )))' }
    ],

}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, { id: state.messages.length, message: action.newMessage }],
                dialogs: [...state.dialogs, { id: 5, name: 'Lena' }]
            };
        }
        default:
            return state;
    }

}

export const sendMessageCreator = (newMessage) => ({ type: SEND_MESSAGE, newMessage });

export default dialogsReducer;