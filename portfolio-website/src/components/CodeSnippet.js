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
    { text: "    programmingLanguages: [", type: "statement" },
    { text: "        \"Python\", \"JavaScript\", \"C++\", \"SQL\"", type: "statement" },
    { text: "    ],", type: "statement" },
    { text: "    webDevelopment: [", type: "statement" },
    { text: "        \"React.js\", \"HTML\", \"CSS\"", type: "statement" },
    { text: "    ],", type: "statement" },
    { text: "    backendTechnologies: [", type: "statement" },
    { text: "        \"Django\", \"Node.js\"", type: "statement" },
    { text: "    ],", type: "statement" },
    { text: "    database: [", type: "statement" },
    { text: "        \"PostgreSQL\", \"MySQL\"", type: "statement" },
    { text: "    ],", type: "statement" },
    { text: "    AI_ML: [", type: "statement" },
    { text: "        \"OpenAI API\", \"LangChain\", \"NLP\", \"Scikit-learn\",", type: "statement" },
    { text: "        \"TensorFlow\", \"Machine Learning\", \"GenAI\", \"HuggingFace\"", type: "statement" },
    { text: "    ],", type: "statement" },
    { text: "    cloudPlatforms: [", type: "statement" },
    { text: "        \"Docker\"", type: "statement" },
    { text: "    ],", type: "statement" },
    { text: "    devOpsTools: [", type: "statement" },
    { text: "        \"Git\"", type: "statement" },
    { text: "    ]", type: "statement" },
    { text: "};", type: "function" }
  ];

  const styles = {
    codeContainer: {
      fontFamily: "'Fira Code', monospace",
      fontSize: "14px",
      backgroundColor: "#1e1e1e",
      color: "#ffffff",
      padding: "15px",
      borderRadius: "5px",
      whiteSpace: "pre-wrap",
      overflowX: "auto",
      lineHeight: "1.5",
      letterSpacing: "normal",
      wordSpacing: "normal",
    },
    comment: { color: "#6a9955" },
    function: { color: "#dcdcaa" },
    statement: { color: "#9cdcfe" },
  };

  useEffect(() => {
    if (terminalRef.current) {
      const terminal = terminalRef.current;
      Object.assign(terminal.style, styles.codeContainer);
    }
  }, []);
  return (
    <section id="code-snippet" className="code-snippet-section" style={{ maxWidth: '600px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div className="terminal-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '5px 10px', backgroundColor: '#2d2d2d', color: '#fff', borderRadius: '5px 5px 0 0', width: '100%' }}>
        <div className="terminal-buttons" style={{ display: 'flex', gap: '5px' }}>
          <span className="red" style={{ width: '12px', height: '12px', backgroundColor: '#ff5f56', borderRadius: '50%' }}></span>
          <span className="yellow" style={{ width: '12px', height: '12px', backgroundColor: '#ffbd2e', borderRadius: '50%' }}></span>
          <span className="green" style={{ width: '12px', height: '12px', backgroundColor: '#27c93f', borderRadius: '50%' }}></span>
        </div>
        <span className="terminal-title" style={{ fontSize: '14px', fontWeight: 'bold' }}>Skills.c</span>
      </div>
      <div className="code-terminal" ref={terminalRef} style={{ fontSize: '14px', padding: '10px', width: '100%' }}></div>
    </section>
  );
}

export default CodeSnippet;

