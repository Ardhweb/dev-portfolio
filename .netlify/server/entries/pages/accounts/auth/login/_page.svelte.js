import { a as attr, p as pop, b as push } from "../../../../../chunks/index3.js";
import "../../../../../chunks/client.js";
function _page($$payload, $$props) {
  push();
  let username = "";
  let password = "";
  $$payload.out += `<div class="min-h-screen flex items-center justify-center bg-gray-100"><div class="bg-white shadow-md rounded-lg p-6 w-full max-w-md"><h1 class="text-2xl font-bold mb-4 text-center">Login</h1> <form class="space-y-4"><div><label for="username" class="block text-sm font-medium text-gray-700">Username</label> <input id="username" type="text"${attr("value", username)} required placeholder="Enter your username" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></div> <div><label for="password" class="block text-sm font-medium text-gray-700">Password</label> <input id="password" type="password"${attr("value", password)} required placeholder="Enter your password" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></div> <button type="submit" class="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Login</button></form> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div></div>`;
  pop();
}
export {
  _page as default
};
