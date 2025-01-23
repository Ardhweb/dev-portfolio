export async function load({ fetch }) {
    const response = await fetch('/api/list/projects'); // Fetch data from your API
    const dataDash = await response.json();

    console.log("Media Data PageSr",dataDash.Projects)

    if (dataDash.success) {
        return {
            projects: dataDash.Projects, // Pass the fetched projects to the page
        };
    } else {
        throw new Error(dataDash.error || 'Failed to fetch projects');
    }
}
