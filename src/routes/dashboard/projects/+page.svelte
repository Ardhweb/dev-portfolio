<script>
   let { data } = $props();
  let projects = data.projects;
  console.log("Received projects in +page.svelte:", projects); // Debugging

  async function deleteItem(id) {
      try {
          // Send DELETE request to the correct API endpoint
          const response = await fetch(`/api/projects?Id=${id}`, {
              method: 'DELETE',
          });

          const data = await response.json();

          if (data.success) {
              // Successfully deleted, reload the page
              alert('Item deleted successfully!');
              location.reload();  // Reload the page
          } else {
              // Handle failure
              alert(`Error: ${data.message || data.error}`);
          }
      } catch (error) {
          console.error('Error deleting item:', error);
          alert('An error occurred while deleting the item.');
      }
  }
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
              <button   on:click={() => deleteItem(project.id)}  class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 w-full sm:w-auto">Delete</button>
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
