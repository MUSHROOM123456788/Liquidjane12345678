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

// Apply config for current page
function applyPageConfig(pageNum){
  if(!window.pageConfigs) return;
  const cfg = pageConfigs[pageNum];
  if(cfg){
    document.body.style.background = `linear-gradient(180deg,${cfg.bgStart},${cfg.bgEnd})`;
    const title = document.querySelector('.title');
    title.style.color = cfg.glow;
    title.style.textShadow = `0 0 20px ${cfg.glow}, 0 0 40px ${cfg.glow}`;
  }
}
