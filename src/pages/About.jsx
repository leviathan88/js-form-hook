import React, { useState } from 'react';
import { Menu } from "../component/Menu";
import '../style/pages/about.css';
import { SVG } from "../component/SVG";

export const About = () => {
    const [rate, setRate] = useState(0);
    const star = []

    const submit = (e) => {
        e.preventDefault();
        const data = {
            feed: e.target.feed.value,
            rate: `${rate} star`
        }

        localStorage.setItem('userFeed', JSON.stringify(data));

        e.target.reset()
        setRate(0)
    };

    const autoResize = (e) => {
        const area = e.target
        area.style.height = '255px'
        area.style.height = `${area.scrollHeight}px`
    }

    const rating = (index) => (index < rate) ? setRate(index) : setRate(index + 1)

    for (let i = 0; i < 5; i++) {
        star.push(
            <SVG
                key={i}
                onClick={() => rating(i)}
                style={{ fill: i < rate ? 'pink' : 'white', cursor: 'pointer' }}
            />
        );
    }

    return (
        <div>
            <Menu />
            <form id="aboutForm" onSubmit={submit}>
                <label htmlFor="feed"> Give feedback : </label>
                <textarea id="feed" name="feed" onChange={autoResize} />
                <p> Rate us : </p>
                <div id="star">{star}</div>
                <button type='submit'> Send </button>
            </form>
        </div>
    );
};