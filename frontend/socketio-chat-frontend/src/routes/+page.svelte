<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>


<script>

// Connect to server
import io from 'socket.io-client';
const ENDPOINT = 'http://localhost:3000';

const socket = io(ENDPOINT);

</script>