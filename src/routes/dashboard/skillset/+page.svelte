<script>
import { enhance } from '$app/forms';

  let { data, form } = $props();

  let numberValue = 5; // Default value

  async function deleteItem(id) {
    const res = await fetch(`/api/skillset?Id=${id}`, { method: 'DELETE' });
    if (res.ok) {
      // let SvelteKit refetch instead of reload
      location.reload(); // (can later be replaced with invalidate)
    }
  }
</script>


<h3 class="text-2xl font-semibold text-gray-800 mb-1">Skills</h3>
<div class="min-h-screen p-4">
{#if form?.success}
  <p>{form.success? 'Form submitted successfully!' : `Error: ${form.error}`}</p>

{/if}
<div class="flex  ">



  <form  method="POST"   use:enhance class="space-y-6 mb-3 bg-white p-8 rounded shadow-md w-full max-w-5xl">
    <h2 class="text-2xl font-bold text-gray-800 text-center mb-4">Add New Skill</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
     

      <!-- Side-by-side fields -->
      <label class="block">
        <span class="text-gray-700 font-medium">Prograaming/Framework/Tech:</span>
        <input
          type="text"
          name="skillname"
          required
          class="mt-1 w-full p-3 border rounded focus:ring focus:ring-blue-300 outline-none"
          placeholder="Python , C++, JavaScript, Java etc"
        />
      </label>
      <label class="block">
        <span class="text-gray-700 font-medium">Expertise:</span>
        <select
          name="expertise"
          required
          class="mt-1 w-full p-3 border rounded focus:ring focus:ring-blue-300 outline-none"
          placeholder="Beginner, Intermediate, Expert"
        >
        <option value="beginner">Beginner</option>
        <option value="intermediate">Intermediate</option>
        <option value="expert">Expert</option>
       
      </select>
      </label>

    
     
      <label class="block">
        <span class="text-gray-700 font-medium">Stars:</span>
        <input
          type="number"
          name="stars"
          required
          min="1"
          max="5"
          step="1"
          maxlength="1"
          pattern="[1-5]*"
          bind:value={numberValue}
          class="mt-1 w-full p-3 border rounded focus:ring focus:ring-blue-300 outline-none"
          placeholder="5"
        />
      </label>
      <label class="block">
        <span class="text-gray-700 font-medium">Year of Experience:</span>
        <input
          type="number"
          name="year_experiance"
          required
          class="mt-1 w-full p-3 border rounded focus:ring focus:ring-blue-300 outline-none"
          placeholder="1 Year "
        />
      </label>
    

     <label class="block">
        <span class="text-gray-700 font-medium">Primary Skill:</span>
        <select
          name="is_primary"
          required
          class="mt-1 w-full p-3 border rounded focus:ring focus:ring-blue-300 outline-none"
          placeholder="Beginner, Intermediate, Expert"
        >
       
        <option value="true">Yes</option>
        <option value="false">No</option>
       
      </select>
      </label>

      
    </div>

    <button
      type="submit"
      class="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 focus:ring focus:ring-blue-300 focus:outline-none"
    >
      Add Skill
    </button>
  </form>
</div>
{#if data.skillsData.length === 0}
  <p class="text-center text-gray-500">No skills found.</p>
{:else}
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
    {#each data.skillsData as skill (skill.id)}
    <!-- Card 1 -->
    <div class="relative bg-white p-6 rounded-lg shadow-md">
      <!-- Delete button in top-right corner -->
  <button  on:click={() => deleteItem(skill.id)} class="absolute top-2 right-2  rounded-full  hover:bg-red-500 p-1 hover:text-gray-900 focus:outline-none transition-all duration-500 ease-in-out">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
  <path fill-rule="evenodd" d="M8.75 1A2.75 2.75 0 0 0 6 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 1 0 .23 1.482l.149-.022.841 10.518A2.75 2.75 0 0 0 7.596 19h4.807a2.75 2.75 0 0 0 2.742-2.53l.841-10.52.149.023a.75.75 0 0 0 .23-1.482A41.03 41.03 0 0 0 14 4.193V3.75A2.75 2.75 0 0 0 11.25 1h-2.5ZM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4ZM8.58 7.72a.75.75 0 0 0-1.5.06l.3 7.5a.75.75 0 1 0 1.5-.06l-.3-7.5Zm4.34.06a.75.75 0 1 0-1.5-.06l-.3 7.5a.75.75 0 1 0 1.5.06l.3-7.5Z" clip-rule="evenodd" />
</svg>


  </button>
      <h4 class="text-xl font-semibold text-gray-800 mb-2">{skill.name}</h4>
      <div class="space-y-2">
        <div>
          <span class="font-semibold text-gray-700">Expertise:</span>
          <span class="text-gray-600">{skill.expertise}</span>
        </div>
         <div>
          <span class="font-semibold text-gray-700">Years of Experience:</span>
          <span class="text-gray-600">{skill.year_experiance}</span>
        </div>
         <div>
          <span class="font-semibold text-gray-700">Primary:</span>
          <span class="text-gray-600">{skill.is_primary}</span>
        </div>
        <div>
          <span class="font-semibold text-gray-700">Stars(5):</span>
          <span class="text-gray-600">{skill.stars}</span>
             <!-- Rating Bar with Percentage Text -->
      <div class="relative w-full h-6 bg-gray-200 rounded-full border-2 border-gray-400">
        <div
          class={`h-full rounded-full transition-all
            ${skill.stars === 5 ? 'bg-green-700' : ''}
            ${skill.stars === 4 ? 'bg-green-600' : ''}
            ${skill.stars === 3 ? 'bg-green-500' : ''}
            ${skill.stars <= 2 ? 'bg-red-800' : ''}
          `}
          style="width: {skill.stars / 5 * 100}%">
          <!-- Percentage inside the progress bar -->
          <span class="absolute inset-0 flex items-center justify-center text-gray font-semibold">
            {Math.round((skill.stars / 5) * 100)}%
          </span>
        </div>
      </div>
        </div>
      </div>
    </div>
    {/each}

  </div>
  {/if}
</div>
