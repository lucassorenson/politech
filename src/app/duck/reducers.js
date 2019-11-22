import { default as Types } from './types'

const INITIAL_STATE = {
    loading: false,
    searchValue: ''
}

const appReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {

        case Types.UPDATE_SEARCH_VALUE: {
            const { searchValue } = action;
            return {
                ...state,
                searchValue
            }
        }

        case Types.SEARCH_FOR_GIF: {
            console.log(action.searchTerm)
            const { searchTerm } = action;
            return {
                ...state,
                searchTerm,
                loading: true
            }
        }

        case Types.RECEIVE_GIF: {
            const { gifId, gifUrl } = action.gifData;
            return {
                ...state,
                gifId, 
                gifUrl,
                loading: false
            }
        }

        default: return state;
    }
}

export default appReducer