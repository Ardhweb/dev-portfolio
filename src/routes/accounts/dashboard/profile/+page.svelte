<script>
  import { SignIn, SignOut } from "@auth/sveltekit/components"
  import { page } from "$app/stores"
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

      <button on:click={signOut({ callbackUrl: '/', redirect:true })} class="bg-blue-500 hover:bg-blue-700  py-2 px-4 rounded">Sign out</button>

  {:else}
    <span class="notSignedInText">You are not signed in</span>
    <SignIn>
      <div slot="submitButton" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Sign in</div>
    </SignIn>
  {/if}
</div>
</div>