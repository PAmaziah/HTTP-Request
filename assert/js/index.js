// const home = document.getElementsByClassName('homedetails');
// Select the container where the data will be displayed
const postContainer = document.getElementById("homedetails");

// Fetch data using Axios
axios
  .get("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    const posts = response.data; // Get the API response data
  
    // // Crud method of appending the data to the container
    // let container = "";
    // for (let index = 0; index < posts.length; index++) {
    //   const post = posts[index];
    //   container += `
    //     <div class="post">
    //         <h2>Title: ${post.title}</h2>
    //         <div>Body:
    //             <p>${post.body}</p>
    //         </div>
    //         <a href="/page.html?id=${post.id}">Read More</a>
    //     </div>
    // `;
    // }
    // postContainer.innerHTML = container;

    // A much safer and cleaner way of appending the data to the container
    for (let index = 0; index < posts.length; index++) {
      const post = posts[index];
      const postElement = document.createElement("div");
      postElement.className = "post";
      postElement.innerHTML = `
        <h2>Title: ${post.title}</h2>
        <div>Body:
            <p>${post.body}</p>
        </div>
        <a href="/page.html?id=${post.id}">Read More</a>
    `;
      postContainer.appendChild(postElement);
    }

  })
  .catch((error) => {
    console.error("Error fetching data:", error);
    postContainer.innerHTML = "<p>Failed to load post.</p>";
  });
