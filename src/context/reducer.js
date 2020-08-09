
export function reducer(state, action) {
    switch (action.type) {
        case "SET_USER_ID":
            state.userId = action.id
            return { ...state }

        case "SET_USER_MAIL":
            state.userMail = action.mail
            return { ...state }

        case "SET_USER_PASSWORD":
            state.userPassword = action.password
            return { ...state }

        default:
            return state
    }
}