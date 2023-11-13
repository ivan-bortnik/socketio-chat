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
        <input type="text" placeholder="Message...">
        <button>Send</button>
    </div>

</div>

<script>

// Connect to server
import io from 'socket.io-client';
const ENDPOINT = 'http://localhost:3000';

const socket = io(ENDPOINT);

var messages = [
    {"username": "Bob", "content": "Lorem Ipsum"},
    {"username": "Bob", "content": "Lorem Ipsum"},
    {"username": "Bobette", "content": "Lorem Ipsum"},
    {"username": "Bobette", "content": "Lorem Ipsum"},
    {"username": "Bob", "content": "Lorem Ipsum"}
]

</script>

<style>
    @import "../../static/style.css";
</style>