import React from "react";
import "../components/meme.css"
import memesData from "../memesdata"

export default function Meme(){
    const [meme, setMeme]= React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })
    const [memeImage , setMemeImage] = React.useState(memesData)

    function getMemeImage(e) {
        e.preventDefault()
        const array = memeImage.data.memes
        const randomNumber = Math.floor(Math.random() * array.length)
        const url = array[randomNumber].url
        setMeme(prev=>({
            ...prev,randomImage:url
        }))
    }
    function handleChange(event){
        setMeme(prev=>{
            return{
                ...prev,
                [event.target.name] : event.target.value
            }
        })
    }

    return(
        <main>
        <form type="submit" className="form">
            <input 
              id="text"
                type="text"
                placeholder="Top text"
                className="form--input"
                name="topText"
                onChange={handleChange}
                value = {meme.topText}
            />
            <input 
            id="text2"
                type="text"
                placeholder="Bottom text"
                className="form--input"
                name="bottomText"
                onChange={handleChange}
                value ={meme.bottomText}
            />
            <button 
                className="form--button"
                onClick={getMemeImage}
            >          Get a new meme image 🖼         
            </button>
        </form>
        
        <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
    </main>
    )
}