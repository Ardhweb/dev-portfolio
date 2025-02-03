import { s as store_get, e as escape_html, u as unsubscribe_stores, p as pop, b as push } from "../../../chunks/index3.js";
import { p as page } from "../../../chunks/stores.js";
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  $$payload.out += `<div class="min-h-screen flex items-center justify-center bg-gray-100"><div class="bg-white shadow-md rounded-lg p-6 w-full max-w-md"><h1>SvelteKit Auth Example</h1> `;
  if (store_get($$store_subs ??= {}, "$page", page).data.session) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<span class="signedInText"><small>Signed in as</small><br> <strong>${escape_html(store_get($$store_subs ??= {}, "$page", page).data.session.user?.name ?? "User")}</strong> <p>Session expiry: ${escape_html(store_get($$store_subs ??= {}, "$page", page).data.session?.expires)}</p></span>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<span class="notSignedInText">You are not signed in</span>`;
  }
  $$payload.out += `<!--]--></div></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _page as default
};
