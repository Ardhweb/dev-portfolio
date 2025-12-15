<script>
  export let skills = [];
  console.log("Gert", skills);
</script>

{#if skills.length == 0} 
{:else} 
  <div class="container px-6 py-6 z-20">
    <!-- Skill Set Section -->
    <div class="relative w-full text-right">  <!-- Align to right -->
      <small class="text-1xl glow font-mono text-green-500 absolute top-[-1rem] right-0">
        03
      </small>
      <h4 class="text-white text-[2.5rem]">
        Skill Set
      </h4>
    </div>
    
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each skills as skill}
        <!-- Skill Item -->
        <div class="p-4">
          <h3 class="text-xl font-semibold glow text-right">{skill.name}</h3> <!-- Right-aligned text -->
          
          <div class="h-2 bg-gray-600 mt-2 rounded-lg">
            <div class="h-full rounded-lg bg-blue-500" style="width: 90%;"></div> <!-- Adjust width -->
          </div>
        </div>
      {/each}
    </div>
  </div>
{/if}
