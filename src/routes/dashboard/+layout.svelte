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
<div class="flex flex-col h-screen font-dashboard">
  <!-- Top Navbar -->
  <nav class="bg-slate-100  px-4 py-3 shadow-md">
    <div class="flex justify-between items-center">
      <h1 class="text-lg font-bold">Dashboard</h1>
      <div class="space-x-4 text-gray ">
        <button class="bg-slate-300 px-3 py-1 rounded hover:bg-blue-700">Profile</button>
        <button class="bg-slate-300 px-3 py-1 rounded hover:bg-blue-700">Logout</button>
      </div>
    </div>
  </nav>

  <div class="flex flex-1 overflow-hidden">
    <!-- Sidebar -->
    <!-- svelte-ignore attribute_illegal_colon -->
    <aside class="w-64 bg-gray-800 text-gray-200 flex flex-col p-4 space-y-4">
        <!-- svelte-ignore attribute_illegal_colon -->
        <a href="/dashboard" class="px-3 py-2 rounded hover:bg-gray-700" sveltekit:prefetch>Home</a>
        <!-- svelte-ignore attribute_illegal_colon -->
        <!-- svelte-ignore attribute_illegal_colon -->
        <a href="/dashboard/projects" class="px-3 py-2 rounded hover:bg-gray-700" sveltekit:prefetch>Project</a>
        <a href="/dashboard/settings" class="px-3 py-2 rounded hover:bg-gray-700" sveltekit:prefetch>Settings</a>
      </aside>
      

    <!-- Main Content -->
    <main class="flex-1 bg-slate-300 p-6 overflow-auto">
      <slot /> <!-- Renders nested route content -->
    </main>
  </div>
</div>
