import { j as ensure_array_like, a as attr, m as stringify, e as escape_html, c as bind_props, p as pop, f as fallback, b as push, s as store_get, u as unsubscribe_stores } from "../../chunks/index3.js";
import "../../chunks/client.js";
import { p as page } from "../../chunks/stores.js";
function Navbar($$payload) {
  $$payload.out += `<div><nav class="flex justify-center items-center py-1"><ul class="flex space-x-8 transition-all duration-300 ease-in-out" id="nav-list"><li class="relative"><a href="#about" class="text-xs text-gray-600">Contact</a></li> <li class="relative"><a href="#about" class="text-xs text-gray-600">About</a></li> <li class="relative"><a id="active-item" href="#home" class="border-gray-700 bg-gray-700 text-white px-16 py-2 pt-3 rounded-full opacity-90 h-fit transition-all ease-in-out">Home</a></li> <li class="relative"><a href="#section-projects-history" class="text-xs text-gray-600">Work</a></li> <li class="relative"><a href="#services" class="text-xs text-gray-600">Service</a></li></ul></nav></div>`;
}
function HowWeWork($$payload) {
  $$payload.out += `<section class="py-16 bg-black text-white"><div class="container mx-auto"><h4 class="text-center text-white text-[3.5rem]">How We Work !</h4> <p class="mt-2 text-center text-sm font-medium text-gray-200">We follow a structured, collaborative process for success.</p> <div class="relative mt-12"><div class="absolute inset-y-0 left-1/2 transform -translate-x-1/2 w-[2px] animate-pluse hover:animate-pluse border-gray-600 border-dashed border"></div> <div class="p-3 bg-center bg-cover min-h-[200px]"><div class="relative flex items-center"><div class="w-1/2 text-right pr-8"><div class="inline-block text-left"><h3 class="text-2xl font-medium">Understand Business &amp; Requirements</h3> <p class="mt-2 text-gray-400">Analyze your goals to create a detailed roadmap.</p></div></div> <div class="absolute -top-4 left-1/2 transform -translate-x-1/2"><p class="text-white text-4xl">•</p></div></div></div> <div class="p-3 bg-center bg-cover min-h-[200px]"><div class="relative flex items-center"><div class="relative w-1/2"></div> <div class="w-1/2 text-left pl-8"><div class="inline-block text-left"><h3 class="text-2xl font-medium">Design Stage</h3> <p class="mt-2 text-gray-400">Crafting innovative, user-friendly designs and prototypes.</p></div></div> <div class="absolute -top-4 left-1/2 transform -translate-x-1/2"><p class="text-white text-4xl">•</p></div></div></div> <div class="p-3 bg-center bg-cover min-h-[200px]"><div class="relative flex items-center"><div class="w-1/2 text-right pr-8"><div class="inline-block text-left"><h3 class="text-2xl font-medium">Development</h3> <p class="mt-2 text-gray-400">Building scalable, high-performance applications.</p></div></div> <div class="relative w-1/2"></div> <div class="absolute -top-4 left-1/2 transform -translate-x-1/2"><p class="text-white text-4xl">•</p></div></div></div> <div class="p-3 bg-center bg-cover min-h-[200px]"><div class="relative flex items-center"><div class="relative w-1/2"></div> <div class="w-1/2 text-left pl-8"><div class="inline-block text-left"><h3 class="text-2xl font-medium">Testing</h3> <p class="mt-2 text-gray-400">Ensuring flawless functionality with rigorous testing.</p></div></div> <div class="absolute -top-4 left-1/2 transform -translate-x-1/2"><p class="text-white text-4xl">•</p></div></div></div> <div class="p-3 bg-center bg-cover min-h-[200px]"><div class="relative flex items-center"><div class="w-1/2 text-right pr-8"><div class="inline-block text-left"><h3 class="text-2xl font-medium">Feedback &amp; Redesign</h3> <p class="mt-2 text-gray-400">Refining with your feedback for the best outcome.</p></div></div> <div class="relative w-1/2"></div> <div class="absolute -top-4 left-1/2 transform -translate-x-1/2"><p class="text-white text-4xl">•</p></div></div></div></div></div></section>`;
}
function Footer($$payload) {
  $$payload.out += `<footer class="bg-gray-900"><section class="p-8 min-h-fit"><div class="flex text-white px-4 py-4"><div class="flex flex-col"><h2 class="w-auto font-medium text-6xl py-4">Available for Freelancing</h2> <p class="py-3 text-base font-light tracking-light">If you're looking for a freelance developer to help bring your idea into life <br> and you're tight timeline or stuck technical error - let just have a tea.</p> <div class="flex justify-between gap-16 w-full mt-2"><div class="flex gap-5"><button class="tracking-wider font-light bg-white text-black rounded-full py-[0.345rem] px-4 border border-gray-300 rounded shadow hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"><a href="mailto:sun.projectsdev@gmail.com">hi@ardhweb.com</a></button> <p class="tracking-wider font-light py-[0.345rem] px-4 rounded">text +91-91720 58785</p></div> <div class="w-auto flex inline-block gap-3 mt-2"><a class="text-2xl"><i class="lni lni-github"></i></a>   <a class="text-2xl"><i class="lni lni-linkedin"></i></a>  <a class="text-2xl"><i class="lni lni-youtube"></i></a>  <a class="text-2xl"><i class="lni lni-whatsapp"></i></a></div></div></div></div></section></footer>`;
}
function ContactModal($$payload) {
  $$payload.out += `<section><div id="contactModal" class="fixed inset-0 z-50 hidden items-center justify-center bg-black bg-opacity-70"><section class="flex flex-col p-8 max-w-lg mx-auto bg-black relative"><h4 class="text-white text-[2.5rem] text-center mb-3">Get in touch</h4> <div class="flex items-center justify-center relative"><div class="absolute w-full max-w-2xl h-full top-0 right-0 bg-blue-800 opacity-30 blur-3xl transform rotate-6 translate-x-10 translate-y-10 pointer-events-none"></div> <div class="relative w-full max-w-2xl p-8 bg-gray-900"><form action="#" method="post" class="space-y-4"><div><label for="name" class="block mb-1 text-lg font-medium text-gray-300">Name</label> <input type="text" id="name" name="name" class="w-full px-4 py-1 text-white bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" required></div> <div class="grid grid-cols-1 gap-4 md:grid-cols-2"><div><label for="email" class="block mb-1 text-lg font-medium text-gray-300">Email</label> <input type="email" id="email" name="email" class="w-full px-4 py-1 text-white bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" required></div> <div><label for="phone" class="block mb-1 text-lg font-medium text-gray-300">Phone</label> <input type="tel" id="phone" name="phone" class="w-full px-4 py-1 text-white bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" required></div></div> <div><label for="query" class="block mb-1 text-lg font-medium text-gray-300">Query</label> <textarea id="query" name="query" rows="4" class="w-full px-4 py-1 text-white bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea></div> <div class="flex justify-center mt-6"><button type="submit" class="py-2 px-5 border border-white text-white hover:bg-white hover:text-black tracking-wider">Let's build together</button></div></form></div></div> <button class="absolute top-2 right-2 text-white text-lg font-bold hover:text-gray-400">✕</button></section></div> <script>
      function toggleModal() {
        const modal = document.getElementById("contactModal");
        modal.classList.toggle("hidden");
        modal.classList.toggle("flex");
      }
    <\/script></section>`;
}
function Work($$payload, $$props) {
  push();
  let projects = fallback($$props["projects"], () => [], true);
  let len_total_proj = $$props["len_total_proj"];
  let first_project_id = $$props["first_project_id"];
  let siz = len_total_proj - 3;
  let mprojects = [];
  const each_array_1 = ensure_array_like(mprojects);
  $$payload.out += `<section id="section-projects-history" class="flex flex-col p-8 min-h-screen"><h4 class="flex-first text-white text-[3.5rem]">Recent Work</h4> `;
  if (projects.length > 0) {
    $$payload.out += "<!--[-->";
    const each_array = ensure_array_like(projects);
    $$payload.out += `<!--[-->`;
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let project = each_array[$$index];
      $$payload.out += `<div${attr("id", `projectGrid${stringify(project.id)}`)} class="mt-6 relative grid grid-cols-5 gap-4 p-6 text-center border border-gray-700 rounded-lg transition-all duration-300 ease-in-out bg-gray-800 hover:bg-opacity-50 hover:bg-cover hover:bg-[url('https://picsum.photos/536/354')]"><div class="col-span-1 text-white flex flex-col justify-center items-center"><div class="text-3xl">${escape_html(project.start_at)}</div> <p class="text-sm text-gray-400">${escape_html(project.projectname)}</p></div> <div class="col-span-3 text-white text-center flex flex-col justify-center items-center"><p class="text-sm text-gray-400 truncate">${escape_html(project.description)}</p></div> <div class="col-span-1 flex justify-end items-center"><button class="rounded-full text-white border p-2 hover:border-gray-400" aria-label="Expand project details"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5-5 5M6 12h12"></path></svg></button></div> <div${attr("id", `projectDetails${stringify(project.id)}`)} class="text-white col-span-5 overflow-hidden max-h-0 transition-all duration-300 ease-in-out"><div class="p-4 border-t border-gray-700 mt-4 flex flex-col md:flex-row items-center gap-4"><img${attr("src", project.img)}${attr("alt", `Project image for ${stringify(project.projectname)}`)} class="w-full md:w-1/2 rounded-lg object-cover"> <div class="md:w-1/2 text-left"><h4 class="text-4xl font-medium mb-2">${escape_html(project.projectname)}</h4> <h5 class="text-2xl font-medium mb-2">Project Description</h5> <p class="text-sm text-gray-400">${escape_html(project.description)}</p> <div class="text-white flex gap-3 flex-col"><p class="capitalize">${escape_html(project.usedlanguage)}</p> `;
      if (project.live_url) {
        $$payload.out += "<!--[-->";
        $$payload.out += `<a${attr("href", project.live_url)} class="flex items-center space-x-2"${attr("aria-label", `Visit ${stringify(project.projectname)} live site`)}><span class="text-xl">🗲</span> <span>Live Visit</span></a>`;
      } else {
        $$payload.out += "<!--[!-->";
      }
      $$payload.out += `<!--]--></div></div></div></div></div>`;
    }
    $$payload.out += `<!--]-->`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<p>No projects found.</p>`;
  }
  $$payload.out += `<!--]--> <!--[-->`;
  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
    let project = each_array_1[$$index_1];
    $$payload.out += `<div${attr("id", `projectGrid${stringify(project.id)}`)} class="mt-6 relative grid grid-cols-5 gap-4 p-6 text-center border border-gray-700 rounded-lg transition-all duration-300 ease-in-out bg-gray-800 hover:bg-opacity-50 hover:bg-cover hover:bg-[url('https://picsum.photos/536/354')]"><div class="col-span-1 text-white flex flex-col justify-center items-center"><div class="text-3xl">${escape_html(project.start_at)}</div> <p class="text-sm text-gray-400">${escape_html(project.projectname)}</p></div> <div class="col-span-3 text-white text-center flex flex-col justify-center items-center"><p class="text-sm text-gray-400 truncate">${escape_html(project.description)}</p></div> <div class="col-span-1 flex justify-end items-center"><button class="rounded-full text-white border p-2 hover:border-gray-400" aria-label="Expand project details"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5-5 5M6 12h12"></path></svg></button></div> <div${attr("id", `projectDetails${stringify(project.id)}`)} class="text-white col-span-5 overflow-hidden max-h-0 transition-all duration-300 ease-in-out"><div class="p-4 border-t border-gray-700 mt-4 flex flex-col md:flex-row items-center gap-4"><img src="https://picsum.photos/536/354"${attr("alt", `Project image for ${stringify(project.projectname)}`)} class="w-full md:w-1/2 rounded-lg object-cover"> <div class="md:w-1/2 text-left"><h4 class="text-4xl font-medium mb-2">${escape_html(project.projectname)}</h4> <h5 class="text-2xl font-medium mb-2">Project Description</h5> <p class="text-sm text-gray-400">${escape_html(project.description)}</p> <div class="text-white flex gap-3 flex-col"><p class="capitalize">${escape_html(project.usedlanguage)}</p> `;
    if (project.live_url) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<a${attr("href", project.live_url)} class="flex items-center space-x-2"${attr("aria-label", `Visit ${stringify(project.projectname)} live site`)}><span class="text-xl">🗲</span> <span>Live Visit</span></a>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></div></div></div></div></div>`;
  }
  $$payload.out += `<!--]--> <div class="flex justify-center mt-4">`;
  if (siz === mprojects.length) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<button class="tracking-wider text-slate-50 font-light border hover:bg-white hover:text-black rounded py-2 px-4">Show Less</button>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<button class="tracking-wider text-slate-50 font-light border hover:bg-white hover:text-black rounded py-2 px-4">Load More Projects</button>`;
  }
  $$payload.out += `<!--]--></div></section>`;
  bind_props($$props, { projects, len_total_proj, first_project_id });
  pop();
}
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  let { data } = $$props;
  const {
    offset,
    limit,
    len_total_proj,
    first_project_id
  } = data;
  $$payload.out += `<div class="bg-gray-900 border-t-lg border-gray-700">`;
  Navbar($$payload);
  $$payload.out += `<!---->  <script>
    import Heroimg from "$lib/assets/media/hero-1.png";
  <\/script> <script>
    const imgUrl = new URL("static/images/hero-1.png", import.meta.url).href;
  <\/script> <section class="py-20 bg-transparent"><div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center container mx-auto"><div class="w-full"><img src="/hero-1.png" class="w-full max-w-lg"></div> <div class="text-center md:text-left"><h1 class="text-6xl text-white mb-4">Hello, I'm Rahul</h1> <p class="text-xl text-gray-300 mb-4">Software Developer `;
  if (store_get($$store_subs ??= {}, "$page", page).data.session) {
    $$payload.out += "<!--[-->";
    if (store_get($$store_subs ??= {}, "$page", page).data.session.user) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div class="relative inline-block"><span class="absolute top-0 left-1 rounded-full bg-green-300 h-[0.4rem] w-[0.4rem] animate-ping"></span> <span class="absolute top-0 left-1 rounded-full bg-green-400 h-[0.350rem] w-[0.350rem]"></span></div>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]-->`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<span class="inline-block rounded-full bg-gray-400 h-[0.2rem] w-[0.2rem]"></span>`;
  }
  $$payload.out += `<!--]--></p> <p class="text-gray-400 mb-6">Passionate about coding and building impactful applications. Always
          eager to learn and contribute to amazing projects.</p> <div class="flex gap-4 mt-4"><button class="tracking-wider font-light bg-white text-black rounded py-[0.345rem] px-4 border border-gray-300 rounded shadow hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">Let's Start Now</button> <button class="tracking-wider text-slate-50 font-light border hover:bg-white hover:text-black rounded py-[0.345rem] px-4">Browser Projects</button></div></div></div></section>   <script>
    function scrollToSection(sectionId) {
      document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
    }
  <\/script> <section class="relative bg-cover bg-center h-screen"><div class="absolute inset-0 z-0"><video class="w-full h-full object-cover opacity-50" loop autoplay muted><source src="5474268-sd_426_226_25fps.mp4" type="video/mp4"> Your browser does not support the video tag.</video></div> <div class="absolute inset-0 bg-black opacity-40 z-10"></div> <div class="container px-6 py-4 relative z-20"><h4 class="flex-first text-white text-[3.5rem]">About me</h4> <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mt-3"><div class="md:col-span-3 text-white"><p class="tracking-wider text-1xl font-normal mb-6 space-y-6">I am a Software Developer with almost 2 years of experience in the
            IT industry and my higher-level education background is a Computer
            Science graduate. I currently work at a leading IT company while
            also taking on freelance projects. I specialize in developing
            innovative software solutions and business tools that address
            real-world challenges. <br><br> With expertise in building scalable and efficient products, I help
            businesses streamline operations and improve productivity through
            custom software, automation tools, and business optimization. My
            goal is to deliver impactful, tech-driven results that drive growth. <br><br> Let’s connect and explore how I can help your business thrive with
            innovative software solutions.</p> <button class="tracking-wider text-slate-50 font-light border hover:bg-white hover:text-black rounded py-[0.345rem] px-4">Previous Projects</button></div></div></div></section>  `;
  Work($$payload, {
    offset,
    limit,
    len_total_proj,
    first_project_id,
    projects: data.projects,
    medias: data.medias
  });
  $$payload.out += `<!----> `;
  HowWeWork($$payload);
  $$payload.out += `<!---->  `;
  ContactModal($$payload);
  $$payload.out += `<!---->  `;
  Footer($$payload);
  $$payload.out += `<!----></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _page as default
};
