<h3 class="text-2xl font-semibold text-gray-800 mb-1">Skills</h3>
<div class="min-h-screen p-4">

<div class="flex  ">

  <form  method="POST"  use:handleSubmit  class="space-y-6 mb-3 bg-white p-8 rounded shadow-md w-full max-w-5xl">
    <h2 class="text-2xl font-bold text-gray-800 text-center mb-4">Add New Skill</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
     

      <!-- Side-by-side fields -->
      <label class="block">
        <span class="text-gray-700 font-medium">Prograaming/Framework/Tech:</span>
        <input
          type="text"
          name="name"
          required
          class="mt-1 w-full p-3 border rounded focus:ring focus:ring-blue-300 outline-none"
          placeholder="Python , C++, JavaScript, Java etc"
        />
      </label>
      <label class="block">
        <span class="text-gray-700 font-medium">Expertise:</span>
        <select
          name="expertise"
          required
          class="mt-1 w-full p-3 border rounded focus:ring focus:ring-blue-300 outline-none"
          placeholder="Beginner, Intermediate, Expert"
        >
        <option value="beginner">Beginner</option>
        <option value="intermediate">Intermediate</option>
        <option value="expert">Expert</option>
       
      </select>
      </label>

    
     
      <label class="block">
        <span class="text-gray-700 font-medium">Stars:</span>
        <input
          type="number"
          name="stars"
          required
          class="mt-1 w-full p-3 border rounded focus:ring focus:ring-blue-300 outline-none"
          placeholder="5"
        />
      </label>
      <label class="block">
        <span class="text-gray-700 font-medium">Year of Experience:</span>
        <input
          type="number"
          name="year_experiance"
          required
          class="mt-1 w-full p-3 border rounded focus:ring focus:ring-blue-300 outline-none"
          placeholder="1 Year "
        />
      </label>
    
    </div>

    <button
      type="submit"
      class="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 focus:ring focus:ring-blue-300 focus:outline-none"
    >
      Add Skill
    </button>
  </form>
</div>

  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
    <!-- Card 1 -->
    <div class="bg-white p-6 rounded-lg shadow-md">
      <h4 class="text-xl font-semibold text-gray-800 mb-2">Skill Name 1</h4>
      <div class="space-y-2">
        <div>
          <span class="font-semibold text-gray-700">Expertise:</span>
          <span class="text-gray-600">Web Development, JavaScript, React</span>
        </div>
        <div>
          <span class="font-semibold text-gray-700">Stars:</span>
          <span class="text-gray-600">2021</span>
        </div>
        <div>
          <span class="font-semibold text-gray-700">Years of Experience:</span>
          <span class="text-gray-600">3</span>
        </div>
      </div>
    </div>

    <!-- Card 2 -->
    <div class="bg-white p-6 rounded-lg shadow-md">
      <h4 class="text-xl font-semibold text-gray-800 mb-2">Skill Name 2</h4>
      <div class="space-y-2">
        <div>
          <span class="font-semibold text-gray-700">Expertise:</span>
          <span class="text-gray-600">Python, Data Science, AI</span>
        </div>
        <div>
          <span class="font-semibold text-gray-700">Stars:</span>
          <span class="text-gray-600">2019</span>
        </div>
        <div>
          <span class="font-semibold text-gray-700">Years of Experience:</span>
          <span class="text-gray-600">5</span>
        </div>
      </div>
    </div>

    <!-- Card 3 -->
    <div class="bg-white p-6 rounded-lg shadow-md">
      <h4 class="text-xl font-semibold text-gray-800 mb-2">Skill Name 3</h4>
      <div class="space-y-2">
        <div>
          <span class="font-semibold text-gray-700">Expertise:</span>
          <span class="text-gray-600">UI/UX Design, Figma, Adobe XD</span>
        </div>
        <div>
          <span class="font-semibold text-gray-700">Stars:</span>
          <span class="text-gray-600">2017</span>
        </div>
        <div>
          <span class="font-semibold text-gray-700">Years of Experience:</span>
          <span class="text-gray-600">6</span>
        </div>
      </div>
    </div>

    <!-- Repeat the cards as needed -->
    <!-- Card 4 -->
    <div class="bg-white p-6 rounded-lg shadow-md">
      <h4 class="text-xl font-semibold text-gray-800 mb-2">Skill Name 4</h4>
      <div class="space-y-2">
        <div>
          <span class="font-semibold text-gray-700">Expertise:</span>
          <span class="text-gray-600">React, Node.js, Full Stack Development</span>
        </div>
        <div>
          <span class="font-semibold text-gray-700">Stars:</span>
          <span class="text-gray-600">2020</span>
        </div>
        <div>
          <span class="font-semibold text-gray-700">Years of Experience:</span>
          <span class="text-gray-600">4</span>
        </div>
      </div>
    </div>

    <!-- Card 5 -->
    <div class="bg-white p-6 rounded-lg shadow-md">
      <h4 class="text-xl font-semibold text-gray-800 mb-2">Skill Name 5</h4>
      <div class="space-y-2">
        <div>
          <span class="font-semibold text-gray-700">Expertise:</span>
          <span class="text-gray-600">Cloud Computing, AWS, Azure</span>
        </div>
        <div>
          <span class="font-semibold text-gray-700">Stars:</span>
          <span class="text-gray-600">2021</span>
        </div>
        <div>
          <span class="font-semibold text-gray-700">Years of Experience:</span>
          <span class="text-gray-600">2</span>
        </div>
      </div>
    </div>

    <!-- Card 6 -->
    <div class="bg-white p-6 rounded-lg shadow-md">
      <h4 class="text-xl font-semibold text-gray-800 mb-2">Skill Name 6</h4>
      <div class="space-y-2">
        <div>
          <span class="font-semibold text-gray-700">Expertise:</span>
          <span class="text-gray-600">Machine Learning, TensorFlow, Python</span>
        </div>
        <div>
          <span class="font-semibold text-gray-700">Stars:</span>
          <span class="text-gray-600">2018</span>
        </div>
        <div>
          <span class="font-semibold text-gray-700">Years of Experience:</span>
          <span class="text-gray-600">4</span>
        </div>
      </div>
    </div>
  </div>
</div>
