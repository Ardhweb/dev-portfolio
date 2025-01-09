<script>
  import { page } from "$app/stores"
</script>
 

<div class="min-h-screen flex items-center justify-center bg-gray-100">
  <div class="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
    <h1>SvelteKit Auth Example</h1>
  {#if $page.data.session}
    <span class="signedInText">
      <small>Signed in as</small><br />
      <strong>{$page.data.session.user?.name ?? "User"}</strong>
      <p>Session expiry: {$page.data.session?.expires}</p>
    </span>
  {:else}
    <span class="notSignedInText">You are not signed in</span>
   
  {/if}
</div>
</div>