<script>
   let file;
   let uploadMessage = '';
   let uploadedURL = "";

   let fileName = ""; // Stores the selected file name
 
   const handleFileUpload = async (event) => {
     event.preventDefault(); // Prevent the default form submission behavior
 
     if (!file) {
       uploadMessage = 'Please select a file before uploading.';
       return;
     }
 
     try {
       const formData = new FormData();
       formData.append('image', file); // Match the 'image' field expected in the backend
 
       const response = await fetch('/api/file_uploading', {
         method: 'POST',
         body: formData,
       });
 
       if (response.ok) {
         const data = await response.json();
         uploadMessage = `Upload successful!`;
         uploadedURL = `${data.url}`
         alert('File successfully uploaded!');
       } else {
         const error = await response.json();
         uploadMessage = `Upload failed: ${error.message}`;
       }
     } catch (error) {
       uploadMessage = `An error occurred: ${error.message}`;
     }
   };
 
   const handleFileChange = (event) => {
     file = event.target.files[0];
     fileName = file ? file.name : "No file selected";
   };

   function triggerFileInput() {
    document.getElementById("formFile").click();
  }
 </script>

<style>
  /* Hide the default file input */
  #formFile {
    display: none;
  }
</style>
 
 <main>
  <div class="flex flex-col items-center justify-center p-2 bg-gray-100">
   <h2 class="text-2xl font-bold text-gray-800 text-center mb-4">File Uploading at Cloudnary</h2>
   <form class="rounded border flex flex-col"  on:submit={handleFileUpload} enctype="multipart/form-data">
     <input type="file" id="formFile" name="image" on:change={handleFileChange} required />
     <!-- Custom Upload Button -->
      
<!-- svelte-ignore a11y_consider_explicit_label -->
<button
  type="button"
  class="flex items-center justify-center px-40 py-20 rounded-lg shadow-md border-2 border-gray-500 border-dashed"
  on:click={triggerFileInput}
>
  <i class="lni lni-cloud-upload text-7xl  "></i>
   <!-- Display Selected File Name -->
   <span class="text-gray-700 text-sm truncate max-w-xs">
    {fileName || "No file selected"}
  </span>
</button>

     <button type="submit" class="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Upload</button>
   </form>
  </div>
   <!-- Upload Message Popup -->
   {#if uploadMessage}
     <div class="fixed top-0 left-0 right-0 z-50 flex justify-center items-center p-4">
       <div class="bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg max-w-xs">
         <p class="truncate">{uploadMessage}</p>
         <p class="truncate">{uploadedURL}</p>
       </div>
     </div>
   {/if}
 </main>
 