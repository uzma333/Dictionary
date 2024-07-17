import React, { useState } from 'react'


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
    <div>
        <h1>Dictionary App</h1>
        <div>
            <input type='text' value={inputWord} onChange={(e)=>setInputWord(e.target.value)} placeholder='Search for a word'/>
            <button onClick={handleSearch}>Search</button>
           <strong> <p>Definition:</p></strong>
           {Definition && <p>{Definition}</p>}
        </div>
       
        
    </div>
  )
}

export default Dictionary