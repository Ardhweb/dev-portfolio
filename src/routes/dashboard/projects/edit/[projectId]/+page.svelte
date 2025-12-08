<script>
  import { enhance } from '$app/forms';
  import { invalidateAll, goto } from '$app/navigation'; // Kept for reference but not strictly needed with reload()
  import { page } from '$app/stores'; // Kept for reference but not strictly needed with reload()

  // 1. Import the data fetched from the load function
  export let data;

  // Extract project data for easier access
  const projectData = data.project || {};

  // Initialize formResult exactly as you had it
  let formResult = null; 

  /**
   * Helper function to correctly format Date objects to yyyy-mm-dd string 
   * for <input type="date"> value attribute.
   * @param {Date | string | null | undefined} dateValue 
   * @returns {string}
   */
  function formatDateForInput(dateValue) {
    if (!dateValue) return '';
    const date = new Date(dateValue);
    if (isNaN(date.getTime())) return '';
    return date.toISOString().split('T')[0];
  }

  /**
   * SvelteKit's enhance function for progressive enhancement
   * Note: We use the callback form of enhance to prevent SvelteKit from 
   * automatically resetting the form.
   * @param {import('@sveltejs/kit').SubmitEvent} event
   */
  async function handleSubmit(event) {
    // SWITCH to the callback version of enhance to control the flow
    await enhance(event, ({ data, result }) => {
      formResult = data; // Assign the data to formResult

      if (data?.success) {
        console.log('Update successful, performing full page reload...');
        
        // 🚀 ACTION: Full page reload to fetch fresh data
        window.location.reload(); 
      }
      
      // CRITICAL FIX: Return the result object to prevent SvelteKit from executing 
      // default post-submission actions (like form.reset()).
      return result; 
    })(event); 
  }
</script>


<div class="flex items-center justify-center min-h-screen">
    {#if formResult?.success}
    <p class="text-green-600 text-center">Record updated successfully!</p>
  {:else if formResult?.error}
    <p class="text-red-600 text-center">Error: {formResult.error}</p>
  {/if}

  <form  method="POST"  use:handleSubmit  class="space-y-6 bg-white p-8 rounded shadow-md w-full max-w-5xl">
    <h2 class="text-2xl font-bold text-gray-800 text-center mb-4">Edit Update Project</h2>

        <input type="hidden" name="projectId" value="{projectData.id || ''}" />

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
  <!-- Full-width fields -->
      <div class="col-span-2">
        <label class="block">
          <span class="text-gray-700 font-medium">Project Title:</span>
          <input
            type="text"
            name="projectname"
            required
            class="mt-1 w-full p-3 border rounded focus:ring focus:ring-blue-300 outline-none"
            placeholder="Enter your name"
            value="{projectData.projectname || ''}"
          />
        </label>
      </div>
      <div class="col-span-2">
        <label class="block">
          <span class="text-gray-700 font-medium">Brief Description about the project:</span>
          <input
            type="text"
            name="description"
            required
            class="mt-1 w-full p-3 border rounded focus:ring focus:ring-blue-300 outline-none"
            placeholder="Enter your description"
            value="{projectData.description || ''}"
          />
        </label>
      </div>

      <div class="col-span-2">
        <label class="block">
          <span class="text-gray-700 font-medium">Technology & Framework:</span>
          <input
            type="text"
            name="usedlanguage"
            required
            class="mt-1 w-full p-3 border rounded focus:ring focus:ring-blue-300 outline-none"
            placeholder="Enter technologies used"
            value="{projectData.usedlanguage || ''}"
          />
        </label>
      </div>

      <!-- Side-by-side fields -->
      <label class="block">
        <span class="text-gray-700 font-medium">Start Date:</span>
        <input
          type="date"
          name="start_at"
          required
          class="mt-1 w-full p-3 border rounded focus:ring focus:ring-blue-300 outline-none"
          placeholder="Select start date"
          value="{formatDateForInput(projectData.start_at)}"
        />
      </label>
      <label class="block">
        <span class="text-gray-700 font-medium">End Date:</span>
        <input
          type="date"
          name="end_at"
          required
          class="mt-1 w-full p-3 border rounded focus:ring focus:ring-blue-300 outline-none"
          placeholder="Select end date"
          value="{formatDateForInput(projectData.end_at)}"
        />
      </label> 

    
     
      <label class="block">
        <span class="text-gray-700 font-medium">Primary Category:</span>
        <input
          type="number"
          name="primarycategory"
          required
          class="mt-1 w-full p-3 border rounded focus:ring focus:ring-blue-300 outline-none"
          placeholder="Enter primary category"
          value="{projectData.primarycategory || ''}"
        />
      </label>
      <label class="block">
        <span class="text-gray-700 font-medium">Secondary Category:</span>
        <input
          type="number"
          name="secondarycategory"
          required
          class="mt-1 w-full p-3 border rounded focus:ring focus:ring-blue-300 outline-none"
          placeholder="Enter secondary category"
          value="{projectData.secondarycategory || ''}"
        />
      </label>
      <label class="block">
        <span class="text-gray-700 font-medium">Project Type:</span>
        <input
          type="text"
          name="type"
          required
          class="mt-1 w-full p-3 border rounded focus:ring focus:ring-blue-300 outline-none"
          placeholder="e.g. Freelance, Hobby, Employer"
          value="{projectData.type || ''}"
        />
      </label>
      <label class="block">
        <span class="text-gray-700 font-medium">Production URL:</span>
        <input
          type="text"
          name="liveurl"
          required
          class="mt-1 w-full p-3 border rounded focus:ring focus:ring-blue-300 outline-none"
          placeholder="Enter live URL"
          value="{projectData.liveurl || ''}"
        />
      </label>
     <label class="block">
        <span class="text-gray-700 font-medium">Status:</span>
        <select
          name="status"
          required
          class="mt-1 w-full p-3 border rounded focus:ring focus:ring-blue-300 outline-none"
        >
          <option value="done" selected="{projectData.status === 'done'}">Done</option>
          <option value="ongoing" selected="{projectData.status === 'ongoing'}">Ongoing</option>
          <option value="completed" selected="{projectData.status === 'completed'}">Completed</option>
        </select>
      </label>
    </div>
          
    <button
      type="submit"
      class="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 focus:ring focus:ring-blue-300 focus:outline-none"
    >
      Save Project Work Updates
    </button>
  </form>
</div>