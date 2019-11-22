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
      return <img src="https://via.placeholder.com/300/808080/000000?text=Please search for a GIF" alt=""></img>
    } else if (loading) {
      return (<Spinner animation="border" role="status"><span className="sr-only">Loading...</span></Spinner>)
    } else if (gifUrl) {
      return <img id={gifId} src={gifUrl} alt=''></img>
    }
  }()

  return (
    <div>
      <section id='header-section'>
        <h1>Weirdness Calculator</h1>
      </section>

      <section id='search-section'>
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


      <section id="current-section">
        <div id="current-gif">
          {currentGif}
        </div>


        <label htmlFor="weirdness-slider">Weirdness: {weirdness}</label>
        <input type="range" value={weirdness} onChange={(e) => { changeWeirdness(e.target.value) }} className="custom-range" id="weirdness-slider" min="1" max="10"></input> {/*add onChange*/}

        <button onClick={() => likeGif({ gifId, gifUrl })} style={gifUrl ? null : { visibility: 'hidden' }}>Like</button>
      </section>


      <section id="liked-section">
        <h2>Your Liked GIFs</h2>
        <div id="liked-gifs">
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
