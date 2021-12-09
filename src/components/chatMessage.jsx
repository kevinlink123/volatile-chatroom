

function ChatMessage(props) {
    const {text, username } = props.message;
    const signedUsername = JSON.parse(localStorage.getItem('username'));
    const className = username === signedUsername ? 'sender' : 'reciever';
    return(
        <div className={className + ' my-3 p-2 rounded-3xl'}>
            <b><i>{username}:</i></b> {text}
        </div>
    )
}

export default ChatMessage;