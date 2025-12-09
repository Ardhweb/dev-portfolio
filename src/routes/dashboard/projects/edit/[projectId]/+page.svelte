<script>
  import { invalidateAll, goto } from '$app/navigation'; // Optional, use for navigation after form submission if needed

  // 1. Import the data fetched from the load function
  export let data;

  // Extract project data for easier access
  const projectData = data.project || {};

  // Initialize formResult to store the result from the form submission
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

  // Manually handle the form submission via fetch
  async function handleSubmit(event) {
    event.preventDefault();  // Prevent default form submission behavior

    const formData = new FormData(event.target); // Gather the form data

    try {
      // Send the form data (including projectId) via POST request to the server
      const response = await fetch('/dashboard/projects/edit/+page.server.js', {
        method: 'POST',
        body: formData,  // Send the form data
      });

      const result = await response.json(); // Assuming the server returns a JSON response
      formResult = result; // Store the result (success or error)

       if (result.success) {
        console.log('Update successful!');
        // Show the success alert
        alert('Update successful!');

        // Wait for a couple of seconds before redirecting or reloading
        setTimeout(() => {
          // Optionally, redirect to a new page (if needed)
          // goto('/some-other-page');  // Example to navigate to another page

          // Or reload the current page
          window.location.reload();  // Reloads the page to reflect the updated data
        }, 2000); // Delay of 2 seconds
      } else {
        console.error('Update failed:', result.error);
        alert(`Update failed: ${result.error}`);
      }

    } catch (error) {
      console.error('Error during form submission:', error);
      formResult = { error: 'An error occurred while submitting the form.' };
       alert('An error occurred while submitting the form.');
    }
  }
</script>

<div class="flex items-center justify-center min-h-screen">
  {#if formResult?.success}
    <p class="text-green-600 text-center">Record updated successfully!</p>
  {:else if formResult?.error}
    <p class="text-red-600 text-center">Error: {formResult.error}</p>
  {/if}

  <form on:submit={handleSubmit} class="space-y-6 bg-white p-8 rounded shadow-md w-full max-w-5xl">
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
            placeholder="Enter project title"
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
          name="live_url"
          required
          class="mt-1 w-full p-3 border rounded focus:ring focus:ring-blue-300 outline-none"
          placeholder="Enter live URL"
          value="{projectData.live_url || ''}"
        />
      </label>

      <!-- Status with select dropdown -->
      <label class="block">
        <span class="text-gray-700 font-medium">Status:</span>
        <select
          name="status"
          bind:value="{projectData.status}"
          required
          class="mt-1 w-full p-3 border rounded focus:ring focus:ring-blue-300 outline-none"
        >
          <option value="done">Done</option>
          <option value="ongoing">Ongoing</option>
          <option value="completed">Completed</option>
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
