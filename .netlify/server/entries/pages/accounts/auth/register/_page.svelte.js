import { a as attr, p as pop, b as push } from "../../../../../chunks/index3.js";
import "../../../../../chunks/client.js";
function _page($$payload, $$props) {
  push();
  let name = "";
  let email = "";
  let username = "";
  let password = "";
  $$payload.out += `<div class="flex items-center justify-center min-h-screen"><div class="bg-white p-6 rounded shadow-md w-full max-w-md"><h1 class="text-2xl font-bold mb-4 text-center">Register</h1> <form><div class="mb-4"><label for="name" class="block text-sm font-medium text-gray-700 mb-1">Your Fullname</label> <input id="name" type="text"${attr("value", name)} required placeholder="Enter your fullname" class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"></div> <div class="mb-4"><label for="username" class="block text-sm font-medium text-gray-700 mb-1">Username</label> <input id="username" type="text"${attr("value", username)} required placeholder="Enter your username" class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"></div> <div class="mb-4"><label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email <span class="text-red">*</span></label> <input id="email" type="text"${attr("value", email)} required placeholder="Enter your email" class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"></div> <div class="mb-4"><label for="password" class="block text-sm font-medium text-gray-700 mb-1">Password</label> <input id="password" type="password"${attr("value", password)} required placeholder="Enter your password" class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"></div> <button type="submit" class="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Register</button></form></div></div> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  pop();
}
export {
  _page as default
};
