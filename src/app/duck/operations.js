import Creators from './actions';

const searchForGif = Creators.searchForGif;
const receiveGif = Creators.receiveGif;
const updateSearchValue = Creators.updateSearchValue;
const likeGif = Creators.likeGif;
const changeWeirdness = Creators.changeWeirdness

const fetchGif = (searchTerm, weirdness) => {
    return dispatch => {

        dispatch(searchForGif(searchTerm));
        return fetch(`https://api.giphy.com/v1/gifs/translate?api_key=bHUH8hr9b0iIOx1ZrFFCK4vuWgpxaKEf&s=${searchTerm}&weirdness=${weirdness}`)
            .then(response => response.json())
            .then(json => {
                const result = json.data

                if (!result) {
                    const noGif = {
                        gifId: 'NoGif',
                        gifUrl: 'https://media1.giphy.com/media/l0Iy2hYDgmCjMufzq/giphy.gif?cid=332fceaaaeabdee5b682254ade5b04fdedecf45633207ff1&rid=giphy.gif'
                    }
                    dispatch(receiveGif(noGif))
                } else {
                    const data = {
                        gifId: result.id,
                        gifUrl: result.images.downsized_large.url
                    }
                    dispatch(receiveGif(data))
                }
            });
    }
};

export default {
    fetchGif,
    updateSearchValue,
    likeGif,
    changeWeirdness
}