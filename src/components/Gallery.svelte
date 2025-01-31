<script>
    import { index } from "drizzle-orm/sqlite-core";
    import Carousel from '../components/Carousel.svelte'
    let imgsrc = ["https://placehold.co/600x400","https://placehold.co/600x400/000000/FFF" ,"https://placehold.co/10x10", "https://images.unsplash.com/photo-1505533321630-975218a5f66f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D"]
    function openGallery() {
        const galleryPopup = document.getElementById("gallery-popup");
        if (galleryPopup) {
            galleryPopup.classList.remove("hidden");
        }
    }

    function closeGallery() {
        const galleryPopup = document.getElementById("gallery-popup");
        if (galleryPopup) {
            galleryPopup.classList.add("hidden");
        }
    }

    // Tailwind CSS popup structure
    document.querySelector("footer").insertAdjacentHTML(
        "beforebegin",
        `
    <div id="gallery-popup" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 hidden z-50">
      <div class="relative bg-white p-6 rounded-lg shadow-lg w-96">
        <button onclick="closeGallery()" class="absolute top-2 right-2 text-gray-600 text-3xl">&times;</button>
        <p class="text-center text-lg font-semibold">Gallery Popup</p>
        <div class="mt-4 flex justify-center" id="img-container">
          <img id="gallery-image" src="https://images.unsplash.com/photo-1735252723552-138dc3fb6f14?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Gallery" class="rounded-lg" />
        
        
             </div>
        <div class="mt-4 flex justify-between">
          <button  id="prev-image" class="px-4 py-2 bg-gray-300 rounded">Prev</button>
          <button onclick="nextImage()" id="next-image" class="px-4 py-2 bg-gray-300 rounded">Next</button>
        </div>
      </div>
    </div>
  `,
    );

    //Gallery Parts End
</script>
