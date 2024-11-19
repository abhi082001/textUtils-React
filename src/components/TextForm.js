import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");
    // const [text1, setText1] = useState("");
    const handleUpClick = () => {
        setText(text.toUpperCase())
        props.showAlert("Converted to upperCase!", "success");
    }
    const handleLowClick = () => {
        setText(text.toLowerCase())
        props.showAlert("Converted to lowerCase!", "success");
    }
    const getEmail = () => {
        const emailPattern = /[\w.\d]+@[\w\d]+.(?:com|ac.in|io|ai)/g;
        let newText = text.replace(emailPattern, (email) => `<b>${email}</b>`);
        setText(newText);
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(stripHtmlTags(text.value));
        props.showAlert("Copied to ClipBoard", "success");
    }
    const handleExtraSpaces  = () =>{
        let newText = stripHtmlTags(text);
        newText = newText.split(/[  ]+/);
        setText(newText.join(" "));
    }
    const stripHtmlTags = (text) => {
        // return text.replace(/<\/?b>/g, ''); 
        return text.replace(/<b>/g, '').replace(/<\/b>/g, '').replace(/<B>/g, '').replace(/<\/B>/g, '');
    };
    const clearText = () => {
        setText('');
    }  
  return (
    <>
    <div className='contianer'>
        <h1 style = {{color: props.mode === 'light'?'black':'white'}}>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value = {stripHtmlTags(text)} style = {{backgroundColor: props.mode === 'light'?'white':'#2e3235', color: props.mode === 'light'?'black':'white'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-info mx-2" onClick={handleUpClick}>
            Convert to UpperCase
        </button>
        
        <button className="btn btn-info mx-2" onClick={handleLowClick}>
            Convert to LowerCase
        </button>

        <button className="btn btn-info mx-2" onClick={getEmail}>
            Highlight Email IDs
        </button>

        <button className="btn btn-info mx-2" onClick={handleCopy}>
            Copy Text
        </button>

        <button className="btn btn-info mx-2" onClick={handleExtraSpaces}>
            Remove Extra Spaces
        </button>

        <button className="btn btn-info" onClick={clearText}>
            Clear Text
        </button>
        
    </div>
    <div className="container my-3">
        <h2 style = {{color: props.mode === 'light'?'black':'white'}}>Your text summary</h2>
        <p style = {{color: props.mode === 'light'?'black':'white'}}>{stripHtmlTags(text).split(" ").filter(Boolean).length} words and {stripHtmlTags(text).length} characters</p>
        <p style = {{color: props.mode === 'light'?'black':'white'}}>{0.008 * (stripHtmlTags(text).split(" ").filter(Boolean).length)} minutes to read.</p>
        <h3 style = {{color: props.mode === 'light'?'black':'white'}}>Preview</h3>
        <p dangerouslySetInnerHTML={{ __html: text.length===0?"Enter something to preview it here":text }} style = {{color: props.mode === 'light'?'black':'white'}}></p>
    </div>
    </>
    
  )
}
