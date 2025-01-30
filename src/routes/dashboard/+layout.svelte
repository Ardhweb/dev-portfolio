<script>
  import { SignIn, SignOut } from "@auth/sveltekit/components"
  import { page } from "$app/stores"
  import { signOut } from "@auth/sveltekit/client";
</script>
<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Afacad+Flux:wght@100..1000&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet">
</svelte:head>
<style>
    .font-dashboard{
      font-family: "Open Sans" !important; /* Override font-family */

    }
  </style>
{#if $page.data.session}
<div class="flex flex-col h-screen font-dashboard">
<!-- Top Navbar -->
<nav class="bg-slate-100 px-4 py-3 shadow-md">
  <div class="flex justify-between items-center">
    <h1 class="text-md font-bold">SveltePort</h1>
    <div class="flex items-center space-x-4 text-gray">
      <button class="bg-slate-300 px-3 py-1 rounded hover:bg-blue-700">Profile</button>
      <button 
        on:click={signOut({ callbackUrl: '/', redirect: true })} 
        class="bg-slate-300 px-3 py-1 rounded hover:bg-blue-700">
        Logout
      </button>
      <img 
        src="" 
        alt="User Avatar" 
        class="w-8 h-8 rounded-full border border-gray-700 object-cover"
      />
    </div>
  </div>
</nav>


  <div class="flex flex-1 overflow-hidden">
    <!-- Sidebar -->
<!-- svelte-ignore attribute_illegal_colon -->
<aside class="w-64 bg-gray-800 text-gray-200 flex flex-col h-screen ">
  <!-- Navigation Links -->
  <div class="flex flex-col p-4 space-y-4 flex-grow">
    <a href="/dashboard" class="px-3 py-2 rounded hover:bg-gray-700" sveltekit:prefetch>Home</a>
    <a href="/dashboard/media" class="px-3 py-2 rounded hover:bg-gray-700" sveltekit:prefetch>Media</a>
    <a href="/dashboard/projects" class="px-3 py-2 rounded hover:bg-gray-700" sveltekit:prefetch>Projects</a>
    <a href="/dashboard/settings" class="px-3 py-2 rounded hover:bg-gray-700" sveltekit:prefetch>Settings</a>
    
  </div>

  
  <!-- Footer -->
  <footer class="absolute bottom-0 p-4 text-sm text-gray-400 border-t border-gray-700">
    <p>Logged in as <strong>{$page.data.session.user?.name ?? "User"}</strong></p>
    © {new Date().getFullYear()} SveltePort.v.1
  </footer>
</aside>

    
      

    <!-- Main Content -->
    <main class="flex-1 bg-slate-300 p-6 overflow-auto">
      <slot /> <!-- Renders nested route content -->
    </main>
  </div>
</div>
{:else}
<h1>Restreicted Area Dude1</h1>
{/if}
