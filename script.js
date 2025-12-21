const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{
  topBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

topBtn.onclick = ()=>window.scrollTo({top:0,behavior:"smooth"});

const fades = document.querySelectorAll(".fade");
const obs = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.style.opacity=1;
      e.target.style.transform="translateY(0)";
    }
  });
},{threshold:.2});

fades.forEach(f=>{
  obs.observe(f);
});
