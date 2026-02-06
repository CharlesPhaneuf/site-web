async function searchTerm() {
  const term = document.getElementById("search").value.toLowerCase();
  const result = document.getElementById("result");

  const res = await fetch("definitions.json");
  const data = await res.json();

  if (data[term]) {
    result.textContent = data[term];
  } else {
    result.textContent = "Definition not found.";
  }
}
