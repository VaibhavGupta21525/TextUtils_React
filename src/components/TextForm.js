import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=> {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("success", "Converted to uppercase.");
    }
    const handleLowClick = ()=> {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("success", "Converted to lowercase.");
    }
    const handleClearClick = ()=> {
        setText("")
        props.showAlert("success", "Text Cleared.");
    }
    const handleCopy = () => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("success", "Copied to Clipboard.");
    }
    const handleSpace = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("success", "Extra spaces removed.");
    }
    const handleOnChange = (event)=> {
        setText(event.target.value)
    }
    
    const [text, setText] = useState("");
    return (
    <>
    <div className="container" style={{color: props.mode === "dark" ? "white" : "#042743"}}>
        <h1 className="mb-4">{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} style={{backgroundColor: props.mode === "dark" ? "#13466e" : "white", 
        color: props.mode === "dark" ? "white" : "#042743"}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to uppercase</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>Convert to lowercase</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear text</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy text</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleSpace}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode === "dark" ? "white" : "#042743"}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").filter((element) => {return element.length !== 0}).length} words and {text.length} characters.</p>
        <p>{0.008 * text.split(" ").filter((element) => {return element.length !== 0}).length} Minutes Read.</p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Nothing to preview."}</p>
    </div>
    </>
  )
}
