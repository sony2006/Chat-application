import React from 'react';
import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';


import './App.css';

const App = () => {
  const projectID = 'f22828ef-16a3-4db4-99b7-38e7112c7bc3';
  if (!localStorage.getItem('username')) return <LoginForm/>

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName="Sony"
      userSecret="7386"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps }/>}
    />
  );
}

export default App;
