const initialState = {
    messages: []
}

function MessagesReducer(state=initialState, action) {
    switch(action.type) {
        case "MESSAGE_CHANGE":
            return {
                ...state,
                messages: [...state.messages, action.message]
            }
        default:
            return state
    }
}

export default MessagesReducer;