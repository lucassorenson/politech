import { default as Types } from './types'

const INITIAL_STATE = {
    loading: false,
    gifData: {},
    searchValue: '',
    weirdness: 0,
    likedGifs: [],
}

const homeReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {

        case Types.UPDATE_SEARCH_VALUE: {
            const { searchValue } = action;
            return {
                ...state,
                searchValue
            }
        }

        case Types.SEARCH_FOR_GIF: {
            const { searchTerm } = action;
            return {
                ...state,
                searchTerm,
                loading: true
            }
        }

        case Types.RECEIVE_GIF: {
            const gifData = action.gifData;
            return {
                ...state,
                gifData: { ...gifData },
                loading: false
            }
        }

        case Types.CHANGE_WEIRDNESS: {
            const { weirdness } = action;
            return {
                ...state,
                weirdness: parseInt(weirdness)
            }
        }

        case Types.LIKE_GIF: {
            document.getElementById('search-input').focus()
            const { gifData } = action;
            return {
                ...state,
                likedGifs: [...state.likedGifs, { ...gifData }]
            }
        }

        case Types.UNLIKE_GIF: {
            const { gifId } = action;
            return {
                ...state,
                likedGifs: [...state.likedGifs.filter( gif => gif.gifId !== gifId)]
            }
        }

        case Types.CALCULATE_WEIRDNESS: {
            const { likedGifs } = action;
            return {
                ...state,
                totalWeirdnessScore: likedGifs.map(gif => gif.gifWeirdness).reduce((sum = 0, num) => sum + num) / likedGifs.length
            }
        }

        case Types.START_OVER: {
            return {
                ...INITIAL_STATE
            }
        }

        default: return state;
    }
}

export default homeReducer