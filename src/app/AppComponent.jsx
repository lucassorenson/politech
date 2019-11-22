import React from 'react';
//import shortid from 'shortid'

function AppComponent({
  gifId,
  gifUrl,
  loading,
  onFetchGif
}) {
  if (loading) {
    return <div>Loading...</div>
  }

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
        <button onClick={onFetchGif}>Get GIF</button>
      </div>
      <div id="current-gif">
    
        <img src={gifUrl} id={gifId} alt="There is no GIF here"></img>
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
