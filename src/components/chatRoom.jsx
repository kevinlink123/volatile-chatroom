import { getFirestore, orderBy, limit ,collection, query, addDoc, serverTimestamp } from 'firebase/firestore';
import { useState } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import ChatMessage from './chatMessage';


function ChatRoom() {
    const db = getFirestore();
    const messagesRef = collection(db, 'messages');
    const messagesQuery = query(messagesRef, orderBy("createdAt"), limit(25));

    const [messages] = useCollectionData(messagesQuery, {idField: 'id'});

    const [formValue, setFormValue] = useState('');

    const handleChange = (e) => {
        setFormValue(e.target.value);
    }
    
    const sendMessages = async(e) => {
        e.preventDefault();
        const username = JSON.parse(localStorage.getItem('username'));

        await addDoc(messagesRef, {
            username: username,
            text: formValue,
            createdAt: serverTimestamp(),
        })
        
        setFormValue('');
    }

    return(
        <div className='mx-auto bg-gray-600 rounded-3xl lg:w-1/3 w-5/6 p-3'>
            <div className='h-5/6'>
                {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} /> )}
            </div>

            <div className='flex justify-center items-center my-10'>
                <form onSubmit={sendMessages}>
                    <input 
                    type="text"
                    className='p-2 rounded-lg mx-2 w-1/2 lg:w-4/6'
                    value={formValue}
                    onChange={handleChange}
                    placeholder="New Message" 
                    />
                    
                    <button
                    className='p-2 bg-blue-400 rounded-lg mx-2'
                    type='submit'
                    >Send
                    </button>
                </form>
            </div>

        </div>
    )
}

export default ChatRoom;