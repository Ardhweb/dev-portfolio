<script>
export let skills  = []
console.log("Gert",skills)
</script>
{#if skills.length == 0}
{:else}
<div  class="container px-6 py-4 relative z-20">
  <h4 class="flex-last text-right text-white text-[3.5rem]">Skill Set</h4>
 <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
{#each skills as skill}
            <!-- Skill Item 1 -->
            <div class="  p-4  ">
                <h3 class="text-xl font-semibold glow">{skill.name}</h3>
                <div class="h-2 bg-gray-600 mt-2 rounded-lg">
                    <div class="h-full rounded-lg bg-blue-500 w-90%"></div>
                </div>
            </div>
{/each}
        </div>
</div>
{/if}