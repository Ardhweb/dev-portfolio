<!-- svelte-ignore non_reactive_update -->
<script>
  import Navbar from "../components/Navbar.svelte";
  import HowWeWork from "../components/HowWeWork.svelte";
  import Footer from "../components/Footer.svelte";
  import ContactModal from "../components/ContactModal.svelte";
  import Work from "../components/Work.svelte";
  import { pushState } from "$app/navigation";
  import Totalusers from "../components/TestCompo/totalusers.svelte";
  import BackgroundBeams from "../components/ui/BackgroundBeams.svelte"
  import SkillSet from "../components/SkillSet.svelte";
  let { data } = $props();
  const { offset, limit, len_total_proj, first_project_id } = data;
  import { page } from "$app/stores";

</script>

<div class="bg-gray-900 border-t-lg border-gray-700">
  <!--Navbar-->
  <Navbar></Navbar>
  <!--Navbar End-->

  <!--Header-hero-->
  <script>
    import Heroimg from "$lib/assets/media/hero-1.png";
  </script>

  <script>
    const imgUrl = new URL("static/images/hero-1.png", import.meta.url).href;
  </script>



  <section class="py-20">
    
      <BackgroundBeams />
  
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center container mx-auto">
      <!-- Left Side: Image -->
<div class="w-full relative">
  <img src="/image-logo.webp" class=" hidden animate-spin-slow duration-[10s] absolute inset-0 h-60 object-cover " alt="background">
  <img src="/hero-1.png" class="w-full max-w-lg relative z-10" />
</div>


      <!-- Right Side: Information -->
      <div class="text-center md:text-left">  <div class="relative w-fit">
  <small class="text-1xl glow font-mono text-green-500 absolute top-[-1rem] left-0">01</small>
  <h1 class="text-6xl text-white ">Hello, I'm Rahul</h1>
          <p class="text-xl text-gray-300 mb-4">
          <a href="/accounts/auth/login">Software Developer</a>
          {#if $page.data.session}
            {#if $page.data.session.user}
              <!-- svelte-ignore node_invalid_placement_ssr -->
              <div class="relative inline-block">
                <a href="/dashboard">
                <span
                  class="absolute top-0 left-1 rounded-full bg-green-300 h-[0.4rem] w-[0.4rem] animate-ping"
                ></span>
                </a>
                <span
                  class="absolute top-0 left-1 rounded-full bg-green-400 h-[0.350rem] w-[0.350rem]"
                ></span>
              </div>
            {/if}
          {:else}
          <a href="/accounts/auth/login">
            <span
              class="inline-block rounded-full bg-gray-400 h-[0.2rem] w-[0.2rem]"
            ></span></a>
          {/if}
        </p>
</div>
        


        <p class="text-gray-400 mb-6">
          Passionate about coding and building impactful applications. Always
          eager to learn and contribute to amazing projects.
        </p>
        <div class="flex gap-4 mt-4">
          <!-- svelte-ignore event_directive_deprecated -->
          <button
            on:click={toggleModal}
            class="tracking-wider font-light bg-white text-black rounded py-[0.345rem] px-4 border border-gray-300 rounded shadow hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            Let's Start Now
          </button>
          <!-- svelte-ignore event_directive_deprecated -->
          <button
            on:click={() => scrollToSection("section-projects-history")}
            class="tracking-wider text-slate-50 font-light border hover:bg-white hover:text-black rounded py-[0.345rem] px-4"
          >
            Browse Projects
          </button>
        </div>
        <div class="flex gap-2 mt-2">
       <a href="https://www.linkedin.com/in/rahul-mahawar-07a1991b8/" class="text-gray-400 text-2xl">
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.7065 3H4.34844C3.62264 3 3.04199 3.58065 3.04199 4.30645V19.6935C3.04199 20.3903 3.62264 21 4.34844 21H19.6485C20.3743 21 20.9549 20.4194 20.9549 19.6935V4.27742C21.013 3.58065 20.4323 3 19.7065 3ZM8.35491 18.3H5.71297V9.73548H8.35491V18.3ZM7.01942 8.54516C6.14846 8.54516 5.4807 7.84839 5.4807 7.00645C5.4807 6.16452 6.17749 5.46774 7.01942 5.46774C7.86136 5.46774 8.55813 6.16452 8.55813 7.00645C8.55813 7.84839 7.91942 8.54516 7.01942 8.54516ZM18.371 18.3H15.7291V14.1484C15.7291 13.1613 15.7001 11.8548 14.3356 11.8548C12.942 11.8548 12.7388 12.9581 12.7388 14.0613V18.3H10.0968V9.73548H12.6807V10.9258H12.7097C13.0872 10.229 13.9291 9.53226 15.2356 9.53226C17.9356 9.53226 18.4291 11.2742 18.4291 13.6548V18.3H18.371Z" fill="#323544"/>
</svg>
       </a>

       <a href="https://bracknode.blogspot.com">
       <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.8169 12.8873C14.0704 12.8873 14.2817 12.9859 14.4507 13.1831C14.6197 13.3521 14.7042 13.5633 14.7042 13.8169C14.7042 14.0704 14.6197 14.2817 14.4506 14.4507C14.2817 14.6197 14.0704 14.7042 13.8169 14.7042H10.1409C9.88726 14.7042 9.67599 14.6197 9.50705 14.4506C9.33798 14.2817 9.25345 14.0704 9.25345 13.8169C9.25345 13.5633 9.33798 13.3521 9.50705 13.1831C9.67605 12.9859 9.88732 12.8873 10.1409 12.8873H13.8169ZM10.1409 10.1831C9.88726 10.1831 9.67599 10.0986 9.50705 9.92953C9.33798 9.76053 9.25345 9.54925 9.25345 9.29572C9.25345 9.04224 9.33798 8.83099 9.50705 8.66199C9.67605 8.49292 9.88732 8.40839 10.1409 8.40839H12.507C12.7606 8.40839 12.9718 8.49292 13.1408 8.66199C13.3099 8.83099 13.3944 9.04224 13.3944 9.29572C13.3944 9.54931 13.3099 9.76059 13.1408 9.92953C12.9718 10.0986 12.7605 10.1831 12.507 10.1831H10.1409ZM15.5914 10.1831V8.40839C15.5914 7.67595 15.3239 7.04214 14.7887 6.50694C14.2535 5.97175 13.6197 5.70415 12.8873 5.70415H9.29572C8.56334 5.70415 7.92955 5.97175 7.39436 6.50694C6.85916 7.04214 6.59156 7.67595 6.59156 8.40839V14.7041C6.59156 15.4365 6.85916 16.0703 7.39436 16.6055C7.92955 17.1407 8.56334 17.4083 9.29572 17.4083H14.7042C15.4366 17.4083 16.0704 17.1407 16.6056 16.6055C17.1408 16.0703 17.4084 15.4365 17.4084 14.7041V12C17.4084 11.7464 17.3239 11.5351 17.1548 11.366C16.9858 11.197 16.7746 11.1125 16.5211 11.1125C16.2676 11.1125 16.0422 11.028 15.845 10.859C15.676 10.6618 15.5914 10.4365 15.5914 10.1829V10.1831ZM19.2254 3C19.7043 3 20.1127 3.18309 20.4507 3.54928C20.8169 3.88729 21 4.29575 21 4.77465V19.2253C21 19.7042 20.8169 20.1267 20.4507 20.4929C20.1127 20.8309 19.7043 20.9999 19.2254 20.9999H4.77465C4.29575 20.9999 3.87321 20.8309 3.50702 20.4929C3.16901 20.1267 3 19.7042 3 19.2254V4.77465C3 4.29575 3.16901 3.88729 3.50702 3.54928C3.87321 3.18309 4.29575 3 4.77465 3L19.2254 3Z" fill="#323544"/>
</svg>

       </a>

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
  <section class="relative bg-cover bg-center" id="about-section-container">
    <!-- Background Video -->
    <div class="absolute inset-0 z-0">
      <video class="w-full h-full object-cover opacity-50" loop autoplay muted>
        <source src="5474268-sd_426_226_25fps.mp4" type="video/mp4" />
        <!-- Fallback content for browsers that don't support video -->
        Your browser does not support the video tag.
      </video>
    </div>

    <!-- Overlay for the video -->
    <div class="absolute inset-0 bg-black opacity-40 z-10"></div>
    <!-- Overlay with reduced opacity -->

    <div class="container px-6 py-4 relative z-20">
   <div class="relative w-fit">
  <small class="text-1xl glow font-mono text-green-500 absolute top-[-1rem] right-0">02</small>
  <h4 class="text-white w-fit text-[2.5rem]">About me</h4>
</div>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mt-3">
        <!-- Left Column: Content (bigger than the right column) -->
        <div class="md:col-span-3 text-white">
          <p class="tracking-wider text-1xl font-normal mb-6 space-y-6">
            I am a Software Developer with almost 2 years of experience in the
            IT industry and my higher-level education background is a Computer
            Science graduate. I currently work at a leading IT company while
            also taking on freelance projects. I specialize in developing
            innovative software solutions and business tools that address
            real-world challenges.

            <br /><br />

            With expertise in building scalable and efficient products, I help
            businesses streamline operations and improve productivity through
            custom software, automation tools, and business optimization. My
            goal is to deliver impactful, tech-driven results that drive growth.

            <br /><br />

            Let’s connect and explore how I can help your business thrive with
            innovative software solutions.
          </p>

          <!-- svelte-ignore event_directive_deprecated -->
          <button
            on:click={() => scrollToSection("section-projects-history")}
            class="tracking-wider text-slate-50 font-light border hover:bg-white hover:text-black rounded py-[0.345rem] px-4"
          >
            Previous Projects
          </button>
        </div>
      </div>
    </div>
  </section>

  <!--About me end-->

  <!--SkillSet-->
  <SkillSet skills={data.skills}></SkillSet>
  <!--SkillSet End Here -->

  <!--myWork-->
  <Work
    {offset}
    {limit}
    {len_total_proj}
    {first_project_id}
    projects={data.projects}
    medias={data.medias}
  ></Work>
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


</div>
