import React from 'react';
import { Spinner } from 'react-bootstrap'

function AppComponent({
  searchValue,
  updateSearchValue,
  gifId,
  gifUrl,
  loading,
  onFetchGif
}) {

  let currentGif = function() {
    if(!gifUrl) {
      return <h2>Please search for a GIF</h2>
    } else if (loading) {
      return (<Spinner animation="border" role="status"><span className="sr-only">Loading...</span></Spinner>)
    } else if (gifUrl) {
      return <img id={gifId} src={gifUrl} alt=''></img>
    }
  }()

  return (
    <div>
      <h1>Weirdness Calculator</h1>
      
      <div id="intro">
        <p>Find out how weird you are by selecting the GIFs that make you laugh.
          We'll show you the least weird ones to start, but you can move the slider to make them weirder.

          When you find a GIF you like, press the Like button. 
          Once you like 5 GIFs, we'll show you how weird you are.
        </p>
      </div>
      <div id="search">
        <input onChange={(e) => updateSearchValue(e.target.value)}></input>
        <button onClick={() => onFetchGif(searchValue)}>Get GIF</button>
      </div>
      <div id="current-gif">
        {currentGif}
      </div>
      {/*<div id="liked-gifs">
        <ul>
          {likedGifs.map((gif, index) => (
            <li key={gif.gifId}>
              <img src={gif.gifSrc} alt='There is no GIF here'></img>
            </li>
          ))}
        </ul>
      </div>*/}
    </div>
  );
}

export default AppComponent;
