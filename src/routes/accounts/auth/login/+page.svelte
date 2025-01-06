<script>
    import { goto } from "$app/navigation";
    import { signIn } from "@auth/sveltekit/client";
    let username = "";
    let password = "";
    let error = "";
  
    // const handleSubmit = async () => {
    //   error = "";
  
    //   try {
    //     const response = await fetch("/accounts/auth/login", {
    //       method: "POST",
    //       headers: { "Content-Type": "application/json" },
    //       body: JSON.stringify({ username, password }),
    //     });
  
    //     if (!response.ok) {
    //       const data = await response.json();
    //       throw new Error(data.error || "Login failed");
    //     }
  
    //     const { token } = await response.json();
  
    //     // Save the token in localStorage or cookies
    //     localStorage.setItem("authToken", token);
  
    //     // Redirect to a protected page or dashboard
    //     goto("/accounts/dashboard/profile");
    //   } catch (err) {
    //     error = err.message;
    //   }
    // };

    const handleSubmit = async () => {
    const res = await signIn("credentials", {
      username,
      password,
      redirect: true,
      callbackUrl: "/accounts/dashboard/profile", // Redirect after successful login
    });
  };
  </script>
  
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
      <h1 class="text-2xl font-bold mb-4 text-center">Login</h1>
  
      <form class="space-y-4" on:submit|preventDefault={handleSubmit}>
        <div>
          <label for="username" class="block text-sm font-medium text-gray-700">
            Username
          </label>
          <input
            id="username"
            type="text"
            bind:value={username}
            required
            placeholder="Enter your username"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
  
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            id="password"
            type="password"
            bind:value={password}
            required
            placeholder="Enter your password"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
  
        <button
          type="submit"
          class="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Login
        </button>
      </form>
  
      {#if error}
        <p class="mt-4 text-red-500 text-sm text-center">{error}</p>
      {/if}
    </div>
  </div>
  