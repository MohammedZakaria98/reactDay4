const InitialState = {
    isFavorite: []
}

export default function favoriteReducer(state = InitialState, action) {
    switch (action.type) {
        case "FAVORITE":
            return { ...state, isFavorite: action.payload }

        default:
            return state
    }
}