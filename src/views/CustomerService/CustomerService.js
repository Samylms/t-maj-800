import React from 'react';
import ChatBot from 'react-simple-chatbot';
import ChatResponse from './components/chat-response.js';

const CustomerService = () => {
    const steps = [
      {
        id: '1',
        message: 'Hey! How can I help you today?',
        trigger: 'ask',
      },
      {
        id: 'ask',
        user: true,
        trigger: '3',
      },
      {
        id: '3',
        component: <ChatResponse />,
        waitAction: true,
        trigger: '1',
      },
    ];

    return (
       <div style={{display: 'flex', justifyContent: 'center', marginTop: '7%'}}>
         
          <ChatBot steps={steps} />
       </div>
    );
}
 
export default CustomerService;
