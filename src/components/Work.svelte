<script>
  export let projects = []; // Holds data for a single user
  export let len_total_proj;
  export let first_project_id;

  let siz = len_total_proj - 3;
  let mprojects = []; // Holds the data from the API
  let lastfetchproId = first_project_id - 1; // Tracks the last fetched project ID
  let showLess = false; // Flag to toggle between "Show More" / "Show Less"

  async function fetchData() {
    try {
      const response = await fetch(`/api/data?lastfetchproId=${lastfetchproId}`);
      const result = await response.json(); 

      if (result.success) {
        // Append new projects to the list
        mprojects = [...mprojects, ...result.moreProjects];

        // Update the last fetched project ID if new data is received
        if (result.moreProjects.length > 0) {
          lastfetchproId = result.moreProjects[result.moreProjects.length - 1].id;
        }
      } else {
        console.error("Error from API:", result.error);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  function toggleShowLess() {
    mprojects = []; // Clear mprojects
    showLess = false; // Change to "Show More"
  }

  function toggleDetails(projectId) {
    const details = document.getElementById(`projectDetails${projectId}`);
    const grid = document.getElementById(`projectGrid${projectId}`);

    if (details.style.maxHeight) {
      details.style.maxHeight = null;
      grid.classList.add("hover:bg-[url('https://picsum.photos/536/354')]");
    } else {
      details.style.maxHeight = `${details.scrollHeight}px`;
      grid.classList.remove("hover:bg-[url('https://picsum.photos/536/354')]");
    }
  }
  const languageStyles = {
    javascript: 'bg-yellow-400/10 text-yellow-400 inset-ring inset-ring-yellow-400/20',
    typescript: 'bg-blue-400/10 text-blue-400 inset-ring inset-ring-blue-400/20',
    python: 'bg-green-400/10 text-green-400 inset-ring inset-ring-green-400/20',
    svelte: 'bg-orange-400/10 text-orange-400 inset-ring inset-ring-orange-400/20',
    react: 'bg-cyan-400/10 text-cyan-400 inset-ring inset-ring-cyan-400/20',
    node: 'bg-emerald-400/10 text-emerald-400 inset-ring inset-ring-emerald-400/20',
    django: 'bg-lime-400/10 text-lime-400 inset-ring inset-ring-lime-400/20',
    tailwind: 'bg-sky-400/10 text-sky-400 inset-ring inset-ring-sky-400/20',
  };

  const defaultStyle =
    'bg-zinc-400/10 text-zinc-300 inset-ring inset-ring-zinc-500/20';

  const getLanguageStyle = (lang) =>
    languageStyles[lang.toLowerCase()] || defaultStyle;
</script>

<section id="section-projects-history" class="flex flex-col p-8 min-h-screen">
  <h4 class="flex-first text-white text-[2.5rem]">Recent Work</h4>
  
  {#if projects.length > 0}
    {#each projects as project}
      <div id="projectGrid{project.id}" 
        class="mt-6 relative grid grid-cols-2 gap-1 p-6 text-center border border-gray-700 rounded-lg transition-all duration-300 ease-in-out bg-gray-800 hover:bg-opacity-50 hover:bg-cover hover:bg-[url('https://picsum.photos/536/354')]"
      >
      
        <div class="col-span-3 text-white text-center flex flex-col justify-center items-center">
          <p class="text-3xl  truncate">{project.projectname}</p>
        </div>

        <div class="col-span-1 flex justify-end items-center">
          <button on:click={() => toggleDetails(project.id)}
            class="rounded-full text-white border p-2 hover:border-gray-400"
            aria-label="Expand project details"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5-5 5M6 12h12"></path>
            </svg>
          </button>
        </div>

        <div id="projectDetails{project.id}" class="text-white col-span-5 overflow-hidden max-h-0 transition-all duration-300 ease-in-out">
          <div class="p-4 border-t border-gray-700 mt-4 flex flex-col md:flex-row  gap-4">
            <img src={project.img} alt="Project image for {project.projectname}" class="w-full md:w-1/2 rounded-lg object-cover" />
            <div class="md:w-1/2 text-left">
         
              
              <p class="text-sm text-normal text-gray-400">{project.description}</p>
            <p class="inline-flex items-center gap-1 my-2">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
  <path d="M10 9.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V10a.75.75 0 0 0-.75-.75H10ZM6 13.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V14a.75.75 0 0 0-.75-.75H6ZM8 13.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V14a.75.75 0 0 0-.75-.75H8ZM9.25 14a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H10a.75.75 0 0 1-.75-.75V14ZM12 11.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V12a.75.75 0 0 0-.75-.75H12ZM12 13.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V14a.75.75 0 0 0-.75-.75H12ZM13.25 12a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H14a.75.75 0 0 1-.75-.75V12ZM11.25 10.005c0-.417.338-.755.755-.755h2a.755.755 0 1 1 0 1.51h-2a.755.755 0 0 1-.755-.755ZM6.005 11.25a.755.755 0 1 0 0 1.51h4a.755.755 0 1 0 0-1.51h-4Z" />
  <path fill-rule="evenodd" d="M5.75 2a.75.75 0 0 1 .75.75V4h7V2.75a.75.75 0 0 1 1.5 0V4h.25A2.75 2.75 0 0 1 18 6.75v8.5A2.75 2.75 0 0 1 15.25 18H4.75A2.75 2.75 0 0 1 2 15.25v-8.5A2.75 2.75 0 0 1 4.75 4H5V2.75A.75.75 0 0 1 5.75 2Zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75Z" clip-rule="evenodd" />
</svg>

  <span class="text-gray-400 text-sm "> {project.start_at} - {project.end_at}</span>
</p>

            <div class="text-white flex flex-wrap gap-2">
  <p class="capitalize w-full">
   {#each project.usedlanguage.split(',').map(lang => lang.trim()) as language}
  <span
    class={`inline-flex items-center rounded-md px-2 py-1 mr-2 mt-2 text-xs font-medium ${getLanguageStyle(language)}`}
  >
    {language}
  </span>
{/each}

  </p>

  <div class="inline-flex gap-2">
  {#if project.git_url}
     <a href="{project.git_url}">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 800" class="size-5" fill="#e6e6e6" style="opacity:1;"><path  d="M510 383q23 0 39 21t15 53t-15 52t-39 22t-38-22t-16-52t16-53t38-21m186-193q29 31 46 69t16 90q0 74-18 125t-48 84t-64 52t-70 28t-64 10l-44 2H308q-15 0-44-2t-63-10t-70-28t-65-52t-47-84T0 349q0-51 17-90t45-69q-3-6-3-24t1-42t9-56T88 8q22 3 51 14q25 9 59 25t77 46q18-5 46-8t58-2l58 2q28 1 46 8q42-29 77-46t59-25q29-11 51-14q12 30 19 60t9 56t2 42t-4 24M380 614q58 0 109-6t88-23t59-51t21-90q0-27-10-52t-33-45q-19-18-44-24t-56-5t-64 4t-70 3h-2q-36 0-70-3t-64-4t-55 5t-44 24q-23 20-33 45t-11 52q0 57 22 90t58 51t88 23t109 6zM248 383q23 0 39 21t15 53t-15 52t-39 22t-38-22t-16-52t16-53t38-21"/></svg>
     </a>
     {/if}
                {#if project.live_url}
                  <a href={project.live_url} class="flex items-center space-x-2" aria-label="Visit {project.projectname} live site">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
  <path fill-rule="evenodd" d="M4.25 5.5a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 1 1.5 0v4A2.25 2.25 0 0 1 12.75 17h-8.5A2.25 2.25 0 0 1 2 14.75v-8.5A2.25 2.25 0 0 1 4.25 4h5a.75.75 0 0 1 0 1.5h-5Z" clip-rule="evenodd" />
  <path fill-rule="evenodd" d="M6.194 12.753a.75.75 0 0 0 1.06.053L16.5 4.44v2.81a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0 0 1.5h2.553l-9.056 8.194a.75.75 0 0 0-.053 1.06Z" clip-rule="evenodd" />
</svg>

                  </a>
                {/if}
             
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    {/each}
  {:else}
    <p>No projects found.</p>
  {/if}

  {#each mprojects as project}
    <div id="projectGrid{project.id}" 
      class="mt-6 relative grid grid-cols-5 gap-4 p-6 text-center border border-gray-700 rounded-lg transition-all duration-300 ease-in-out bg-gray-800 hover:bg-opacity-50 hover:bg-cover hover:bg-[url('https://picsum.photos/536/354')]"
    >
      <div class="col-span-1 text-white flex flex-col justify-center items-center">
        <div class="text-3xl">{project.start_at}</div>
   
      </div>

      <div class="col-span-3 text-white text-center flex flex-col justify-center items-center">
        <p class="text-3xl  truncate">{project.projectname}</p>
      </div>

      <div class="col-span-1 flex justify-end items-center">
        <button on:click={() => toggleDetails(project.id)}
          class="rounded-full text-white border p-2 hover:border-gray-400" 
          aria-label="Expand project details"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5-5 5M6 12h12"></path>
          </svg>
        </button>
      </div>

      <div id="projectDetails{project.id}" class="text-white col-span-5 overflow-hidden max-h-0 transition-all duration-300 ease-in-out">
        <div class="p-4 border-t border-gray-700 mt-4 flex flex-col md:flex-row items-center gap-4">
          <img src="https://picsum.photos/536/354" alt="Project image for {project.projectname}" class="w-full md:w-1/2 rounded-lg object-cover" />
          <div class="md:w-1/2 text-left">
            <h4 class="text-4xl font-medium mb-2">{project.projectname}</h4>
            <h5 class="text-2xl font-medium mb-2">Project Description</h5>
            <p class="text-sm text-gray-400">{project.description}</p>
            <div class="text-white flex gap-3 flex-col">
              <p class="capitalize">{project.usedlanguage}</p>
              {#if project.live_url}
                <a href={project.live_url} class="flex items-center space-x-2" aria-label="Visit {project.projectname} live site">
                  <span class="text-xl">🗲</span>
                  <span>Live Visit</span>
                </a>
              {/if}
            </div>
          </div>
        </div>
      </div>
    </div>
  {/each}

  <div class="flex justify-center mt-4">
    {#if siz === mprojects.length}
      <button on:click={toggleShowLess} class="tracking-wider text-slate-50 font-light border hover:bg-white hover:text-black rounded py-2 px-4">
        Show Less
      </button>
    {:else}
      <button on:click={fetchData} class="tracking-wider text-slate-50 font-light border hover:bg-white hover:text-black rounded py-2 px-4">
        Load More Projects
      </button>
    {/if}
  </div>
</section>
