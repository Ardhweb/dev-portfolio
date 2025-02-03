import { a as attr, e as escape_html } from "../../../chunks/index3.js";
function _page($$payload) {
  let name = "";
  let email = "";
  let message = "";
  let status = "";
  $$payload.out += `<h1 class="text-4xl font-bold text-white text-center mb-6">Contact Us</h1> <form class="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md mx-auto space-y-4"><div><label class="block text-sm font-medium text-gray-300 mb-1">Name:</label> <input type="text"${attr("value", name)} required class="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"></div> <div><label class="block text-sm font-medium text-gray-300 mb-1">Email:</label> <input type="email"${attr("value", email)} required class="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"></div> <div><label class="block text-sm font-medium text-gray-300 mb-1">Message:</label> <textarea required class="w-full px-4 py-2 h-24 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none">`;
  const $$body = escape_html(message);
  if ($$body) {
    $$payload.out += `${$$body}`;
  }
  $$payload.out += `</textarea></div> <button type="submit" class="w-full bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none">Send</button></form> <p class="mt-4 text-center text-sm text-gray-300">${escape_html(status)}</p>`;
}
export {
  _page as default
};
