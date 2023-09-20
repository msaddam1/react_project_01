import React , {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleLowClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
    }
    const handleXtraSpaces=()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    const handleCopy=()=>{
        var text =document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleClClick=()=>{
        let newText='';
        setText(newText);
    }
    const handleOnChange =(event)=>{
        setText(event.target.value)
    }
    const [text, setText]= useState("");
    return (
        <>
        <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                
                <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'#042743'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleXtraSpaces}>Remove Extra Spaces</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-success mx-2" onClick={handleClClick}>Clear Text</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.split(' ').length} words and {text.length} characters</p>
            <p>{text.split(' ').length *0.008 } minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the textbox above to preview it here "}</p>
        </div>
        </>
    )
}
