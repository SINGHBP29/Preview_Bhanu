// import React, { useEffect, useRef } from 'react';
// import '../styles/contact.css';

// function Contact() {
//   const terminalRef = useRef(null);

//   useEffect(() => {
//     if (terminalRef.current) {
//       const terminal = terminalRef.current;
      
//       // Simulate typing effect
//       const contactLines = [
//         { text: "// Contact Information", type: "comment" },
//         // { text: "Name: Bhanu Prata", type: "info" },
//         { text: "Email: bhanups292004@gmail.com", type: "info" },
//         { text: "Phone: +91 7047097971", type: "info" },
//         // { text: "Website: www.johndoe.com", type: "info" }
//       ];

//       // Remove any existing content
//       while (terminal.firstChild) {
//         terminal.removeChild(terminal.firstChild);
//       }

//       let lineIndex = 0;
//       let charIndex = 0;
      
//       const typeText = () => {
//         if (lineIndex < contactLines.length) {
//           const line = contactLines[lineIndex];
          
//           if (charIndex === 0) {
//             const lineDiv = document.createElement('div');
//             lineDiv.className = `code-line ${line.type}`;
//             terminal.appendChild(lineDiv);

//             const contentSpan = document.createElement('span');
//             contentSpan.className = 'line-content';
//             lineDiv.appendChild(contentSpan);
//           }
          
//           const currentLine = terminal.lastChild;
//           const contentSpan = currentLine.querySelector('.line-content');
          
//           if (charIndex < line.text.length) {
//             contentSpan.innerHTML += line.text.charAt(charIndex);
//             charIndex++;
//             setTimeout(typeText, Math.random() * 50 + 30);
//           } else {
//             lineIndex++;
//             charIndex = 0;
//             setTimeout(typeText, 300);
//           }
//         }
//       };
      
//       setTimeout(typeText, 500);
//     }
//   }, []);

//   return (
//     <section id="contact" className="contact-section">
//       <div className="terminal-header">
//         <div className="terminal-buttons">
//           <span className="red"></span>
//           <span className="yellow"></span>
//           <span className="green"></span>
//         </div>
//         <span className="terminal-title">Contact.txt</span>
//       </div>
//       <div className="contact-terminal" ref={terminalRef}></div>
//     </section>
//   );
// }

// export default Contact;

// import React, { useState } from 'react';
// import '../styles/contact.css';

// function Contact() {
//   const [messageSent, setMessageSent] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setMessageSent(true);
//     setTimeout(() => setMessageSent(false), 3000);
//   };

//   return (
//     <section id="contact" className="contact-section">
//       <h2>CONTACT WITH ME</h2>
//       <p>
//         If you have any questions or concerns, please don't hesitate to contact me. I am open to any work opportunities that align with my skills and interests.
//       </p>
//       <div className="contact-container">
//         <form onSubmit={handleSubmit} className="contact-form">
//           <label>Your Name:</label>
//           <input type="text" placeholder="Enter your name" required />
          
//           <label>Your Email:</label>
//           <input type="email" placeholder="Enter your email" required />
          
//           <label>Your Message:</label>
//           <textarea placeholder="Enter your message" required></textarea>
          
//           <button type="submit" className="send-button">Run Code</button>
//           {messageSent && <p className="success-message">Message sent successfully!</p>}
//         </form>
        
//         <div className="contact-info">
//           <p><span className="icon">@</span> bhanups292004@gmail.com</p>
//           <p><span className="icon">📞</span> +91 7047097971</p>
//           <p><span className="icon">📍</span> India</p>
//           <div className="social-links">
//             <a href="https://www.linkedin.com/in/bhanups292004" target="_blank" rel="noopener noreferrer">
//               <img src="/icons/linkedin.svg" alt="LinkedIn" className="social-icon" />
//             </a>
//             <a href="https://github.com/bhanups292004" target="_blank" rel="noopener noreferrer">
//               <img src="/icons/github.svg" alt="GitHub" className="social-icon" />
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Contact;

import React, { useState } from 'react';
import '../styles/contact.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="terminal-header">
        <div className="terminal-buttons">
          <span className="red"></span>
          <span className="yellow"></span>
          <span className="green"></span>
        </div>
        <span className="terminal-title">Compiler Output</span>
      </div>

      <div className="contact-terminal">
        {submitted ? (
          <div className="terminal-output">
            <p>Compiling...</p>
            <p>Execution started.</p>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Message: {message}</p>
            <p className="success-message">📩 Message Sent Successfully! ✅</p>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>Your Name:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

            <label>Your Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

            <label>Your Message:</label>
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} required />

            <button type="submit">Run Code 🖥️</button>
          </form>
        )}
      </div>

      <div className="contact-info">
        <div className="details">
          <p><strong>Email:</strong> bhanups292004@gmail.com</p>
          // <p><strong>Phone:</strong> +91 7047097971</p>
          <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/bpsingh29/" target="_blank" rel="noopener noreferrer">linkedin.com/in/bhanu</a></p>
          <p><strong>GitHub:</strong> <a href="https://github.com/SINGHBP29" target="_blank" rel="noopener noreferrer">github.com/SINGHBP29</a></p>
          <p><strong>Medium:</strong> <a href="https://medium.com/@23f1002439" target="_blank" rel="noopener noreferrer">medium.com/@23f1002439</a></p>
        </div>
      </div>
{/* 
      <div className="message-bot">
        <p>🤖 Hi there! I'm your personal assistant bot. Feel free to ask me anything about my resume, projects, or this website. How can I assist you today?</p>
        <textarea placeholder="Type your question here..." className="bot-input"></textarea>
        <button className="bot-send-button">Send</button>
      </div>

      <div className="message-icon">
        <button className="message-icon-button">💬</button>
      </div> */}
    </section>
  );
}


export default Contact;
