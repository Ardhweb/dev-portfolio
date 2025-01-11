<script>
    export let formResult;
  </script>
  
  {#if formResult?.success}
    <p>Record added successfully!</p>
  {:else if formResult?.error}
    <p>Error: {formResult.error}</p>
  {/if}
  
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <form method="POST" class="space-y-6 bg-white p-8 rounded shadow-md w-full max-w-md">
      <h2 class="text-2xl font-bold text-gray-800 text-center">Add New Project</h2>
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
      <label class="block">
        <span class="text-gray-700 font-medium">Breif Description about project you have did:</span>
        <input
          type="text"
          name="description"
          required
          class="mt-1 w-full p-3 border rounded focus:ring focus:ring-blue-300 outline-none"
          placeholder="Enter your description"
        />
      </label>
      <label class="block">
        <span class="text-gray-700 font-medium">What Technology and Framework  you used while development:</span>
        <input
          type="text"
          name="usedlanguage"
          required
          class="mt-1 w-full p-3 border rounded focus:ring focus:ring-blue-300 outline-none"
          placeholder=""
        />
      </label>
      <label class="block">
        <span class="text-gray-700 font-medium">When this project has been started?:</span>
        <input
          type="text"
          name="start_at"
          required
          class="mt-1 w-full p-3 border rounded focus:ring focus:ring-blue-300 outline-none"
          placeholder=""
        />
      </label>
      <label class="block">
        <span class="text-gray-700 font-medium">Project Complected or Handover or End time:</span>
        <input
          type="text"
          name="end_at"
          required
          class="mt-1 w-full p-3 border rounded focus:ring focus:ring-blue-300 outline-none"
          placeholder=""
        />
      </label>
      <label class="block">
        <span class="text-gray-700 font-medium">Primary Category:</span>
        <input value="1"
          type="number"
          name="primarycategory"
          required
          class="mt-1 w-full p-3 border rounded focus:ring focus:ring-blue-300 outline-none"
          placeholder=""
        />
      </label>
      <label class="block">
        <span class="text-gray-700 font-medium">Secondary Catrgory:</span>
        <input value="1"
          type="number"
          name="secondarycategory"
          required
          class="mt-1 w-full p-3 border rounded focus:ring focus:ring-blue-300 outline-none"
          placeholder=""
        />
      </label>
      <label class="block">
        <span class="text-gray-700 font-medium">Project type <small>e.g. freelance , hobby, associted with employeer</small>:</span>
        <input
          type="text"
          name="type"
          required
          class="mt-1 w-full p-3 border rounded focus:ring focus:ring-blue-300 outline-none"
          placeholder=""
        />
      </label>
      <label class="block">
        <span class="text-gray-700 font-medium">Production URL*:</span>
        <input 
          type="text"
          name="live_url"
          required
          class="mt-1 w-full p-3 border rounded focus:ring focus:ring-blue-300 outline-none"
          placeholder=""
        />
      </label>
      <label class="block">
        <span class="text-gray-700 font-medium">Status:</span>
        <input value="Done"
          type="text"
          name="status"
          required
          class="mt-1 w-full p-3 border rounded focus:ring focus:ring-blue-300 outline-none"
          placeholder=""
        />
      </label>
      <button
        type="submit"
        class="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 focus:ring focus:ring-blue-300 focus:outline-none"
      >
        Add Project Work
      </button>
    </form>
  </div>
  