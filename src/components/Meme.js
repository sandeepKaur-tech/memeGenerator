import React from "react";
import "../components/meme.css"
import memesData from "../memesdata"

export default function Meme(){
    const [memeImage , setMemeImage] = React.useState("")
   // console.log(memesData.data.memes.map(x=>x.url))
    function getMemeImage(e) {
        e.preventDefault()
         const memesArray = memesData.data.memes
         const randomNumber = Math.floor(Math.random() * memesArray.length)
        //  setMemeImage(memesArray[randomNumber].url)
        setMemeImage(memesArray[randomNumber].url)
    }


    return(
        <main>
        <form type="submit" className="form">
            <input 
              id="text"
                type="text"
                placeholder="Top text"
                className="form--input"
            />
            <input 
            id="text2"
                type="text"
                placeholder="Bottom text"
                className="form--input"
            />
            <button 
                className="form--button"
                onClick={getMemeImage}
            >          Get a new meme image 🖼         
            </button>
        </form>
        <div className="memeImage">
        <img src={memeImage}></img>
        </div>
    
    </main>
    )
}