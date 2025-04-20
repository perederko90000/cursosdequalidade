document.addEventListener("DOMContentLoaded", function () {
  const priceFilter = document.getElementById("priceFilter");

  priceFilter.addEventListener("change", function () {
    const selected = this.value;
    const grid = document.querySelector(".product-grid");
    const cards = Array.from(document.querySelectorAll(".product-card"));

    if (selected === "lowToHigh") {
      const filteredCards = cards
        .filter(card => {
          const priceTag = card.querySelector("h2:nth-of-type(2)");
          if (!priceTag) return false;
          const priceText = priceTag.innerText.trim();
          if (priceText.includes("*/Em breve*/")) return false;
          return true;
        })
        .sort((a, b) => {
          const priceA = parseFloat(a.querySelector("h2:nth-of-type(2)").innerText.replace("R$ ", "").replace(",", "."));
          const priceB = parseFloat(b.querySelector("h2:nth-of-type(2)").innerText.replace("R$ ", "").replace(",", "."));
          return priceA - priceB;
        });

      grid.innerHTML = "";
      filteredCards.forEach(card => grid.appendChild(card));
    } else {
      cards.forEach((card) => {
        const priceTag = card.querySelector("h2:nth-of-type(2)");
        if (!priceTag) return;

        const priceText = priceTag.innerText.trim();
        if (priceText.includes("Em breve")) return;

        const price = parseFloat(priceText.replace("R$ ", "").replace(",", "."));

        let show = true;
        if (selected === "below50" && price > 50) show = false;
        if (selected === "50to100" && (price < 50 || price > 100)) show = false;
        if (selected === "above100" && price <= 100) show = false;

        card.style.display = show ? "block" : "none";
      });
    }
  });
});

