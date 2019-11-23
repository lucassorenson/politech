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
    gifData: {
        gifId: gifData.gifId,
        gifUrl: gifData.gifUrl,
        gifTitle: gifData.gifTitle
    }
});

const changeWeirdness = (weirdness) => ({
    type: types.CHANGE_WEIRDNESS,
    weirdness: parseInt(weirdness)
})

const likeGif = ({gifId, gifUrl, gifTitle, weirdness}) => ({
    type: types.LIKE_GIF,
    gifId: gifId,
    gifUrl: gifUrl,
    gifTitle: gifTitle,
    weirdness: weirdness
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
    calculateWeirdness,
    startOver
 }