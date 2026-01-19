document.getElementById("signupForm").addEventListener("submit", async e => {
  e.preventDefault();

  const formData = new FormData(e.target);

  const res = await fetch("http://localhost:3000/register", {
    method: "POST",
    body: formData
  });

  const data = await res.json();
  alert(data.message);
});
