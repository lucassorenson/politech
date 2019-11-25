import React from 'react';
import { Link } from 'react-router-dom'

function ResultsComponent({
    totalWeirdnessScore,
    likedGifs,
    startOver
}) {

    return (<div>
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

        <section id="start-over-section">
            <Link to='/home'>
                <button onClick={startOver}>Start Over</button>
            </Link>
        </section>
    </div>
    )
}

export default ResultsComponent