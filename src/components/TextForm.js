import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(
            newText
        )
    }
    const handleCopyClick = () => {

        let selectText = document.getElementById("myBox");
        selectText.select();
        navigator.clipboard.writeText(selectText.value);
    }

    const handleExtraSpacesClick = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const handleClearClick = () => {
        let newText = ("");
        setText(
            newText
        )
    }

    const wordCount = () => {
        return text.split(" ").filter((item) => { return item.length !== 0 }).length;
    }

    const [text, setText] = useState("");
    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">

                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="7"></textarea>
                </div>
                <button className="btn btn-primary mx-1  my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to lowerCase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear text</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>Copy Text</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpacesClick}>Remove extraSpaces</button>
            </div>
            <div className="container my-3">
                <h1>Your Text Summary</h1>
                <p>{wordCount()} words, {text.length} characters</p>
                <p>{0.008 * wordCount()} minutes read</p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </>
    )
}
