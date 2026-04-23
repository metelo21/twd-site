// Marca link ativo no menu (com base no ficheiro atual)
(function() {
  const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll(".nav-links a").forEach(a => {
    const href = (a.getAttribute("href") || "").toLowerCase();
    if (href === path) a.classList.add("active");
  });
})();

// Botão "voltar ao topo"
(function(){
  const btn = document.getElementById("btnTop");
  if(!btn) return;

  const toggle = () => {
    btn.style.display = (window.scrollY > 350) ? "block" : "none";
  };
  window.addEventListener("scroll", toggle, { passive:true });
  toggle();

  btn.addEventListener("click", () => window.scrollTo({ top:0, behavior:"smooth" }));
})();
