import { j as ensure_array_like, a as attr, e as escape_html, c as bind_props, p as pop, b as push } from "../../../../chunks/index3.js";
function _page($$payload, $$props) {
  push();
  let data = $$props["data"];
  const { projects } = data;
  const each_array = ensure_array_like(projects);
  $$payload.out += `<main><div class="flex flex-col items-center justify-center p-3 rounded"><h2 class="text-2xl font-bold text-gray-800 text-center mb-4">File Uploading at Cloudnary</h2> <form class="rounded flex flex-col" enctype="multipart/form-data"><div class="bg-gray-50 m-2 rounded flex flex-col px-4 py-3 gap-2"><label for="project-select">*Select a Project:</label> <select required class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" id="project-select"><option value="" disabled selected>Select a project</option><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let project = each_array[$$index];
    $$payload.out += `<option${attr("value", project.id)}>${escape_html(project.projectname)}</option>`;
  }
  $$payload.out += `<!--]--></select></div> <div class="bg-gray-50 m-2 rounded flex flex-col px-2 py-3 gap-3"><input type="file" id="formFile" name="image" required class="svelte-26ck1b">  <button type="button" class="flex items-center justify-center px-40 py-20 rounded-lg shadow-md border-2 border-gray-500 border-dashed"><i class="lni lni-cloud-upload text-7xl"></i> <span class="text-gray-700 text-sm truncate max-w-xs">${escape_html("No file selected")}</span></button> <button type="submit" class="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Upload</button></div></form></div> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></main>`;
  bind_props($$props, { data });
  pop();
}
export {
  _page as default
};
