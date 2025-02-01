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
</script>

<section id="section-projects-history" class="flex flex-col p-8 min-h-screen">
  <h4 class="flex-first text-white text-[3.5rem]">Recent Work</h4>
  
  {#if projects.length > 0}
    {#each projects as project}
      <div id="projectGrid{project.id}" 
        class="mt-6 relative grid grid-cols-5 gap-4 p-6 text-center border border-gray-700 rounded-lg transition-all duration-300 ease-in-out bg-gray-800 hover:bg-opacity-50 hover:bg-cover hover:bg-[url('https://picsum.photos/536/354')]"
      >
        <div class="col-span-1 text-white flex flex-col justify-center items-center">
          <div class="text-3xl">{project.start_at}</div>
          <p class="text-sm text-gray-400">{project.projectname}</p>
        </div>

        <div class="col-span-3 text-white text-center flex flex-col justify-center items-center">
          <p class="text-sm text-gray-400 truncate">{project.description}</p>
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
            <img src={project.img} alt="Project image for {project.projectname}" class="w-full md:w-1/2 rounded-lg object-cover" />
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
  {:else}
    <p>No projects found.</p>
  {/if}

  {#each mprojects as project}
    <div id="projectGrid{project.id}" 
      class="mt-6 relative grid grid-cols-5 gap-4 p-6 text-center border border-gray-700 rounded-lg transition-all duration-300 ease-in-out bg-gray-800 hover:bg-opacity-50 hover:bg-cover hover:bg-[url('https://picsum.photos/536/354')]"
    >
      <div class="col-span-1 text-white flex flex-col justify-center items-center">
        <div class="text-3xl">{project.start_at}</div>
        <p class="text-sm text-gray-400">{project.projectname}</p>
      </div>

      <div class="col-span-3 text-white text-center flex flex-col justify-center items-center">
        <p class="text-sm text-gray-400 truncate">{project.description}</p>
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
