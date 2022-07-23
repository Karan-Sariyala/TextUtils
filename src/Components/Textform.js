import React, { useState } from 'react'

export default function Textform(props) {
    // Function to convert text to Uppercase;
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }
    // Function to convert text to Lowercase;
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    // Function to handle onChange event
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    // Function to remove empty spaces
    const removeEmptySpaces = () => {
        let newText = text.replace(/[ ][ ]*/g, ' ');
        setText(newText);
    }
    // Function to remove line breaks
    const removeLineBreaks = () => {
        let newText = text.replace(/\n/g, ' ');
        setText(newText);
    }
    // Function to copy text to clipboard
    const copyText = () => {
        let selector = document.getElementById("myBox")
        navigator.clipboard.writeText(selector.value)
    }
    // Function to listen to text
    const listenToText = () => {
        if (voiceLoaded()) {
            speak();
        } else {
            speechSynthesis.addEventListener('voiceschanged', speak);
        }
        function speak() {
            const msg = new SpeechSynthesisUtterance();
            let voices = window.speechSynthesis.getVoices();
            msg.voice = voices[2];
            msg.text = text;
            window.speechSynthesis.speak(msg);
        }

        function voiceLoaded() {
            return speechSynthesis.getVoices().length;
        }
    }
    const [text, setText] = useState("");
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white' }} id="myBox" rows="10"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={listenToText}>Listen to Text</button>
                <button className="btn btn-secondary mx-2" onClick={removeEmptySpaces}>Remove spaces</button>
                <button className="btn btn-primary mx-2" onClick={removeLineBreaks}>Remove line breaks</button>
                <button className="btn btn-secondary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-secondary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
            </div>
            <div className="container my-4" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h3>Your text summary</h3>
                <p> {text.split(" ").length} words and {text.length} characters</p>
                <div className='preview d-flex justify-content-between'>
                    <h3>Preview</h3>
                    <button type="button" class="btn btn-outline-primary" onClick={copyText}>Copy</button>
                </div>
                <p>{text}</p>
            </div>
        </>
    )
}
