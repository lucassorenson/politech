import Creators from './actions';

const searchForGif = Creators.searchForGif;
const receiveGif = Creators.receiveGif;
const updateSearchValue = Creators.updateSearchValue;

const fetchGif = (searchTerm) => {
    return dispatch => {

        dispatch(searchForGif(searchTerm));
        return fetch(`https://api.giphy.com/v1/gifs/search?api_key=bHUH8hr9b0iIOx1ZrFFCK4vuWgpxaKEf&q=${searchTerm}&limit=1`)
        .then(response => response.json())
        .then(json => {
            const data = {
                gifId: json.data[0].id,
                gifUrl: json.data[0].images.downsized_large.url
            }

            dispatch(receiveGif(data));
        });
    }
};

export default { 
    fetchGif,
    updateSearchValue
}