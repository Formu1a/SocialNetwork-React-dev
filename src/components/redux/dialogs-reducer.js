let ADD_MESSAGE = "ADD-MESSAGE";

let initialState = {
    messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "How are you?" },
        { id: 3, message: "Hi Yatora )" },
        { id: 4, message: "Hi Julia" },
        { id: 5, message: "Hi Dima" },
    ],
    dialogs: [
        { id: 1, name: "Dima" },
        { id: 2, name: "Arina" },
        { id: 3, name: "Anton" },
        { id: 4, name: "Oleg" },
        { id: 5, name: "Igor" },
        { id: 6, name: "Yoto" },
    ],
};

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: 6,
                message: action.newMessageText,
            };
            let stateCopy = { ...state };
            stateCopy.messages = [...state.messages];
            stateCopy.messages.push(newMessage);
            return stateCopy;
        }
        default:
            return state;
    }
};

export const addMessageActionCreator = (newMessageText) => {
    return { type: ADD_MESSAGE, newMessageText };
};

export default dialogReducer;
