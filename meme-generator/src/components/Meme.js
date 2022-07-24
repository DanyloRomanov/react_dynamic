import React from 'react';
import memesData from '../data/memes-data';
import Image from './Image';

export default function Meme() {

    const [meme, setMeme] = React.useState({
        topText: '',
        bottomText: '',
        randomImage: 'https://i.pinimg.com/564x/1d/6e/4c/1d6e4c8a5a2ae45945cf7b46cb6620c8.jpg'
    });

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    function handleChange(event){
        const {value, name} = event.target
        setMeme(currentState=>({
            ...currentState,
            [name]:value
        }))
    }

    function selectRandomImage() {
        const arr = allMemeImages.data.memes;
        const randomIndex = Math.floor(Math.random() * arr.length);
        const { url } = arr[randomIndex];
        setMeme(m => {
            return {
                ...m,
                randomImage: url
            }
        })
    }

    console.log(meme)
    return (
        <main >
            <div className="form">
                <input
                    type="text"
                    className="form--input"
                    placeholder="Top text"
                    name="topText"
                    onChange={handleChange}
                    value={meme.topText}
                ></input>
                <input
                    type="text"
                    className="form--input"
                    placeholder="Bottom text"
                    name="bottomText"
                    onChange={handleChange}
                    value={meme.bottomText}
                ></input>
                <button onClick={selectRandomImage} className="form--button">Generate a new meme</button>
            </div>
            <div className='meme'>
            <Image image={meme.randomImage} />
            <h2 className="meme--text top">{meme.topText}</h2>
            <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    );
}