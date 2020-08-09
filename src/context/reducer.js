  
export function reducer(state, action) {
    switch (action.type) {
        case "SET_USER_ID":
            state.userId = action.id
            return { ...state }

        case "SET_USER_MAIL":
            state.userMail = action.mail
            return { ...state }

        default:
            return state
    }
}