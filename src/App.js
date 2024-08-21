import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from 'https://esm.sh/@fortawesome/react-fontawesome';
import { faPencil, faFileImport } from 'https://esm.sh/@fortawesome/free-solid-svg-icons';
import { marked } from "https://esm.sh/marked";
import './App.css';

function App() {
  const [input, setInput] = useState(`# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n\nHeres some code, \`<div></div>\`, between 2 backticks.\n\n\`\`\`\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '\\\`\\\`\\\`' && lastLine == '\\\`\\\`\\\`') {\n    return multiLineCode;\n  }\n}\n\`\`\`\n\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.org), and\n\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbered lists too.\n1. Use just 1s if you want!\n1. And last but not least, let's not forget embedded images:\n\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)`);
  const [markdownPreview, setMarkdownPreview] = useState('');

  useEffect(() => {
    handleChange({ target: { value: input } });
  }, []);

  const handleChange = (event) => {
    const inputValue = event.target.value;
    const conversion = marked(inputValue, { breaks: true });
    setInput(inputValue);
    setMarkdownPreview(conversion);
  };
  

  return (
    <div className="body">
      <div id='editorContainer' className="editor-container">
        <div id='editorBar' className="editor-bar">
          <p className="text-style"><FontAwesomeIcon className="icon" icon={faPencil} /> Editor</p>
        </div>
        <textarea
          id="editor"
          name="editor"
          className="text-area"
          value={input}
          onChange={handleChange}
        ></textarea>
      </div>
      <div id='previwerContainer' className="preview-container">
        <div id='previwerBar' className="preview-bar">
          <p className="text-style"><FontAwesomeIcon className="icon" icon={faFileImport} /> Preview</p>
        </div>
        <div
          className="preview-text-area"
          id='preview'
          dangerouslySetInnerHTML={{ __html: markdownPreview }}
        ></div>
      </div>
    </div>
  );
}

export default App;
