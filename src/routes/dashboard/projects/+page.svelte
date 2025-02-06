<script>
   let { data } = $props();
  let projects = data.projects;
  console.log("Received projects in +page.svelte:", projects); // Debugging
</script>
<div class="flex space-x-4">
  <a href="/dashboard/projects/add-new-project" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Add New</a>
</div>


{#if projects.length === 0}
  <p class="text-center text-gray-500">No projects found.</p>
{:else}
  <div class="flex items-center justify-center min-h-screen p-4">
    <div class="grid grid-cols-1 gap-6 w-full max-w-6xl">
      {#each projects as project (project.id)}
        <div class="p-6 rounded-lg shadow-lg bg-white flex flex-col sm:grid sm:grid-cols-2 sm:gap-6">
          <!-- Column 1: Project name, ID, and buttons -->
          <div>
           <small class="text-gray-600">ID: {project.id}</small>
            <h2 class="text-xl text-black font-semibold">{project.projectname}</h2>
           
            <div class="mt-4 flex space-x-4">
              <button  class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full sm:w-auto">Edit</button>
              <button class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 w-full sm:w-auto">Delete</button>
            </div>
          </div>

          <!-- Column 2: Project description -->
          <div class="sm:mt-0 mt-4">
            <p class="text-gray-500">{project.description}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
{/if}
