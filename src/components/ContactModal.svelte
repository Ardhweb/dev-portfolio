


<section>


    <!-- Modal -->
    <div id="contactModal" class="fixed inset-0 z-50 hidden items-center justify-center bg-black bg-opacity-70">
      <section class="flex flex-col p-8 max-w-lg mx-auto bg-black relative">
        <h4 class="text-white text-[2.5rem] text-center mb-3">Get in touch</h4>
    
        <div class="flex items-center justify-center relative">
          <!-- Large angled shadow as a sibling behind the form container -->
          <div class="absolute w-full max-w-2xl h-full top-0 right-0 bg-blue-800 opacity-30 blur-3xl transform rotate-6 translate-x-10 translate-y-10 pointer-events-none"></div>
          
          <!-- Form Container -->
          <div class="relative w-full max-w-2xl p-8 bg-gray-900">
            <form action="#" method="post" class="space-y-4">
              
              <!-- Name Input (Single Row) -->
              <div>
                <label for="name" class="block mb-1 text-lg font-medium text-gray-300">Name</label>
                <input type="text" id="name" name="name" class="w-full px-4 py-1 text-white bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" required>
              </div>
        
              <!-- Email and Phone Inputs (Same Row) -->
              <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                
                <!-- Email Input -->
                <div>
                  <label for="email" class="block mb-1 text-lg font-medium text-gray-300">Email</label>
                  <input type="email" id="email" name="email" class="w-full px-4 py-1 text-white bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" required>
                </div>
                
                <!-- Phone Input -->
                <div>
                  <label for="phone" class="block mb-1 text-lg font-medium text-gray-300">Phone</label>
                  <input type="tel" id="phone" name="phone" class="w-full px-4 py-1 text-white bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" required>
                </div>
                
              </div>
              
              <!-- Query Input (Full Width) -->
              <div>
                <label for="query" class="block mb-1 text-lg font-medium text-gray-300">Query</label>
                <textarea id="query" name="query" rows="4" class="w-full px-4 py-1 text-white bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
              </div>
        
              <!-- Submit Button -->
              <div class="flex justify-center mt-6">
                <button type="submit" class="py-2 px-5 border border-white text-white hover:bg-white hover:text-black tracking-wider">
                  Let's build together
                </button>
              </div>
            </form>
          </div>
        </div>
    
        <!-- Close Button -->
        <button on:click={toggleModal()} class="absolute top-2 right-2 text-white text-lg font-bold hover:text-gray-400">
            ✕
        </button>
      </section>
    </div>
    
    <script>
      function toggleModal() {
        const modal = document.getElementById("contactModal");
        modal.classList.toggle("hidden");
        modal.classList.toggle("flex");
      }
    </script>
    
    
    </section>