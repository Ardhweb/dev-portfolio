<script>
  export let projects = []; // This will hold data for a single user
</script>



<section id="section-projects-history" class="flex flex-col  p-8 min-h-screen">
    <h4 class="flex-first text-white text-[3.5rem]">Work</h4>
    {#if projects.length > 0}

    {#each projects as project}
  <!-- Single Card -->
   <!-- Grid Layout -->
  <div id="projectGrid" class=" mt-6 relative grid grid-cols-5 gap-4 p-6 text-center border border-gray-700 rounded-lg transition-all duration-300 ease-in-out bg-gray-800 hover:bg-opacity-50 hover:bg-cover hover:bg-[url('https://picsum.photos/536/354')]">
  
  <!-- Year and Category -->
  <div class="col-span-1 text-white flex flex-col justify-center items-center">
  <div class="text-3xl ">2022</div>
  <p class="text-sm text-gray-400">{project.projectname}</p>
  </div>
  
  <!-- Description -->
  <div class="col-span-3 text-white text-center flex flex-col justify-center items-center">
   
    <p class="group-hover:mix-blend-difference text-sm text-gray-400 text-wrap text-pretty truncate">
   Supply Chain Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique aspernatur sunt earum voluptate delectus dolor suscipit unde soluta sit minus quidem, rem accusantium, molestiae nesciunt, recusandae perferendis quibusdam expedita quae?
  </p>
  </div>
  
  <!-- Button for Expanding Description -->
  <div class="col-span-1 flex justify-end items-center">
  <!-- svelte-ignore a11y_consider_explicit_label -->
  <button on:click={toggleDetails()} class="rounded-full text-white border p-2 hover:border-gray-400">
   <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5-5 5M6 12h12"></path>
   </svg>
  </button>
  </div>
  
  <!-- Expandable Section -->
  <div id="projectDetails" class=" text-white col-span-5 overflow-hidden max-h-0 transition-all duration-300 ease-in-out">
  <div class="p-4 border-t border-gray-700 mt-4 flex flex-col md:flex-row items-center gap-4">
   <!-- svelte-ignore a11y_img_redundant_alt -->
   <img src="https://picsum.photos/536/354" alt="Project Image" class="w-full md:w-1/2 rounded-lg object-cover">
   <div class="md:w-1/2 text-left align-top items-start">
    <h4 class="text-4xl font-medium mb-2">{project.projectname}</h4>
     <h5 class="text-2xl font-medium mb-2">Project Description</h5>
     <p class="text-sm text-gray-400">
       This project focuses on streamlining the supply chain process through advanced web development strategies.
     </p>
      <div class=" text-white flex gap-3 flex-col">
        <p>Python , Javascript , AWS , In-memory </p>
        <!-- svelte-ignore a11y_invalid_attribute -->
        <a href="#" class="flex items-center space-x-2">
          <span class="text-xl">🗲</span>
          <span>Visit Source</span>
      </a>
      
        
        <button on:click={openGallery()} class="tracking-wider font-light bg-white text-black rounded py-[0.345rem] px-4 border border-gray-300 rounded shadow hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
          View Gallery
        </button>
      </div>
   </div>
  </div>
  </div>
  </div>
  
   <!-- Carousel Popup Modal -->
  <div id="galleryModal" class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center hidden z-50">
    <div class="bg-gray-800 p-4 rounded-lg w-11/12 max-w-3xl relative">
      <!-- Close Button (higher z-index to be on top) -->
      <button on:click={closeGallery()} class="absolute top-2 right-2 text-white text-6xl z-30">×</button>
      
      <!-- Carousel -->
      <div class="carousel space-x-4 overflow-hidden flex items-center">
        <!-- Example Images and Videos in the Carousel -->
        <div class="carousel-item flex-shrink-0 w-full" style="display: block;">
          <img src="https://picsum.photos/500/300" alt="Slide 1" class="w-full rounded-lg">
        </div>
        <div class="carousel-item flex-shrink-0 w-full" style="display: none;">
          <!-- svelte-ignore a11y_media_has_caption -->
          <video src="https://www.w3schools.com/html/mov_bbb.mp4" controls="" class="w-full rounded-lg"></video>
        </div>
        <div class="carousel-item flex-shrink-0 w-full" style="display: none;">
          <img src="https://picsum.photos/500/301" alt="Slide 3" class="w-full rounded-lg">
        </div>
      </div>
      
      <!-- Centered Navigation Arrows (without overlapping the close button) -->
      <div class="absolute inset-0 flex items-center justify-between px-4 z-20">
        <button on:click={prevSlide()} class="text-white text-5xl">❮</button>
        <button on:click={nextSlide()} class="text-white text-5xl">❯</button>
      </div>
      
    </div>
  </div>

  {/each}
  
  
  
    <script>
      function toggleDetails() {
        const details = document.getElementById("projectDetails");
        const grid = document.getElementById("projectGrid");
    
        // Toggle expanded state and manage the hover background class
        if (details.style.maxHeight) {
          details.style.maxHeight = null;
          grid.classList.add("hover:bg-[url('https://picsum.photos/536/354')]");
        } else {
          details.style.maxHeight = `${details.scrollHeight}px`;
          grid.classList.remove("hover:bg-[url('https://picsum.photos/536/354')]");
        }
      }
    
      function openGallery() {
        document.getElementById("galleryModal").classList.remove("hidden");
      }
    
      function closeGallery() {
        document.getElementById("galleryModal").classList.add("hidden");
      }
    
  
      // Carousel Functionality
      let currentSlide = 0;
      const slides = document.querySelectorAll('.carousel-item');
  
      function showSlide(index) {
        slides.forEach((slide, i) => {
          slide.style.display = i === index ? 'block' : 'none';
        });
      }
  
      function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
      }
  
      function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
      }
  
      document.addEventListener("DOMContentLoaded", () => showSlide(currentSlide));
    </script>
  
  {:else}
  <p>No users found.</p>
{/if}
    </section>