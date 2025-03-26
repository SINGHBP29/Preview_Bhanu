// import React from 'react';
// import ChatBot from 'react-simple-chatbot';
// import { ThemeProvider } from 'styled-components';
// import '../styles/chatbot.css';

// // Steps for the chatbot
// const steps = [
//     {
//         id: '0',
//         message: 'Hey Geek!',
//         trigger: '1',
//     },
//     {
//         id: '1',
//         message: 'Please write your username',
//         trigger: '2',
//     },
//     {
//         id: '2',
//         user: true,
//         trigger: '3',
//     },
//     {
//         id: '3',
//         message: "Hi {previousValue}, how can I help you?",
//         trigger: '4',
//     },
//     {
//         id: '4',
//         options: [
//             { value: 1, label: 'View Courses' },
//             { value: 2, label: 'Read Articles' },
//         ],
//         end: true,
//     },
// ];

// // Custom theme for the chatbot
// const theme = {
//     background: '#C9FF8F',
//     headerBgColor: '#197B22',
//     headerFontSize: '20px',
//     botBubbleColor: '#0F3789',
//     headerFontColor: 'white',
//     botFontColor: 'white',
//     userBubbleColor: '#FF5733',
//     userFontColor: 'white',
// };

// // Chatbot configuration
// const config = {
//     botAvatar: "img.png",
//     floating: true,
// };

// function Chatbot() {
//     return (
//         <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000 }}>
//             <ThemeProvider theme={theme}>
//                 <ChatBot
//                     headerTitle="GeekBot"
//                     steps={steps}
//                     {...config}
//                 />
//             </ThemeProvider>
//         </div>
//     );
// }

// export default Chatbot;