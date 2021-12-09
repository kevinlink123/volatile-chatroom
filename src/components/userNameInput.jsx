

function UserNameInput() {
    return(
        <div className='mx-auto bg-gray-400 h-56 rounded flex flex-wrap justify-center items-center justify-items-end'>
            <div className=''>
                <div className='text-center text-lg font-mono my-4 border rounded animate-bounce'>Please type a username</div>
                <input
                id="submit-input"
                type="text" 
                placeholder="Username"
                className='rounded p-1 m-2'
                />
                <button
                onClick={setUsername}
                className='bg-gray-100 rounded p-1 m-2'
                >Enter!</button>
            </div>
        </div>
    )
}

function setUsername() {
    let username = document.getElementById('submit-input').value;
    if(username.length < 4){
        alert("username too small");
    } else {
        localStorage.setItem("username", JSON.stringify(username));
        window.location.reload();
    }
}

export default UserNameInput;