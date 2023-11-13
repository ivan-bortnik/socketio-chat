<div class="page-wrapper">

    <ul class="chat-window">
        {#each messages as msg, index}
            {#if index == 0 || messages[index-1].username != messages[index].username}
                <li class="username">{ msg.username }</li>
            {/if}
            <li class="chat-message">{ msg.content }</li>
        {/each}
    </ul>

    <div class="message-input">
        <input type="text" placeholder="Message..." bind:value={ messageInput }>
        <button on:click={ sendMessage }>Send</button>
    </div>

</div>

<script>

// Connect to server
import io from 'socket.io-client';
const ENDPOINT = 'http://localhost:3000';

const socket = io(ENDPOINT);

var username = "User"

var messages = [
    {"username": "Bob", "content": "Lorem Ipsum"},
    {"username": "Bob", "content": "Lorem Ipsum"},
    {"username": "Bobette", "content": "Lorem Ipsum"},
    {"username": "Bobette", "content": "Lorem Ipsum"},
    {"username": "Bob", "content": "Lorem Ipsum"}
]

var messageInput = "";

function sendMessage() {
    socket.emit("message-sent", {"username": username, "content": messageInput});
    messageInput = "";
}

socket.on("broadcast-message", (newMessage) => {
    messages = [...messages, newMessage];
});

</script>

<style>
    @import "../../static/style.css";
</style>