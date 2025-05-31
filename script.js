document.addEventListener("DOMContentLoaded", function() {
  const enterBtn = document.getElementById("enterBtn");
  const statusParagraph = document.getElementById("status");

  enterBtn.addEventListener("click", function() {
    const newHeading = document.createElement("h1");
    newHeading.textContent = "Entered Metaverse";
    statusParagraph.replaceWith(newHeading);
  });
});
