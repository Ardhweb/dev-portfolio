import { h as head, s as store_get, e as escape_html, d as slot, u as unsubscribe_stores, p as pop, b as push } from "../../../chunks/index3.js";
import "../../../chunks/client.js";
import { p as page } from "../../../chunks/stores.js";
function _layout($$payload, $$props) {
  push();
  var $$store_subs;
  head($$payload, ($$payload2) => {
    $$payload2.out += `<link rel="preconnect" href="https://fonts.googleapis.com"> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin=""> <link href="https://fonts.googleapis.com/css2?family=Afacad+Flux:wght@100..1000&amp;family=Open+Sans:ital,wght@0,300..800;1,300..800&amp;display=swap" rel="stylesheet">`;
  });
  if (store_get($$store_subs ??= {}, "$page", page).data.session) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="flex flex-col h-screen font-dashboard svelte-wwmh06"><nav class="bg-slate-100 px-4 py-3 shadow-md"><div class="flex justify-between items-center"><h1 class="text-md font-bold">SveltePort</h1> <div class="flex items-center space-x-4 text-gray"><button class="bg-slate-300 px-3 py-1 rounded hover:bg-blue-700">Profile</button> <button class="bg-slate-300 px-3 py-1 rounded hover:bg-blue-700">Logout</button> <img src="" alt="User Avatar" class="w-8 h-8 rounded-full border border-gray-700 object-cover"></div></div></nav> <div class="flex flex-1 overflow-hidden"><aside class="w-64 bg-gray-800 text-gray-200 flex flex-col h-screen"><div class="flex flex-col p-4 space-y-4 flex-grow"><a href="/dashboard" class="px-3 py-2 rounded hover:bg-gray-700" sveltekit:prefetch="">Home</a> <a href="/dashboard/media" class="px-3 py-2 rounded hover:bg-gray-700" sveltekit:prefetch="">Media</a> <a href="/dashboard/projects" class="px-3 py-2 rounded hover:bg-gray-700" sveltekit:prefetch="">Projects</a> <a href="/dashboard/settings" class="px-3 py-2 rounded hover:bg-gray-700" sveltekit:prefetch="">Settings</a></div> <footer class="absolute bottom-0 p-4 text-sm text-gray-400 border-t border-gray-700"><p>Logged in as <strong>${escape_html(store_get($$store_subs ??= {}, "$page", page).data.session.user?.name ?? "User")}</strong></p> © ${escape_html((/* @__PURE__ */ new Date()).getFullYear())} SveltePort.v.1</footer></aside> <main class="flex-1 bg-slate-300 p-6 overflow-auto"><!---->`;
    slot($$payload, $$props, "default", {}, null);
    $$payload.out += `<!----></main></div></div>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<h1>Restreicted Area Dude1</h1>`;
  }
  $$payload.out += `<!--]-->`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _layout as default
};
