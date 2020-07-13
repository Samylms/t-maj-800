import React from 'react';
import ChatBot from 'react-simple-chatbot';

const CustomerService = () => {
    const steps = [
        {
          id: '0',
          message: 'Salut petit con, veux-tu connaître quel temps il fera demain ?!',
          trigger: '1',
        },
        {
            id: '1',
            user: true,
            trigger: '2',
          },
        {
          id: '2',
          message: 'ok... attends un peu !',
          end: true,
        },
      ];

    return (
       <div style={{display: 'flex', justifyContent: 'center', marginTop: '7%'}}>
         
          <ChatBot steps={steps} />
       </div>
    );
}
 
export default CustomerService;