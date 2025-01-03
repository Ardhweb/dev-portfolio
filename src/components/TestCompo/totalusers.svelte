<script>
  let users = $props(); // Receive the `users` prop
</script>

<h2>Total Users</h2>

{#if users.length > 0}
  <p>There are {users.length} users in the database.</p>
{:else}
  <p>No users available.</p>
{/if}


<!-- <script>
  let userData = [];
  let loading = true;
  let error = null;

  // Function to fetch users from the API
  async function fetchUsers() {
    try {
      const res = await fetch('/src/routes/api/users');  // Fetch data from the server-side API
      if (res.ok) {
        const data = await res.json();
        userData = users;  // Extract the users array from the response
      } else {
        error = 'Failed to fetch users';
      }
    } catch (err) {
      error = `Error fetching data: ${err.message}`;
    } finally {
      loading = false;
    }
  }

  // Fetch users when the component is mounted
  fetchUsers();
</script>

{#if loading}
  <p>Loading data...</p>
{:else if error}
  <p>{error}</p>
{:else}
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      {#each userData as user}
        <tr>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
        </tr>
      {/each}
    </tbody>
  </table>
{/if} -->
