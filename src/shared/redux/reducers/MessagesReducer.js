const initialState = {
    messages: [],
    currentRoom: {},
    currentUser: {},
    text: ''
}

function MessagesReducer(state=initialState, action) {
    switch(action.type) {
        case "MESSAGE_CHANGE":
            return {
                ...state,
                messages: [...state.messages, action.message]
            }
        case "ON_CHANGE":
            return {
                ...state,
                [action.name]: action.value
            }
        case "CURRENTUSER_CHANGE":
            return {
                ...state,
                currentUser: action.currentUser
            }
        case "CURRENT_ROOM":
            return {
                ...state,
                currentRoom: action.currentRoom
            }
        case "RESET_FIELD":
            return {
                ...state,
                text: ''
            }
        default:
            return state
    }
}

export default MessagesReducer;