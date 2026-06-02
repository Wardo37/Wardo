let filter = "all";

const outfits = [
{
id:1,
type:"streetwear",
title:"Oversized Street Fit",
image:"https://images.unsplash.com/photo-1520975958225-0f0d3a2b1b3f",
items:["Hoodie","Cargo Pants","Nike Air Force 1"],
link:"https://www.nike.com"
},
{
id:2,
type:"smart",
title:"Smart Casual Look",
image:"https://images.unsplash.com/photo-1521335629791-ce4aec67dd49",
items:["Oxford Shirt","Chinos","Loafers"],
link:"https://www.marksandspencer.com"
},
{
id:3,
type:"gym",
title:"Gym Fit",
image:"https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
items:["Training Tee","Shorts","Running Shoes"],
link:"https://www.adidas.co.uk"
},
{
id:4,
type:"minimal",
title:"Minimal Clean Fit",
image:"https://images.unsplash.com/photo-1520975682031-ae1c8c2a7f1b",
items:["Plain Tee","Slim Jeans","White Trainers"],
link:"https://www.cos.com"
}
];

function setFilter(f){
filter = f;
render();
}

function render(){

const grid = document.getElementById("grid");
const search = document.getElementById("search").value.toLowerCase();

grid.innerHTML="";

let data = outfits.filter(o =>
filter==="all" ? true : o.type===filter
);

if(search){
data = data.filter(o =>
o.title.toLowerCase().includes(search)
);
}

data.forEach(o=>{
const card = document.createElement("div");
card.className="card";

card.innerHTML=`
<img src="${o.image}">
<div class="content">
<h3>${o.title}</h3>
<p>${o.items.join(", ")}</p>
<a class="shop" href="${o.link}" target="_blank">Shop Outfit</a>
</div>
`;

grid.appendChild(card);
});
}

render();
