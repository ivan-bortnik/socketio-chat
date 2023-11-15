import { c as create_ssr_component, d as createEventDispatcher, f as add_attribute, v as validate_component, h as each, e as escape } from "../../chunks/ssr.js";
import io from "socket.io-client";
const user_registration_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".user-registration.svelte-mo2see.svelte-mo2see{position:absolute;left:0;top:0;background-color:rgba(0, 0, 0, 0.7);width:100vw;height:100vh;display:flex;align-items:center;justify-content:center;text-align:center}.user-registration-body.svelte-mo2see.svelte-mo2see{background-color:#574b90;padding:32px;border-radius:8px}.user-registration-body.svelte-mo2see h2.svelte-mo2see{margin:0}",
  map: null
};
const User_registration = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  var username = "";
  $$result.css.add(css$1);
  return `<div class="user-registration svelte-mo2see"><div class="user-registration-body svelte-mo2see"><h2 class="svelte-mo2see" data-svelte-h="svelte-xssljm">Welcome</h2> <input type="text" placeholder="Username"${add_attribute("value", username, 0)}> <button data-svelte-h="svelte-1rpury5">Enter</button></div> </div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '@import "../../static/style.css";',
  map: null
};
const ENDPOINT = "pc2cdi.ddns.net:3000";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const socket = io(ENDPOINT);
  var messages = [];
  var messageInput = "";
  socket.on("sync-data", (data) => {
    messages = data;
  });
  socket.on("broadcast-message", (newMessage) => {
    messages = [...messages, newMessage];
  });
  $$result.css.add(css);
  return `<div class="page-wrapper">${`${validate_component(User_registration, "UserRegistration").$$render($$result, {}, {}, {})}`} <ul class="chat-window">${each(messages, (msg, index) => {
    return `${index == 0 || messages[index - 1].username != messages[index].username ? `<li class="username">${escape(msg.username)}</li>` : ``} <li class="chat-message">${escape(msg.content)}</li>`;
  })}</ul> <div class="message-input"><input type="text" placeholder="Message..."${add_attribute("value", messageInput, 0)}> <button data-svelte-h="svelte-189jxf5">Send</button></div> </div>`;
});
export {
  Page as default
};
