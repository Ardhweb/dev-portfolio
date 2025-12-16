<script>
  export let skills = [];    // Function to determine the progress bar width and color based on the stars
  const getProgressBar = (stars) => {
    let width;
    let color;
    let percentage;

    if (stars <= 2) {
      width = (stars - 1) * 35;  // 1-2 stars map to 0-35%
      color = 'bg-red-600';  // Red color for the bar
      percentage = width;  // 0-35%
    } else if (stars <= 4) {
      width = 35 + (stars - 2) * 17.5;  // 3-4 stars map to 35-85%
      color = 'bg-yellow-500';  // Yellow color for the bar
      percentage = Math.round(width);  // 35-85%
    } else {
      width = 100;  // 5 stars maps to 100%
      color = 'bg-green-600';  // Green color for the bar
      percentage = width;  // 100%
    }

    return { width, color, percentage };
  };

  // Split skills into primary and non-primary
  let primarySkills = skills.filter(skill => skill.is_primary === true);
  let nonPrimarySkills = skills.filter(skill => skill.is_primary !== true);
</script>

{#if skills.length == 0}
  <!-- If no skills, don't render anything -->
{:else}
  <div class="container px-6 py-6 z-20">
    <!-- Main Skill Set Section -->
    <div class="relative w-full text-right">
      <small class="text-1xl glow font-mono text-green-500 absolute top-[-1rem] right-0">
        03
      </small>
      <h4 class="text-white text-[2.5rem]">
        Skill Set
      </h4>
      <small class="text-1xl glow font-mono text-green-500 absolute right-0">
        Some of the stack I’ve worked with recently.
      </small>
    </div>

    <!-- Primary Skills Subsection -->
    {#if primarySkills.length > 0}
      <div class="my-6">
        <h5 class="text-xl hidden text-white font-mono">Primary Skills</h5>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {#each primarySkills as skill}
            <!-- Skill Item -->
            <div class="p-4">
              <h3 class="text-xl text-gray-300 font-mono text-left">{skill.name}</h3>
              <div class="flex w-full h-1 bg-red-400 rounded-full overflow-hidden dark:bg-neutral-700" role="progressbar" aria-valuenow={getProgressBar(skill.stars).percentage} aria-valuemin="0" aria-valuemax="100">
                <div class="flex flex-col justify-center rounded-full overflow-hidden text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500"
                  style="width: {getProgressBar(skill.stars).width}%; background-color: {getProgressBar(skill.stars).color};">
                </div>
              </div>
              <div class="text-right font-mono text-green-500 pt-1 text-sm">
                {getProgressBar(skill.stars).percentage}%
              </div>
            </div>
          {/each}
        </div>
      </div>
    {/if}

    <!-- Non-Primary Skills Subsection (Familiar Skills) -->
    {#if nonPrimarySkills.length > 0}
      <div class="my-6">
  <div class="w-full text-left">
  <!-- Title for Familiar Skills -->
  <h5 class="hidden text-xl text-white font-mono mb-4">Familiar Skills</h5>
  
  <!-- Description for Familiar Skills -->
  <small class="text-1xl glow font-mono text-green-500 block mb-6">
    Familiar stuff
  </small>
</div>

<!-- Grid for Familiar Skills -->
<div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
  {#each nonPrimarySkills as skill}
    <!-- Skill Item (Smaller) -->
    <div class="p-2">
      <h3 class="text-sm text-gray-300 font-mono text-left">{skill.name}</h3> <!-- Smaller text -->
      <div class="flex w-full h-1 bg-red-400 rounded-full overflow-hidden dark:bg-neutral-700" role="progressbar" aria-valuenow={getProgressBar(skill.stars).percentage} aria-valuemin="0" aria-valuemax="100">
        <!-- <div class="flex flex-col justify-center rounded-full overflow-hidden text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500"
          style="width: {getProgressBar(skill.stars).width}%; background-color: {getProgressBar(skill.stars).color};">
        </div> -->

        <div class="flex w-full flex-col justify-center rounded-full overflow-hidden text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500"
          style="background-color:rgba(245, 84, 84, 0.322); ">
        </div>
       
      </div>
      <!-- <div class="text-right font-mono text-green-500 pt-1 text-xs"> 
       
        {getProgressBar(skill.stars).percentage}%
      </div> -->
    </div>
  {/each}
</div>

      </div>
    {/if}

  </div>
{/if}
