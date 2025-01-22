<script>
   let file;
   let uploadMessage = '';
   let uploadedURL = "";
 
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
   };
 </script>
 
 <main>
  <div class="flex flex-col items-center justify-center p-2 bg-gray-100">
   <h2 class="text-2xl font-bold text-gray-800 text-center mb-4">File Uploading at Cloudnary</h2>
   <form class="rounded border flex flex-col"  on:submit={handleFileUpload} enctype="multipart/form-data">
     <input type="file" id="formFile" name="image" on:change={handleFileChange} required />
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
 