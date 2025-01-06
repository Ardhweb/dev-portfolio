<script>
  import { SignIn, SignOut } from "@auth/sveltekit/components"
  import { page } from "$app/stores"
</script>
 

<div class="min-h-screen flex items-center justify-center bg-gray-100">
  <div class="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
    <h1>SvelteKit Auth Example</h1>
  {#if $page.data.session}
    <span class="signedInText">
      <small>Signed in as</small><br />
      <strong>{$page.data.session.user?.name ?? "User"}</strong>
    </span>
    <SignOut>
      <div slot="submitButton" class="buttonPrimary">Sign out</div>
    </SignOut>
  {:else}
    <span class="notSignedInText">You are not signed in</span>
    <SignIn>
      <div slot="submitButton" class="buttonPrimary">Sign in</div>
    </SignIn>
  {/if}
</div>
</div>