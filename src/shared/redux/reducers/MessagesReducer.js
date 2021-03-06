const initialState = {
    messages: [],
    currentRoom: {},
    currentUser: {},
    usersWhoAreTyping: [],
    userPresence: {
        user: '',
        state: ''
    },
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
        case "USERS_TYPING":
            return {
                ...state,
                usersWhoAreTyping: [...state.usersWhoAreTyping, action.users]
            }
        case "USERS_STOPPED_TYPING":
            return {
                ...state,
                usersWhoAreTyping: state.usersWhoAreTyping.filter(
                    username => username !== action.users
                )
            }
        case "PRESENCE_CHANGE":
            return {
                ...state,
                userPresence: {
                    ...state.userPresence,
                    user: action.user.name,
                    state: action.state.current
                }
            }
        case "USER_JOINED":
            return {
                ...state,
                userPresence: {
                    ...state.userPresence,
                    joined: action.user
                }
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