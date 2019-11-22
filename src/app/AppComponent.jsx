import React from 'react';
import { Spinner } from 'react-bootstrap'

function AppComponent({
  searchValue,
  updateSearchValue,
  weirdness,
  changeWeirdness,
  likedGifs,
  likeGif,
  gifId,
  gifUrl,
  loading,
  onFetchGif
}) {

  let currentGif = function () {
    if (!gifUrl) {
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

      <section>
        <div id="intro">
          <p>Find out how weird you are by selecting the GIFs that make you laugh.
            We'll show you the least weird ones to start, but you can move the slider to make them weirder.

            When you find a GIF you like, press the Like button.
            Once you like 5 GIFs, we'll show you how weird you are.
        </p>
        </div>
        <div id="search">
          <input onChange={(e) => updateSearchValue(e.target.value)}></input>
          <button onClick={() => onFetchGif(searchValue, weirdness)}>Get GIF</button>
        </div>
      </section>

      <section>
        <div id="current-gif">
          {currentGif}
        </div>
        <div id="slider">
          <label htmlFor="weirdness-slider">Weirdness: {weirdness}</label>
          <input type="range" value={weirdness} onInput={(e) => {changeWeirdness(e.target.value)}} className="custom-range" id="weirdness-slider" min="1" max="10"></input> {/*add onChange*/}
        </div>
        <div id="liked-gifs">
          <button onClick={() => likeGif({ gifId, gifUrl })} style={gifUrl ? null : { visibility: 'hidden' }}>Like</button>
          <ul>
            {likedGifs.map((gif, index) => (
              <li key={gif.gifId}>
                <img src={gif.gifUrl} alt=''></img>
              </li>
            ))}
          </ul>
        </div>
      </section>

    </div>
  );
}

export default AppComponent;
