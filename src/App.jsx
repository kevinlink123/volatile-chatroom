import ChatRoom from './components/chatRoom';
import UserNameInput from './components/userNameInput';
import './App.css';

import { initializeApp } from 'firebase/app';

import 'firebase/auth';


initializeApp({
  apiKey: "AIzaSyDEhXtTr7_zGBj7xAzhX7an6HRJl184KdQ",
  authDomain: "cgr-chat-rooms.firebaseapp.com",
  projectId: "cgr-chat-rooms",
  storageBucket: "cgr-chat-rooms.appspot.com",
  messagingSenderId: "721761101475",
  appId: "1:721761101475:web:f6ca534092f2d855a68116"
});



function App() {
  return (
    <div className="mx-auto">
      <header className="App-header stick">
        <img src="https://img.icons8.com/fluency/48/000000/send.png"/>
      </header>
      <div className='container mx-auto'>
        {localStorage.getItem('username') ? <ChatRoom /> : <UserNameInput />}
      </div>
    </div>
  );
}

export default App;
