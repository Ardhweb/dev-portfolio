<script>
  import { index } from "drizzle-orm/sqlite-core";
  //export let medias = [];
  export let projects = []; // This will hold data for a single user
  export let len_total_proj;
  export let first_project_id;

  let siz = len_total_proj - 3;
  console.log("doidi", siz);
  let mprojects = []; // Holds the data from the API
  let lastfetchproId = first_project_id - 1; // Tracks the last fetched project ID
  let offsetId;
  let showLess = false; // Flag to toggle between "Show More" / "Show Less"
  async function fetchData() {
    console.log("Mproject size", mprojects.length);
    console.log("Fetching more projects...");
    try {
      // const response = await fetch(`/api/data?lastfetchproId=${lastfetchproId}`);
      const response = await fetch(
        `/api/data?lastfetchproId=${lastfetchproId}`,
      );
      const result = await response.json();
      console.log(result);

      if (result.success) {
        // Append new projects to the list
        mprojects = [...mprojects, ...result.moreProjects];

        // Update the last fetched project ID if new data is received
        if (result.moreProjects.length > 0) {
          lastfetchproId =
            result.moreProjects[result.moreProjects.length - 1].id;
        }
      } else {
        console.error("Error from API:", result.error);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  function toggleShowLess() {
    mprojects = []; // Clear mprojects if there are items in it
    showLess = false; // Change to "Show More"
  }


</script>

<section id="section-projects-history" class="flex flex-col p-8 min-h-screen">
  <h4 class="flex-first text-white text-[3.5rem]">Recent Work</h4>
  {#if projects.length > 0}
    {#each projects as project, index}
      <!-- Single Card -->
      <!-- Grid Layout -->
      <div
        id="projectGrid{index}"
        class=" mt-6 relative grid grid-cols-5 gap-4 p-6 text-center border border-gray-700 rounded-lg transition-all duration-300 ease-in-out bg-gray-800 hover:bg-opacity-50 hover:bg-cover hover:bg-[url('https://picsum.photos/536/354')]"
      >
        <!-- Year and Category -->
        <div
          class="col-span-1 text-white flex flex-col justify-center items-center"
        >
          <div class="text-3xl">{project.start_at}</div>
          <p class="text-sm text-gray-400">{project.projectname}</p>
        </div>

        <!-- Description -->
        <div
          class="col-span-3 text-white text-center flex flex-col justify-center items-center"
        >
          <p
            class="group-hover:mix-blend-difference text-sm text-gray-400 text-wrap text-pretty truncate"
          >
            {project.description}
          </p>
        </div>

        <!-- Button for Expanding Description -->
        <div class="col-span-1 flex justify-end items-center">
          <!-- svelte-ignore a11y_consider_explicit_label -->
          <button
            on:click={() => toggleDetails({ index })}
            class="rounded-full text-white border p-2 hover:border-gray-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 7l5 5-5 5M6 12h12"
              ></path>
            </svg>
          </button>
        </div>

        <!-- Expandable Section -->
        <div
          id="projectDetails{index}"
          class=" text-white col-span-5 overflow-hidden max-h-0 transition-all duration-300 ease-in-out"
        >
          <div
            class="p-4 border-t border-gray-700 mt-4 flex flex-col md:flex-row items-center gap-4"
          >
            <!-- svelte-ignore a11y_img_redundant_alt -->
            <img
              src={project.img}
              alt="Project Image"
              class="w-full md:w-1/2 rounded-lg object-cover"
            />
            <div class="md:w-1/2 text-left align-top items-start">
              <h4 class="text-4xl font-medium mb-2">{project.projectname}</h4>
              <h5 class="text-2xl font-medium mb-2">Project Description</h5>
              <p class="text-sm text-gray-400">
                {project.description}
              </p>
              <div class=" text-white flex gap-3 flex-col">
                <p class="capitalize">{project.usedlanguage}</p>
                {#if project.live_url}
                  <!-- svelte-ignore a11y_invalid_attribute -->
                  <a
                    href={project.live_url}
                    class="flex items-center space-x-2"
                  >
                    <span class="text-xl">🗲</span>
                    <span>Live URL</span>
                  </a>
                  <!-- svelte-ignore block_empty -->
                {/if}

                <!-- <button
                  on:click={openGallery()}
                  class="tracking-wider font-light bg-white text-black rounded py-[0.345rem] px-4 border border-gray-300 rounded shadow hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                >
                  View Gallery
                </button> -->

              </div>
            </div>
          </div>
        </div>

      </div>

      <script>
        function toggleDetails(index) {
          console.log(index.index);
          const details = document.getElementById(
            `projectDetails${index.index}`,
          ); // Correct string interpolation
          const grid = document.getElementById(`projectGrid${index.index}`); // Make sure to select the correct grid element by index

          if (details.style.maxHeight) {
            details.style.maxHeight = null;
            grid.classList.add(
              "hover:bg-[url('https://picsum.photos/536/354')]",
            );
          } else {
            details.style.maxHeight = `${details.scrollHeight}px`;
            grid.classList.remove(
              "hover:bg-[url('https://picsum.photos/536/354')]",
            );
          }
        }

        //Gallery Parts Begin

       

//         // Tailwind CSS popup structure
//         document.querySelector("footer").insertAdjacentHTML(
//           "beforebegin",
//           `
//   <div id="gallery-popup" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 hidden z-50">
//     <div class="relative bg-white p-6 rounded-lg shadow-lg w-96">
//       <button onclick="closeGallery()" class="absolute top-2 right-2 text-gray-600 text-3xl">&times;</button>
//       <p class="text-center text-lg font-semibold">Gallery Popup</p>
//       <div class="mt-4 flex justify-center" id="img-container">
//         <img id="gallery-image" src="https://images.unsplash.com/photo-1735252723552-138dc3fb6f14?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Gallery" class="rounded-lg" />
      
      
//            </div>
//       <div class="mt-4 flex justify-between">
//         <button  id="prev-image" class="px-4 py-2 bg-gray-300 rounded">Prev</button>
//         <button onclick="nextImage()" id="next-image" class="px-4 py-2 bg-gray-300 rounded">Next</button>
//       </div>
//     </div>
//   </div>
// `,
//         );

        //Gallery Parts End
      </script>
    {/each}
  {:else}
    <p>No projects found.</p>
  {/if}

  <!--Load More using API Code has begin-->

  {#each mprojects as project}
    <!-- Single Card -->
    <!-- Grid Layout -->
    <div
      id="projectGrid{index}"
      class=" mt-6 relative grid grid-cols-5 gap-4 p-6 text-center border border-gray-700 rounded-lg transition-all duration-300 ease-in-out bg-gray-800 hover:bg-opacity-50 hover:bg-cover hover:bg-[url('https://picsum.photos/536/354')]"
    >
      <!-- Year and Category -->
      <div
        class="col-span-1 text-white flex flex-col justify-center items-center"
      >
        <div class="text-3xl">{project.start_at}</div>
        <p class="text-sm text-gray-400">{project.projectname}</p>
      </div>

      <!-- Description -->
      <div
        class="col-span-3 text-white text-center flex flex-col justify-center items-center"
      >
        <p
          class="group-hover:mix-blend-difference text-sm text-gray-400 text-wrap text-pretty truncate"
        >
          {project.description}
        </p>
      </div>

      <!-- Button for Expanding Description -->
      <div class="col-span-1 flex justify-end items-center">
        <!-- svelte-ignore a11y_consider_explicit_label -->
        <button
          on:click={() => toggleDetails({ index })}
          class="rounded-full text-white border p-2 hover:border-gray-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 7l5 5-5 5M6 12h12"
            ></path>
          </svg>
        </button>
      </div>

      <!-- Expandable Section -->
      <div
        id="projectDetails{index}"
        class=" text-white col-span-5 overflow-hidden max-h-0 transition-all duration-300 ease-in-out"
      >
        <div
          class="p-4 border-t border-gray-700 mt-4 flex flex-col md:flex-row items-center gap-4"
        >
          <!-- svelte-ignore a11y_img_redundant_alt -->
          <img
            src="https://picsum.photos/536/354"
            alt="Project Image"
            class="w-full md:w-1/2 rounded-lg object-cover"
          />
          <div class="md:w-1/2 text-left align-top items-start">
            <h4 class="text-4xl font-medium mb-2">{project.projectname}</h4>
            <h5 class="text-2xl font-medium mb-2">Project Description</h5>
            <p class="text-sm text-gray-400">
              {project.description}
            </p>
            <div class=" text-white flex gap-3 flex-col">
              <p class="capitalize">{project.usedlanguage}</p>
              {#if project.live_url}
                <!-- svelte-ignore a11y_invalid_attribute -->
                <a href={project.live_url} class="flex items-center space-x-2">
                  <span class="text-xl">🗲</span>
                  <span>Live Visit</span>
                </a>
                <!-- svelte-ignore block_empty -->
              {/if}

              <!-- <button
                on:click={openGallery()}
                class="tracking-wider font-light bg-white text-black rounded py-[0.345rem] px-4 border border-gray-300 rounded shadow hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              >
                View Gallery
              </button> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  {/each}

  <div class="flex justify-center mt-4">
    {#if siz === mprojects.length}
      <!-- Show "Show Less" Button if the lengths are equal -->
      <button
        on:click={toggleShowLess}
        class="w-50 tracking-wider text-slate-50 font-light border hover:bg-white hover:text-black rounded py-[0.345rem] px-4"
      >
        Show Less
      </button>
    {:else}
      <!-- Show "Load More" Button if the lengths are not equal -->
      <button
        on:click={fetchData}
        class="w-50 tracking-wider text-slate-50 font-light border hover:bg-white hover:text-black rounded py-[0.345rem] px-4"
      >
        Load More Projects
      </button>
    {/if}
  </div>
</section>





