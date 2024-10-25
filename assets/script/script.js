document.getElementById("dropbtn").addEventListener("click", function() {
  const dropdown = document.getElementById("dropdown");
  const icon = document.getElementById("dropdown-icon");

  // Alterna a visibilidade do dropdown
  dropdown.classList.toggle("show");

  // Verifica se o dropdown está visível e altera o ícone
  if (dropdown.classList.contains("show")) {
      icon.classList.remove("fa-caret-down");
      icon.classList.add("fa-caret-up");
  } else {
      icon.classList.remove("fa-caret-up");
      icon.classList.add("fa-caret-down");
  }
});
