import React from 'react';
import '../App.css';
import { useState } from 'react';
import { artGal } from '../data.js';

export default function Gallery() {
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);
    const hasNext = index < artGal.length - 1;
    const hasLast = index > 0 || index === artGal.length;

    function handleNextClick() {
        if (hasNext) {
            setIndex(index + 1);
        } else {
            setIndex(0);
        }
    }
    function handleLastClick() {
        if (hasLast) {
            setIndex(index - 1);
        } else {
            setIndex(0);
        }
    }

    let sketch = artGal[index];

    return (
        <>
            <div class="gallery">
                <h1>Some of my best Sketches</h1>
                <button onClick={handleLastClick}>Previous</button><button onClick={handleNextClick}>
                Next
            </button>
                <h2>
                    <i>{sketch.name} </i>
                </h2>
                <h3>
                    ({index + 1} of {artGal.length})
                </h3>

            </div>
            <iframe width="560" height="315" title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen="true"
                    src={sketch.url}
                    alt={sketch.alt}
            />

        </>
    );
}