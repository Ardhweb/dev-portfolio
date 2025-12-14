<script>

  import { goto } from '$app/navigation';
    import { enhance } from '$app/forms';
  import { invalidateAll } from '$app/navigation';

  let formResult = null; // Initialize formResult

  async function handleSubmit(event) {
    const { data, form } = await enhance(event);

    formResult = data; // Assign the data to formResult

    if (data?.success) {
      form.reset(); // Reset the form on success
     // Redirect to login after 2s
      await invalidateAll();//This will refresh the +page.server and +page.js file if you want to show the new data after insert

    }
  }


</script>


<div class="flex items-center justify-center min-h-screen ">
  {#if formResult?.success}
  <p class="text-green-600 text-center">Record added successfully!</p>
{:else if formResult?.error}
  <p class="text-red-600 text-center">Error: {formResult.error}</p>
{/if}

  <form  method="POST"  use:handleSubmit  class="space-y-6 bg-white p-8 rounded shadow-md w-full max-w-5xl">
    <h2 class="text-2xl font-bold text-gray-800 text-center mb-4">Add New Project</h2>
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
        />
      </label>
      <label class="block">
        <span class="text-gray-700 font-medium">Project Type:</span>
        <select
          name="type"
        
          required
          class="mt-1 w-full p-3 border rounded focus:ring focus:ring-blue-300 outline-none"
        >
          <option value="freelance">Freelance</option>
          <option value="hobby">Hobby</option>
          <option value="associated">Associated</option>
        </select>
      </label>
      <label class="block">
        <span class="text-gray-700 font-medium">Production URL:</span>
        <input
          type="text"
          name="live_url"
          required
          class="mt-1 w-full p-3 border rounded focus:ring focus:ring-blue-300 outline-none"
          placeholder="Enter live URL"
        />
      </label>
      <label class="block">
        <span class="text-gray-700 font-medium">Status:</span>
        <select
          name="status"
          required
          class="mt-1 w-full p-3 border rounded focus:ring focus:ring-blue-300 outline-none"
          placeholder="Enter project status"
        >
        <option value="done">Done</option>
        <option value="ongoing">Ongoing</option>
        <option value="completed">Completed</option>
       
      </select>
      </label>

       <label class="block">
        <span class="text-gray-700 font-medium">Github:</span>
        <input
          type="text"
          name="git_url"
          required
          class="mt-1 w-full p-3 border rounded focus:ring focus:ring-blue-300 outline-none"
          placeholder="Enter github repo URL"
        />
      </label>
    </div>

    <button
      type="submit"
      class="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 focus:ring focus:ring-blue-300 focus:outline-none"
    >
      Add Project Work
    </button>
  </form>
</div>

