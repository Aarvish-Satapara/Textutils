import React, { useState } from 'react'



export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText) 
        props.showAlert("Converted to UpperCase!", "success");
    }
   
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText) 
        props.showAlert("Converted to LowerCase!", "success");
    }
   
    const handleClearClick = ()=>{
        let newText = '';
        setText(newText) 
        props.showAlert("Text cleared", "success");
    }
    
    const handleCopy = ()=>{
        var text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert("Copied!", "success");
    }
    
    const handleExtraSpaces = ()=>{
        var newtext = text.split(/[ ]+/);
        setText(newtext.join(" "));
        props.showAlert("Space has been corrected.", "success");
    }
    
    const handleOnChange = (event)=>{
        setText(event.target.value)
    }

    const [text, setText] = useState("");
  return (
    <>
    <div className="container" style={{ color: props.mode==='dark'?'white':'black'}}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} id="mybox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="container my-3" style={{ color: props.mode==='dark'?'white':'black'}}>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter text to preview"}</p>
    </div>

    </>
  )
}
