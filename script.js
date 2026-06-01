const outfits = {
  streetwear: [
    {
      name: "Oversized Street Fit",
      items: [
        { name: "Hoodie", link: "#" },
        { name: "Cargo Pants", link: "#" },
        { name: "Nike Trainers", link: "#" }
      ]
    }
  ],

  smart: [
    {
      name: "Smart Casual Fit",
      items: [
        { name: "Oxford Shirt", link: "#" },
        { name: "Chinos", link: "#" },
        { name: "Loafers", link: "#" }
      ]
    }
  ],

  gym: [
    {
      name: "Gym Fit",
      items: [
        { name: "Fitted Tee", link: "#" },
        { name: "Gym Shorts", link: "#" },
        { name: "Running Shoes", link: "#" }
      ]
    }
  ],

  minimal: [
    {
      name: "Minimal Fit",
      items: [
        { name: "Plain Tee", link: "#" },
        { name: "Slim Jeans", link: "#" },
        { name: "White Trainers", link: "#" }
      ]
    }
  ]
};

// SHOW OUTFITS
function showOutfits(style) {
  const container = document.getElementById("outfits");
  container.innerHTML = "";

  outfits[style].forEach(outfit => {
    let html = `<div class="card"><h3>${outfit.name}</h3>`;

    outfit.items.forEach(item => {
      html += `<div class="item">• ${item.name}</div>`;
    });

    html += `</div>`;
    container.innerHTML += html;
  });
}

// SIMPLE STYLE QUIZ
function startQuiz() {
  let answer = prompt(
    "What do you prefer?\n\n1 = Comfort\n2 = Smart\n3 = Sporty\n4 = Simple"
  );

  if (answer === "1") showOutfits("streetwear");
  else if (answer === "2") showOutfits("smart");
  else if (answer === "3") showOutfits("gym");
  else if (answer === "4") showOutfits("minimal");
  else alert("Pick 1-4");
}
