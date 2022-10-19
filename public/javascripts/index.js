const deleteBtns = document.querySelectorAll(".remove-msg");

for (let btn of deleteBtns) {
  btn.addEventListener("click", () => {
    fetch("http://localhost:3000/messages/" + btn.id, {
      method: "DELETE",
    })
      .catch((err) => console.log(err))
      .then((response) => location.reload());
  });
}
