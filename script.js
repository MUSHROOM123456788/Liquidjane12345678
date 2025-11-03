const cursor = document.getElementById("cursor");
document.addEventListener("mousemove", e => {
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
});

function openPage(num){
  window.location.href = `page${num}.html`;
}

function goHome(){
  window.location.href = "index.html";
}
