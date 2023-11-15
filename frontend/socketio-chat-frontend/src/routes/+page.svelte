<div class="page-wrapper">

    {#if isRegistrationFormVisible}
        <UserRegistration on:register={ registerUser }/>
    {/if}

    <ul class="chat-window">
        {#each messages as msg, index}
            {#if index == 0 || messages[index-1].username != messages[index].username}
                <li class="username">{ msg.username }</li>
            {/if}
            <li class="chat-message">{ msg.content }</li>
        {/each}
    </ul>

    <div class="message-input">
        <input
            type="text"
            placeholder="Message..."
            bind:value={ messageInput }
            on:keydown={ sendMesageKeyboard }>
            
        <button on:click={ sendMessage }>Send</button>
    </div>

</div>

<script>

import UserRegistration from '../components/user_registration.svelte';

import io from 'socket.io-client';
const ENDPOINT = 'pc2cdi.ddns.net:3000';

const socket = io(ENDPOINT);

var username = "User"
var isRegistrationFormVisible = true;
var messages = []
var messageInput = "";

function registerUser(e) {
    username = e.detail.username;
    isRegistrationFormVisible = false;
}

function sendMessage() {
    socket.emit("message-sent", {"username": username, "content": messageInput});
    messageInput = "";
}

function sendMesageKeyboard(e) {
    if (e.key == "Enter") {
        sendMessage();
    }
}

socket.on("sync-data", (data) => {
    messages = data;
});

socket.on("broadcast-message", (newMessage) => {
    messages = [...messages, newMessage];
});

</script>

<style>
    @import "../../static/style.css";
</style>