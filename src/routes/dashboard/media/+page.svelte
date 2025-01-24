
<!-- svelte-ignore non_reactive_update -->
<script>
  export let data; // Data is automatically passed by SvelteKit
  const { projects } = data;// Get the `projects` data from the `load` function
  let selectedProjectId = ''; // To store the selected project ID
  //console.log("His",projects)
  //ORM GET
   let file;
   let uploadMessage = '';
   let uploadedURL = "";

   let fileName = ""; // Stores the selected file name

  let type_naming = 'image';

  async function createMedia(type_naming, returning_url, project_id) {
        const formData = new FormData();
        formData.append('type_naming', type_naming);
        formData.append('returning_url', returning_url);
        formData.append('project_id', project_id);

        try {
            const response = await fetch('?/createMedia', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                const result = await response.json();
                console.log('Media created successfully:', result);
            } else {
                console.error('Failed to create media:', await response.text());
            }
        } catch (error) {
            console.error('Error calling action:', error);
        }
    }

 
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
         createMedia(type_naming, data.url, selectedProjectId);

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
  
 
  <div class="flex flex-col items-center justify-center p-3 rounded ">
   <h2 class="text-2xl font-bold text-gray-800 text-center mb-4">File Uploading at Cloudnary</h2>
   <!-- svelte-ignore event_directive_deprecated -->
   <form class="rounded flex flex-col"  on:submit={handleFileUpload} enctype="multipart/form-data">
    <div class="bg-gray-50 m-2 rounded flex flex-col px-4 py-3 gap-2">
      <label for="project-select">*Select a Project:</label>
      <select required class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" id="project-select" bind:value={selectedProjectId}>
          <option value="" disabled selected>Select a project</option>
          {#each projects as project}
              <option value={project.id}>{project.projectname}</option>
          {/each}
      </select>
      <!-- <p>Selected Project ID: {selectedProjectId}</p> -->
  </div> 
    <div class="bg-gray-50 m-2 rounded flex flex-col px-2 py-3 gap-3">
    
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
</div>  
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
 