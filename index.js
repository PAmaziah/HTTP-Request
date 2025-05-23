
// const home = document.getElementsByClassName('homedetails');
// Select the container where the data will be displayed
const postContainer = document.getElementsByClassName("homedetails");

// Fetch data using Axios
axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(response => {
        const post = response.data; // Get the API response data
        postContainer.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        `;
    })
    .catch(error => {
        console.error("Error fetching data:", error);
        postContainer.innerHTML = "<p>Failed to load post.</p>";
    });
