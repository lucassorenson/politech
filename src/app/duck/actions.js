import types from './types.js';

const updateSearchValue = (searchValue) => ({
    type: types.UPDATE_SEARCH_VALUE,
    searchValue: searchValue
})

const searchForGif = (searchTerm) => ({
    type: types.SEARCH_FOR_GIF,
    searchTerm: searchTerm
});

const receiveGif = (gifData) => ({
    type: types.RECEIVE_GIF,
    gifData: { ...gifData }
});

const changeWeirdness = (weirdness) => ({
    type: types.CHANGE_WEIRDNESS,
    weirdness: parseInt(weirdness)
})

const likeGif = (gifData) => ({
    type: types.LIKE_GIF,
    gifData: gifData
})

const unlikeGif = (gifId) => ({
    type: types.UNLIKE_GIF,
    gifId: gifId
})

const calculateWeirdness = (likedGifs) => ({
    type: types.CALCULATE_WEIRDNESS,
    likedGifs: likedGifs
})

const startOver = () => ({
    type: types.START_OVER
})

export default { 
    searchForGif,
    receiveGif,
    updateSearchValue,
    changeWeirdness,
    likeGif,
    unlikeGif,
    calculateWeirdness,
    startOver
 }