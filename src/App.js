import fugitive from './images/EnemyOfTheState.png';
import './App.css';
import { useState } from 'react';
import {artGal} from './data.js';

export default function Gallery() {
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);
    const hasNext = index < artGal.length - 1;
    const hasPrev = index > 0 || index === artGal.length;


    function handlePrevClick() {
        if (hasPrev) {
            setIndex(index - 1);
        } else {
            setIndex(0);
        }
    }
    function handleNextClick() {
        if (hasNext) {
            setIndex(index + 1);
        } else {
            setIndex(0);
        }
    }

    function handleMoreClick() {
        setShowMore(!showMore);
    }

    let sculpture = artGal[index];
    return (
        <>
            <h1>Gallery of Sketches</h1>
            <button onClick={handleNextClick}>
                Next
            </button>
            <button onClick={handlePrevClick}>
                Previous
            </button>
            <h2>
                <i>{sculpture.name} </i>
                by {sculpture.artist}
            </h2>
            <h3>
                ({index + 1} of {artGal.length})
            </h3>
            <button onClick={handleMoreClick}>
                {showMore ? 'Hide' : 'Show'} details
            </button>
            {showMore && <p>{sculpture.description}</p>}
            <img
                src={sculpture.url}
                alt={sculpture.alt}
            />
        </>
    );
}

//function App() {
//  return (
//    <div className="App">
//      <header className="App-header">
//        <img src={fugitive} className="App-logo" alt="logo" />
//        <p>
//          Edit <code>src/App.js</code> and save to reload.
//        </p>
//        <a
//          className="App-link"
//          href="https://reactjs.org"
//          target="_blank"
//          rel="noopener noreferrer"
//        >
//          Learn React
//        </a>
//      </header>
//    </div>
//  );
//}
//export default App;
