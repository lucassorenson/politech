import types from './types.js';

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
})

export default { 
    searchForGif,
    receiveGif
 }