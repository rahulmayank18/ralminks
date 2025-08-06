// Blog Filter
function filterBlogs(category) {
  const posts = document.querySelectorAll(".blog-post");
  posts.forEach(post => {
    const match = category === "All" || post.dataset.category === category;
    post.style.display = match ? "block" : "none";
  });
}

// Dark Mode Toggle
const toggleBtn = document.getElementById("darkModeToggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
