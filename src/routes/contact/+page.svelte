<script>
  import { onMount } from 'svelte';
  let name = '';
  let email = '';
  let message = '';
  let status = '';

  const submitForm = async () => {
    status = 'Submitting...';

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message }),
    });

    if (response.ok) {
      status = 'Message sent successfully!';
      name = email = message = ''; // Reset form fields
    } else {
      status = 'Failed to send message.';
    }
  };
</script>

<h1 class="text-4xl font-bold text-white text-center mb-6">Contact Us</h1>
<form
  on:submit|preventDefault={submitForm}
  class="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md mx-auto space-y-4"
>
  <div>
    <!-- svelte-ignore a11y_label_has_associated_control -->
    <label class="block text-sm font-medium text-gray-300 mb-1">Name:</label>
    <input
      type="text"
      bind:value={name}
      required
      class="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
    />
  </div>
  <div>
    <!-- svelte-ignore a11y_label_has_associated_control -->
    <label class="block text-sm font-medium text-gray-300 mb-1">Email:</label>
    <input
      type="email"
      bind:value={email}
      required
      class="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
    />
  </div>
  <div>
    <!-- svelte-ignore a11y_label_has_associated_control -->
    <label class="block text-sm font-medium text-gray-300 mb-1">Message:</label>
    <textarea
      bind:value={message}
      required
      class="w-full px-4 py-2 h-24 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
    ></textarea>
  </div>
  <button
    type="submit"
    class="w-full bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
  >
    Send
  </button>
</form>
<p class="mt-4 text-center text-sm text-gray-300">{status}</p>
