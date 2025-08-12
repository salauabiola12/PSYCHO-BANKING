  function openModal() {
    document.getElementById("editName").value = document.getElementById("name").innerText;
    document.getElementById("editAccNumber").value = document.getElementById("accNumber").innerText;
    document.getElementById("editPhone").value = document.getElementById("phone").innerText;
    document.getElementById("editEmail").value = document.getElementById("email").innerText;
    document.getElementById("editType").value = document.getElementById("type").innerText;

    document.getElementById("editModal").style.display = "block";
  }

  function closeModal() {
    document.getElementById("editModal").style.display = "none";
  }

  function saveChanges() {
    document.getElementById("name").innerText = document.getElementById("editName").value;
    document.getElementById("accNumber").innerText = document.getElementById("editAccNumber").value;
    document.getElementById("phone").innerText = document.getElementById("editPhone").value;
    document.getElementById("email").innerText = document.getElementById("editEmail").value;
    document.getElementById("type").innerText = document.getElementById("editType").value;

    closeModal();
    
    window.onclick = function(event) {
  const modal = document.getElementById("editModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
  }