<script>
    let bgvide = "5474268-sd_426_226_25fps.mp4"
    function scrollToSection(sectionId) {
      document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
    }
</script>
<section class="relative bg-cover  bg-center" id="about-section">
  <!-- Background Video -->
  <div class="absolute inset-0 z-0">
    <video class="w-full h-full object-cover opacity-50" loop autoplay muted>
      <source src={bgvide} type="video/mp4">
        <!-- Fallback content for browsers that don't support video -->
        Your browser does not support the video tag.
    </video>
  </div>
  
  <!-- Overlay for the video -->
  <div class="absolute inset-0 bg-black opacity-40 z-10"></div> <!-- Overlay with reduced opacity -->
  
  <div class="container  px-6 py-4 relative z-20">
    <h4 class="flex-first text-white text-[1.5rem]">About me</h4>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mt-3">
      <!-- Left Column: Content (bigger than the right column) -->
      <div class="md:col-span-3 text-white">
        <p class="tracking-wider text-1xl font-normal mb-6 space-y-6">
          I am a Software Developer with almost 2 years of experience in the IT industry and my higher-level education background is a Computer Science graduate. I currently work at a leading IT company while also taking on freelance projects. I specialize in developing innovative software solutions and business tools that address real-world challenges.
          
          <br><br>
          
          With expertise in building scalable and efficient products, I help businesses streamline operations and improve productivity through custom software, automation tools, and business optimization. My goal is to deliver impactful, tech-driven results that drive growth.
        
          <br><br>
        
          Let’s connect and explore how I can help your business thrive with innovative software solutions.
        </p>

        <button on:click={() => scrollToSection('section-projects-history')}
            class="tracking-wider text-slate-50 font-light border hover:bg-white hover:text-black rounded py-[0.345rem] px-4  ">
          Previous Projects
        </button>
      </div>
    </div>
  </div>
</section>