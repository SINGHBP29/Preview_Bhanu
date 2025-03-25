import React, { useEffect, useRef } from 'react';
import '../styles/CodeSnippet.css';

function CodeSnippet() {
  const terminalRef = useRef(null);

  useEffect(() => {
    if (terminalRef.current) {
      const terminal = terminalRef.current;
      
      // Simulate typing effect
      // const codeLines = [
      //   { text: "// Project: Code Snippet Display", type: "comment" },
      //   { text: "#include <stdio.h>", type: "directive" },
      //   { text: "", type: "blank" },
      //   { text: "int main() {", type: "function" },
      //   { text: "    printf(\"Welcome to My Project!\\n\");", type: "statement" },
      //   { text: "    return 0;", type: "statement" },
      //   { text: "}", type: "function" }
      // ];

      // Remove any existing content
      while (terminal.firstChild) {
        terminal.removeChild(terminal.firstChild);
      }

      const cursorSpan = document.createElement('span');
      cursorSpan.className = 'cursor';
      cursorSpan.innerHTML = '&nbsp;';
      
      let lineIndex = 0;
      let charIndex = 0;
      
      const typeText = () => {
        if (lineIndex < codeLines.length) {
          const line = codeLines[lineIndex];
          
          if (charIndex === 0) {
            const lineDiv = document.createElement('div');
            lineDiv.className = `code-line ${line.type}`;
            terminal.appendChild(lineDiv);
            
            // Add line number
            const lineNumber = document.createElement('span');
            lineNumber.className = 'line-number';
            lineNumber.textContent = (lineIndex + 1).toString().padStart(2, '0');
            lineDiv.appendChild(lineNumber);
            
            // Add content container
            const contentSpan = document.createElement('span');
            contentSpan.className = 'line-content';
            lineDiv.appendChild(contentSpan);
          }
          
          const currentLine = terminal.lastChild;
          const contentSpan = currentLine.querySelector('.line-content');
          
          if (charIndex < line.text.length) {
            // Add the next character
            contentSpan.innerHTML += line.text.charAt(charIndex);
            
            charIndex++;
            setTimeout(typeText, Math.random() * 50 + 30);
          } else {
            // Move to next line
            lineIndex++;
            charIndex = 0;
            setTimeout(typeText, 300);
          }
        }
      };
      
      // Start typing effect
      setTimeout(typeText, 500);
    }
  }, []);

  const codeLines = [
    { text: "// Skills & Technologies", type: "comment" },
    { text: "const skills = {", type: "function" },
    { text: "    programmingLanguages: [\"Python\", \"JavaScript\", \"C++\", \"SQL\"],", type: "statement" },
    { text: "    webDevelopment: [\"React.js\", \"HTML\", \"CSS\"],", type: "statement" },
    { text: "    backendTechnologies: [\"Django\", \"Node.js\"],", type: "statement" },
    { text: "    database: [\"PostgreSQL\", \"MySQL\"],", type: "statement" },
    { text: "    AI_ML: [\"OpenAI API\", \"LangChain\", \"NLP\", \"Scikit-learn\", \"TensorFlow\",\"Machine Learning\",\"GenAI\",\"HuggingFace\"],", type: "statement" },
    { text: "    cloudPlatforms: [\"Docker\"],", type: "statement" },
    { text: "    devOpsTools: [\"Docker\", \"Git\"],", type: "statement" },
    // { text: "    dataVisualization: [\"Tableau\", \"Seaborn\", \"Matplotlib\"],", type: "statement" },
    { text: "};", type: "function" }
];


  return (
    <section id="code-snippet" className="code-snippet-section" style={{ maxWidth: '600px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div className="terminal-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '5px 10px', backgroundColor: '#2d2d2d', color: '#fff', borderRadius: '5px 5px 0 0', width: '100%' }}>
        <div className="terminal-buttons" style={{ display: 'flex', gap: '5px' }}>
          <span className="red" style={{ width: '12px', height: '12px', backgroundColor: '#ff5f56', borderRadius: '50%' }}></span>
          <span className="yellow" style={{ width: '12px', height: '12px', backgroundColor: '#ffbd2e', borderRadius: '50%' }}></span>
          <span className="green" style={{ width: '12px', height: '12px', backgroundColor: '#27c93f', borderRadius: '50%' }}></span>
        </div>
        <span className="terminal-title" style={{ fontSize: '14px', fontWeight: 'bold' }}>CodeSnippet.c</span>
      </div>
      <div className="code-terminal" ref={terminalRef} style={{ fontSize: '14px', padding: '10px', width: '100%' }}></div>
    </section>
  );
}

export default CodeSnippet;
