document.getElementById("filtro-preco").addEventListener("change", function () {
  const cursos = document.querySelectorAll('[data-preco]');
  const valorSelecionado = this.value;

  cursos.forEach((curso) => {
    const precoStr = curso.getAttribute("data-preco");
    const preco = parseFloat(precoStr.replace(',', '.'));

    let mostrar = true;

    if (valorSelecionado === "ate50") {
      mostrar = preco <= 50;
    } else if (valorSelecionado === "50a100") {
      mostrar = preco > 50 && preco <= 100;
    } else if (valorSelecionado === "acima100") {
      mostrar = preco > 100;
    }

    curso.style.display = mostrar ? "block" : "none";
  });

  // ✅ Recalcula animações AOS
  if (typeof AOS !== 'undefined') {
    AOS.refresh();
  }
});
