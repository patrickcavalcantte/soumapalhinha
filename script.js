/* Animação de rolagem: um observador só para a página inteira.
   Cada elemento é revelado uma vez e sai da lista, para não ficar
   observando nada depois que a pessoa já passou. Se o navegador não
   tiver IntersectionObserver, tudo aparece de uma vez, visível. */
(function () {
  var alvos = document.querySelectorAll(".surge");
  var querMenosMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (querMenosMovimento || !("IntersectionObserver" in window)) {
    for (var i = 0; i < alvos.length; i++) alvos[i].classList.add("dentroDaTela");
    return;
  }

  var observador = new IntersectionObserver(function (entradas) {
    entradas.forEach(function (entrada) {
      if (!entrada.isIntersecting) return;
      entrada.target.classList.add("dentroDaTela");
      observador.unobserve(entrada.target);
    });
  }, { rootMargin: "0px 0px -12% 0px", threshold: 0.12 });

  for (var j = 0; j < alvos.length; j++) observador.observe(alvos[j]);
})();
