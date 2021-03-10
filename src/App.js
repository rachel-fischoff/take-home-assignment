import "./App.css";
import React from "react";

function App() {
  const [textInput, setTextInput] = React.useState(`This is
a badly formatted file. This line is pretty long! It's way more than 80 characters! I feel a line wrap coming on!

This      is a second paragraph with extraneous whitespace.`);
  const [textOutput, setTextOutput] = React.useState("");

  const handleChange = (event) => {
    setTextInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    transformText(textInput);
  };

  const removeWhiteSpace = (input) => {
    input = input.replace(/\s+/g, " ");
    return input;
  };

  const createParagraphs = (input) => {
    let maximumLineLength = 80;
    let words = input.split(" ");
    let paragraphArray = [""];
    let currentLine = 0;
    let output = "";

    for (let i = 0; i < words.length; i++) {
      //exception for when there is a word with more than 80 characters
      words[i].length > 80
        ? (maximumLineLength = words[i].length)
        : (maximumLineLength = 80);
      if (
        paragraphArray[currentLine].length + words[i].length >
        maximumLineLength
      ) {
        currentLine++;
        paragraphArray[currentLine] = words[i] + " ";
      } else {
        paragraphArray[currentLine] += words[i] + " ";
      }
    }
    let linesLength = paragraphArray.length;
    for (let i = 0; i < linesLength; i++) {
      output += paragraphArray[i] + "\n";
    }
    return output;
  };

  const transformText = (input) => {
    let output = createParagraphs(removeWhiteSpace(input));
    setTextOutput(output);
  };

  return (
    <div className="App">
      <header>
        <h1 data-testid="header">Career Lab | Take-Home Assignment</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <label>
          <textarea data-testid="input" onChange={handleChange} value={textInput} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <div id="result" data-testid="result">{textOutput}</div>
    </div>
  );
}

export default App;
