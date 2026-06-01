let outfits = [
  {
    title: "Streetwear Fit",
    image: "https://images.unsplash.com/photo-1520975958225-0f0d3a2b1b3f",
    items: ["Hoodie", "Cargo trousers", "Nike trainers"],
    link: "https://www.asos.com"
  },
  {
    title: "Smart Casual",
    image: "https://images.unsplash.com/photo-1521335629791-ce4aec67dd49",
    items: ["Shirt", "Chinos", "Loafers"],
    link: "https://www.marksandspencer.com"
  },
  {
    title: "Gym Fit",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
    items: ["Gym top", "Shorts", "Trainers"],
    link: "https://www.nike.com"
  }
];

function load() {
  const container = document.getElementById("feed");
  container.innerHTML = "";

  outfits.forEach(o => {
    let card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${o.image}">
      <div class="content">
        <h3>${o.title}</h3>
        <p>${o.items.join(", ")}</p>
        <a href="${o.link}" target="_blank">Shop outfit</a>
      </div>
    `;

    container.appendChild(card);
  });
}

load();
