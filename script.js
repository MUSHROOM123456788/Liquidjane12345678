// Mermaid cursor follows mouse
const cursor = document.getElementById("cursor");
document.addEventListener("mousemove", e => {
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
});

// Page buttons navigation
function openPage(num){
  window.location.href = `page${num}.html`;
}

// Title goes back home
function goHome(){
  window.location.href = "index.html";
}
