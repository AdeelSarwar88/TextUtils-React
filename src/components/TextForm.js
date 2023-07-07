import React, {useState} from 'react'
import titles from './titles';

export default function TextForm(props) {

    // const [btnText, setBtnText] = useState("Convert to uppercase")
    // const toggleStyle = () => {
    //     if(btnText === "Convert to uppercase") {
    //         let newText = text.toUpperCase();
    //         setText(newText);
    //         setBtnText("Convert to lowercase");
    //     }
    //     else if(btnText === "Convert to lowercase") {
    //         let newText = text.toLowerCase();
    //         setText(newText);
    //         setBtnText("Convert to uppercase");

    //     }
    // }

     const handleUpClick = () => {
         let newText = text.toUpperCase();
         setText(newText);
         props.showAlert("Converted to uppercase!", "success")
    }

     const handleLowClick = () => {
         let newText = text.toLowerCase();
         setText(newText);
         props.showAlert("Converted to lowercase!", "success")
    }

    const handleClrClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text cleared!", "success")
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard!", "success")
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success")
    }

    const capitalize = () => {
        const titleCase = text.toLowerCase().split(' ').map(word => {
          return word.charAt(0).toUpperCase() + word.slice(1);
        }).join(' ');
       setText(titleCase);
       props.showAlert("First words capatilized!", "success")
    }

    // const [theme,setTheme] = useState("light");
    // const [btnClass, setBtnClass] = useState("btn btn-dark mx-1")
    // const [themeBtnText, setThemeBtnText] = useState("Set dark theme")
    
    // const toggleTheme = ()=>{
    //     if(theme==="light"){
    //     setTheme("dark");
    //     setBtnClass("btn btn-light mx-1");
    //     setThemeBtnText("Set light theme");
    //     }
    //     else{
    //     setTheme("light");
    //     setBtnClass("btn btn-dark mx-1");
    //     setThemeBtnText("Set dark theme");

    //     }
    //     console.log(theme);
    // }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    // const [count, setCount] = useState(0); // remember
    const [text, setText] = useState('');
    // text = "new text" // wrong way to change state
    // setText = ("new text") // correct way to change state
  return (
    <>
    <div className="container">
    <title>{titles.home}</title>
        <div className="mb-3">
            <h1>{props.heading}</h1>
        <textarea className="form-control" value={text} /*data-bs-theme={theme}*/ style={{backgroundColor: props.mode === 'dark'? '#212529': 'white',
    color: props.mode === 'dark'? 'white': 'black'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleClrClick}>Clear text</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>CopyText</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button className="btn btn-primary mx-1" onClick={capitalize}>Capitalize first letters</button>
        {/* <button className={btnClass} onClick={toggleTheme}>{themeBtnText}</button> */}




    </div>
    <div className="container my-3">
        <h2>your text summary</h2>
        <p>{text.trim() === '' ? 0 : text.match(/\S+/g).length} words and {text.replace(/\s+/g, '').length} characters</p>
        <p>{0.008*(text.trim() === '' ? 0 : text.match(/\S+/g).length)} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter text to preview"}</p>
    </div>
    </>
  )
}
