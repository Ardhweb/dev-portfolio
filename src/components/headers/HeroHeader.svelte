<script>
    export let title = "Hello, I'm [Your Name]";
    export let subtitle = "A passionate developer crafting web experiences.";
    export let buttonText = "Contact Me";
</script>

<section class="flex flex-col md:flex-row items-center justify-between w-full px-6 py-12 bg-gray-100">
    <!-- Left Side (Text) -->
    <div class="md:w-1/2 space-y-4 text-center md:text-left">
        <h1 class="font-primary text-4xl md:text-5xl font-bold text-gray-800">{title}</h1>
        <p class="text-lg md:text-xl text-gray-600">{subtitle}</p>
        <button class="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition duration-300">
            {buttonText}
        </button>
    </div>

    <!-- Right Side (Empty for Now) -->
    <div class="hidden md:block md:w-1/2">
        <!-- Empty for any future image or graphic -->
    </div>
</section>
