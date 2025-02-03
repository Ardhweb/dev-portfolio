import { e as escape_html, c as bind_props, p as pop, b as push } from "../../../../chunks/index3.js";
function _page($$payload, $$props) {
  push();
  let formResult = $$props["formResult"];
  $$payload.out += `<div class="flex items-center justify-center min-h-screen bg-gray-100">`;
  if (formResult?.success) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<p class="text-green-600 text-center">Record added successfully!</p>`;
  } else {
    $$payload.out += "<!--[!-->";
    if (formResult?.error) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<p class="text-red-600 text-center">Error: ${escape_html(formResult.error)}</p>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]--> <form method="POST" class="space-y-6 bg-white p-8 rounded shadow-md w-full max-w-5xl"><h2 class="text-2xl font-bold text-gray-800 text-center mb-4">Add New Project</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div class="col-span-2"><label class="block"><span class="text-gray-700 font-medium">Project Title:</span> <input type="text" name="projectname" required class="mt-1 w-full p-3 border rounded focus:ring focus:ring-blue-300 outline-none" placeholder="Enter your name"></label></div> <div class="col-span-2"><label class="block"><span class="text-gray-700 font-medium">Brief Description about the project:</span> <input type="text" name="description" required class="mt-1 w-full p-3 border rounded focus:ring focus:ring-blue-300 outline-none" placeholder="Enter your description"></label></div> <div class="col-span-2"><label class="block"><span class="text-gray-700 font-medium">Technology &amp; Framework:</span> <input type="text" name="usedlanguage" required class="mt-1 w-full p-3 border rounded focus:ring focus:ring-blue-300 outline-none" placeholder="Enter technologies used"></label></div> <label class="block"><span class="text-gray-700 font-medium">Start Date:</span> <input type="date" name="start_at" required class="mt-1 w-full p-3 border rounded focus:ring focus:ring-blue-300 outline-none" placeholder="Select start date"></label> <label class="block"><span class="text-gray-700 font-medium">End Date:</span> <input type="date" name="end_at" required class="mt-1 w-full p-3 border rounded focus:ring focus:ring-blue-300 outline-none" placeholder="Select end date"></label> <label class="block"><span class="text-gray-700 font-medium">Primary Category:</span> <input type="number" name="primarycategory" required class="mt-1 w-full p-3 border rounded focus:ring focus:ring-blue-300 outline-none" placeholder="Enter primary category"></label> <label class="block"><span class="text-gray-700 font-medium">Secondary Category:</span> <input type="number" name="secondarycategory" required class="mt-1 w-full p-3 border rounded focus:ring focus:ring-blue-300 outline-none" placeholder="Enter secondary category"></label> <label class="block"><span class="text-gray-700 font-medium">Project Type:</span> <input type="text" name="type" required class="mt-1 w-full p-3 border rounded focus:ring focus:ring-blue-300 outline-none" placeholder="e.g. Freelance, Hobby, Employer"></label> <label class="block"><span class="text-gray-700 font-medium">Production URL:</span> <input type="text" name="live_url" required class="mt-1 w-full p-3 border rounded focus:ring focus:ring-blue-300 outline-none" placeholder="Enter live URL"></label> <label class="block"><span class="text-gray-700 font-medium">Status:</span> <select name="status" required class="mt-1 w-full p-3 border rounded focus:ring focus:ring-blue-300 outline-none" placeholder="Enter project status"><option value="done">Done</option><option value="ongoing">Ongoing</option><option value="completed">Completed</option></select></label></div> <button type="submit" class="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 focus:ring focus:ring-blue-300 focus:outline-none">Add Project Work</button></form></div>`;
  bind_props($$props, { formResult });
  pop();
}
export {
  _page as default
};
