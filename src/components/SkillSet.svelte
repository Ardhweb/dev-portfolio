<script>
  export let skills = [];

  // Function to determine the progress bar width and color based on the stars
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
</script>

{#if skills.length == 0} 
  <!-- If no skills, don't render anything -->
{:else} 
  <div class="container px-6 py-6 z-20">
    <!-- Skill Set Section -->
    <div class="relative w-full text-right">
      <small class="text-1xl glow font-mono text-green-500 absolute top-[-1rem] right-0">
        03
      </small>
      <h4 class="text-white text-[2.5rem]">
        Skill Set
      </h4>
      <small class="text-1xl glow font-mono text-green-500 absolute right-0">
        Some of used stack; in recent time of mine.
      </small>
    </div>
    
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each skills as skill}
        <!-- Skill Item -->
        <div class="p-4">
          <!-- Left-aligned skill name -->
          <h3 class="text-xl text-gray-300 font-mono text-left">{skill.name}</h3> <!-- Left-aligned text -->
          
          <!-- Progress bar -->
          <div class="flex w-full h-1 bg-red-400 rounded-full overflow-hidden dark:bg-neutral-700" role="progressbar" aria-valuenow={getProgressBar(skill.stars).percentage} aria-valuemin="0" aria-valuemax="100">
            <!-- Colored filled part of the bar -->
            <div class="flex flex-col justify-center rounded-full overflow-hidden text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500"
                 style="width: {getProgressBar(skill.stars).width}%; background-color: {getProgressBar(skill.stars).color};">
            </div>
          </div>
          
          <!-- Percentage Display aligned to the right -->
          <div class="text-right font-mono text-green-500 pt-1 text-sm">
            {getProgressBar(skill.stars).percentage}%
          </div>
        </div>
      {/each}
    </div>
  </div>
{/if}
