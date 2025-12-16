<script>
  import { SignIn, SignOut } from "@auth/sveltekit/components";
  import { page } from "$app/stores";
  import { signOut } from "@auth/sveltekit/client";
</script>

<div class="min-h-screen flex items-center justify-center bg-gray-100">
  <div class="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
    <h1>SvelteKit Auth Example</h1>
    {#if $page.data.session}
      <span class="signedInText">
        <small>Signed in as</small><br />
        <strong>{$page.data.session.user?.name ?? "User"}</strong>
      </span>
      
      <!-- Buttons in the same line -->
      <div class="flex space-x-4 mt-6">
        <!-- Svelteport Dashboard Button -->
        <a class="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" href="/dashboard">Svelteport Dashboard</a>
        
        <!-- Sign out Button -->
        <button on:click={signOut({ callbackUrl: '/', redirect:true })} class="bg-indigo-500 hover:bg-blue-700 py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          Sign out
        </button>
      </div>
      
    {:else}
      <span class="notSignedInText">You are not signed in</span>
      <SignIn>
        <div slot="submitButton" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Sign in</div>
      </SignIn>
    {/if}
  </div>
</div>
