import React, { useEffect, useState } from "react";

const Spellchecker = () => {
  const [input, setInput] = useState("");
  const [suggest, setSuggest] = useState("");
  const [displaysuggest, setDisplaySuggest] = useState(false);
  const customDictionary = {
    teh: "the",
    wrok: "work",
    fot: "for",
    exampl: "example",
  };
  useEffect(() => {
    
        const spellCheck=()=>{
            const lowerCase=input.toLocaleLowerCase()
        const array=lowerCase.split(" ")
        if(customDictionary[array[array.length-1]]){
            setDisplaySuggest(true)
            setSuggest(customDictionary[array[array.length-1]])
        }
    }
    if(input!=="") spellCheck()
    if(input =="") setDisplaySuggest(false)
    
  }, [input]);

  return (
    <div>
      <h1>Spell Check and Auto-Correction</h1>
      <textarea
        name=""
        value={input}
        id=""
        placeholder="Enter text here..."
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      {displaysuggest?<p>Did you mean: <span style={{fontWeight:"bold"}}><>{suggest}</></span>?</p>:""}
    </div>
  );
};

export default Spellchecker;
