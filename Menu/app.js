const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./assets/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./assets/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./assets/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./assets/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./assets/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./assets/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./assets/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./assets/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./assets/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "bison steak",
    category: "dinner",
    price: 22.99,
    img: "./assets/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

const addMenuList = (itemList = []) => {
  document.getElementById("menu-list").innerHTML = itemList
    .map(
      (food) => `
  <div class="food-item">
    <img src="${food.img}" alt="${food.title}" />
    <div class="food-desc">
      <div class="food-detail">
        <h3>${food.title}</h3>
        <p class="price">$${food.price}</p>
      </div>
      <p class="food-more">
      ${food.desc}
      </p>
    </div>
  </div>`
    )
    .join(" ");
};

const setActiveClass = (button) => {
  if (button) {
    document.querySelectorAll(".btn-category").forEach((b) => {
      b.classList.remove("active-btn");
    });
    button.classList.add("active-btn");
  }
};

const addCategoryButtons = () => {
  // let categoryList = ['all'];

  // menu.forEach((item) => {
  //   if (item && item.category && !categoryList.includes(item.category)) {
  //     categoryList.push(item.category);
  //   }
  // });

  const categoryList = menu.reduce(
    (categories, item) => {
      if (item && item.category && !categories.includes(item.category)) {
        categories.push(item.category);
      }
      return categories;
    },
    ["all"]
  );

  const buttons = categoryList.map(
    (cat) =>
      `<button class="btn btn-category ${cat === 'all' ? 'active-btn' : ''}" category-id="${cat}">${cat}</button>`
  );

  if (buttons.length > 0) {
    document.getElementById("menu-categories").innerHTML = buttons.join(" ");
  }

  document.querySelectorAll(".btn-category").forEach((item) => {
    const categoryType = item.getAttribute("category-id");

    item.addEventListener("click", function () {
      setActiveClass(item);
      item.classList.add("active-btn");
      if (categoryType === "all") {
        addMenuList(menu);
        return;
      }
      const filteredList = menu.filter(
        (item) => item.category === categoryType
      );
      addMenuList(filteredList);
    });
  });
};

document.addEventListener("DOMContentLoaded", function () {
  addCategoryButtons();
  addMenuList(menu);
});
