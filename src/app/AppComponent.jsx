import React from 'react';
import { Spinner } from 'react-bootstrap'

function AppComponent({
  searchValue,
  updateSearchValue,
  weirdness,
  changeWeirdness,
  likedGifs,
  likeGif,
  gifData,
  loading,
  onFetchGif,
  calculateWeirdness,
  totalWeirdnessScore,
  startOver
}) {
  let currentGif = function () {
    if (!gifData.gifUrl) {
      return <img src="https://via.placeholder.com/300/808080/000000?text=Please search for a GIF" alt=""></img>
    } else if (loading) {
      return (<Spinner animation="border" role="status"><span className="sr-only">Loading...</span></Spinner>)
    } else if (gifData.gifUrl) {
      return <img id={gifData.gifId} src={gifData.gifUrl} alt=''></img>
    }
  }()

  let isLikeButtonHidden = function () {
    return !gifData.gifUrl || likedGifs.length >= 5 || likedGifs.filter(gif => gif.gifId === gifData.gifId).length > 0
  }()

  let isCalculateButtonHidden = function () {
    return likedGifs.length < 5
  }()

  const homePage = (<div>

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
      <div>{currentGif}</div>

      <label htmlFor="weirdness-slider">Weirdness: {weirdness}</label>
      <input type="range" value={weirdness} onChange={(e) => { changeWeirdness(e.target.value) }} className="custom-range" id="weirdness-slider" min="1" max="10"></input> {/*add onChange*/}

      <button onClick={() => likeGif({ gifData })} style={isLikeButtonHidden ? { visibility: 'hidden' } : null}>Like</button>
    </section>


    <section id="liked-section-home" className="liked-section">
      <h2>Your Liked GIFs</h2>
      <ul>
        {likedGifs.map((gif, index) => (
          <li key={gif.gifId}>
            <p>{gif.gifTitle}</p>
            <img src={gif.gifUrl} alt=''></img>
          </li>
        ))}
      </ul>
      <button onClick={() => calculateWeirdness(likedGifs)} style={isCalculateButtonHidden ? { visibility: 'hidden' } : null}>Calculate Weirdness</button>
    </section>

  </div>
  )

  const resultsPage = <div>
    <section id="results-section">
      <h2>Results</h2>
      <p>You scored {totalWeirdnessScore}/10 on the weirdness scale!</p>
    </section>

    <section id="liked-section-results" className="liked-section">
      <h2>Your Liked Gifs</h2>
      <ul>
        {likedGifs.map((gif, index) => (
          <li key={gif.gifId}>
            <p>{gif.gifTitle}</p>
            <img src={gif.gifUrl} alt=''></img>
            <p>Weirdness: {gif.gifWeirdness}/10</p>
          </li>
        ))}
      </ul>
    </section>

    <section>
      <button onClick={startOver}>Start Over</button>
    </section>
  </div>


  return (
    <div>
      <section id='header-section'>
        <h1>Weirdness Calculator</h1>
      </section>
      {!totalWeirdnessScore ? homePage : resultsPage}
    </div>

  );
}

export default AppComponent;