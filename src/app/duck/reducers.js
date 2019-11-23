import { default as Types } from './types'

const INITIAL_STATE = {
    loading: false,
    searchValue: '',
    weirdness: 1,
    likedGifs: [],
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
            const { searchTerm } = action;
            return {
                ...state,
                searchTerm,
                loading: true
            }
        }

        case Types.RECEIVE_GIF: {
            const { gifId, gifUrl, gifTitle } = action.gifData;
            return {
                ...state,
                gifId, 
                gifUrl,
                gifTitle,
                loading: false
            }
        }

        case Types.CHANGE_WEIRDNESS: {
            const { weirdness } = action;
            return {
                ...state,
                weirdness: weirdness
            }
        }

        case Types.LIKE_GIF: {
            const { gifId, gifUrl, gifTitle, weirdness } = action;
            return {
                ...state,
                likedGifs: [...state.likedGifs, {gifId: gifId, gifUrl: gifUrl, gifTitle: gifTitle, weirdness: weirdness}]
            }
        }

        case Types.CALCULATE_WEIRDNESS: {
            const { likedGifs } = action;
            return {
                ...state,
                totalWeirdnessScore: likedGifs.map(gif => gif.weirdness).reduce((sum, num) => sum + num) / likedGifs.length
            }
        }
        case Types.START_OVER: {
            return { ...INITIAL_STATE }
        }

        default: return state;
    }
}

export default appReducer