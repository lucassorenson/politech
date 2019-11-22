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
        gifUrl: gifData.gifUrl
    }
});

const changeWeirdness = (weirdness) => ({
    type: types.CHANGE_WEIRDNESS,
    weirdness: weirdness
})

const likeGif = ({gifId, gifUrl}) => ({
    type: types.LIKE_GIF,
    gifId: gifId,
    gifUrl: gifUrl
})

export default { 
    searchForGif,
    receiveGif,
    updateSearchValue,
    changeWeirdness,
    likeGif
 }