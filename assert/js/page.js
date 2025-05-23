const postContainer = document.getElementById("pagedetails");
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

// Fetch data using Axios
axios
  .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
  .then((response) => {
    const post = response.data; // Get the API response data

    // // Crud method of appending the data to the container
    // let container = "";
    // container += `
    //     <div class="post">
    //         <h2>Title: ${post.title}</h2>
    //         <div>Body:
    //             <p>${post.body}</p>
    //         </div>
    //         <a href="/">Go back Home</a>
    //     </div>
    // `;
    // postContainer.innerHTML = container;

    const postElement = document.createElement("div");
    postElement.className = "post";
    postElement.innerHTML = `
        <h2>Title: ${post.title}</h2>
        <div>Body:
            <p>${post.body}</p>
        </div>
        <a href="/">Go back Home</a>
    `;
    postContainer.appendChild(postElement);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
    postContainer.innerHTML = "<p>Failed to load post.</p>";
  });
