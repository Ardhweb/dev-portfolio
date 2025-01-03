
<script>
    import Navbar from '../components/Navbar.svelte';
    import HowWeWork from "../components/HowWeWork.svelte";
    import Footer from '../components/Footer.svelte';
    import ContactModal from '../components/ContactModal.svelte';
    import Work from '../components/Work.svelte';
    import { pushState } from '$app/navigation';
    import Totalusers from '../components/TestCompo/totalusers.svelte';
    let { data } = $props();
</script>


<div class="bg-gray-900 border-t-lg border-gray-700">
<!--Navbar-->
<Navbar></Navbar>
<!--Navbar End-->

<!--Header-hero-->
<script>
  import Heroimg from '$lib/assets/media/hero-1.png';
</script>

<script>
  const imgUrl = new URL('static/images/hero-1.png', import.meta.url).href
  </script>
  

<section class="py-20 bg-transparent">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center container mx-auto">
    <!-- Left Side: Image -->
    <div class="w-full">
      <!-- svelte-ignore a11y_img_redundant_alt -->
      <!-- svelte-ignore a11y_missing_attribute -->
      <img src="/hero-1.png" class="w-full max-w-lg"/>
      
    </div>
    
    <!-- Right Side: Information -->
    <div class="text-center md:text-left">
      <h1 class="text-6xl  text-white mb-4">Hello, I'm Rahul</h1>
      <p class="text-xl text-gray-300 mb-4">Software Developer</p>
      <p class="text-gray-400 mb-6">Passionate about coding and building impactful applications. Always eager to learn and contribute to amazing projects.</p>
      <div class="flex gap-4 mt-4">
        <!-- svelte-ignore event_directive_deprecated -->
        <button on:click={toggleModal} class="tracking-wider font-light bg-white text-black rounded py-[0.345rem] px-4 border border-gray-300 rounded shadow hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
          Let's Start Now
        </button>
        <!-- svelte-ignore event_directive_deprecated -->
        <button on:click={() => scrollToSection('section-projects-history')}  class="tracking-wider text-slate-50 font-light border hover:bg-white hover:text-black rounded py-[0.345rem] px-4  ">
          Browser Projects
        </button>
      </div>
    </div>
    
  </div>
</section>





<!--Header_hero End-->

<!--Divider-->

<!--Divivder1 End-->

<!--About me-->
<script>
    
    function scrollToSection(sectionId) {
      document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
    }
</script>
<section class="relative bg-cover  bg-center h-screen">
  <!-- Background Video -->
  <div class="absolute inset-0 z-0">
    <video class="w-full h-full object-cover opacity-50" loop autoplay muted>
      <source src="5474268-sd_426_226_25fps.mp4" type="video/mp4">
        <!-- Fallback content for browsers that don't support video -->
        Your browser does not support the video tag.
    </video>
  </div>
  
  <!-- Overlay for the video -->
  <div class="absolute inset-0 bg-black opacity-40 z-10"></div> <!-- Overlay with reduced opacity -->
  
  <div class="container  px-6 py-4 relative z-20">
    <h4 class="flex-first text-white text-[3.5rem]">About me</h4>
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

        <!-- svelte-ignore event_directive_deprecated -->
        <button on:click={() => scrollToSection('section-projects-history')}
            class="tracking-wider text-slate-50 font-light border hover:bg-white hover:text-black rounded py-[0.345rem] px-4  ">
          Previous Projects
        </button>
      </div>
    </div>
  </div>
</section>

<!--About me end-->


<!--myWork-->
<Work></Work>
<!--Workend-!->

<!How We Work-->
<HowWeWork></HowWeWork>
<!--Howe We Work End-->

<!--cta-->
<ContactModal></ContactModal>

<!--ctaend-->

<!--Footer-->
<Footer></Footer>

<!--Offcanvas-->

<script>
  console.log(data)
</script>

<Totalusers users={data.users_data} />



  
  <h1 class="text-white">Total Users: {data.users_data.length}</h1>
  
  <ul class="text-red">
    {#each data.users_data as user (user.id)}
      <li>
        <p class="text-white">Name: {user.name}</p>
        <p class="text-white">Email: {user.email}</p>
      </li>
    {/each}
  </ul>
  
  {#if data.users_data.length === 0}
    <p>No users found.</p>
  {/if}
  















</div>


