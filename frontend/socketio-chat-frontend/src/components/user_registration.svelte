<div class="user-registration">
    <div class="user-registration-body">
        <h2>Welcome</h2>
        <input type="text" placeholder="Username" bind:value={ username }>
        <button on:click={ register }>Enter</button>
    </div>
</div>


<script>

import { createEventDispatcher } from 'svelte'
const dispatch = createEventDispatcher()

var username = "";

function register() {
    dispatch('register', {"username": username})
}

</script>


<style>
 
.user-registration {
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.7);
    width: 100vw;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.user-registration-body {
    background-color: #574b90;
    padding: 32px;
    border-radius: 8px;
}

.user-registration-body h2 {
    margin: 0;
}

</style>