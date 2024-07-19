import React, { useState } from 'react';
import styles from "./Dictionary.module.css"


const customDictionary=
[

    { word: "React", meaning: "A JavaScript library for building user interfaces." },

    { word: "Component", meaning: "A reusable building block in React." },

    { word: "State", meaning: "An object that stores data for a component." }

]


function Dictionary() {
    const[dictionary]=useState(customDictionary);
    const[inputWord,setInputWord]=useState("")
    const[Definition, setDefinition]=useState("")


    const handleSearch=()=>{
        const word=inputWord.toLowerCase();
        const entry=dictionary.find(item=>item.word.toLowerCase()===word);
        if(entry){
            setDefinition(entry.meaning)
        }else{
            setDefinition("Word not found in the dictionary.")
        }
    }
  return (
    <div className={styles.heading}>
        <h1>Dictionary App</h1>
        <div className={styles.dictionary}>
            <input type='text' value={inputWord} onChange={(e)=>setInputWord(e.target.value)} placeholder='Search for a word...'  />
            <button onClick={handleSearch}>Search</button>
            {/* <strong> <p style={{margin:"0px",padding:"0px"}}>Definition: </p></strong> */}
           {Definition && <p ><strong>Definition:</strong> {Definition}</p>}
          
        </div>
       
        
    </div>
  )
}

export default Dictionary