// slider Data
const SectionSliderData = {
  perpage: 1,
  blocks: [
    {
      type: "slider",
      preHeading: "Trendy Classics",
      heading: "Step into the World of Style with the Latest Fashion Trends Unveiled!",
      imageUrl:
        "https://veena-theme-fashion.myshopify.com/cdn/shop/files/1.png?v=1705665890&width=2000",

      buttonLink: "#",
      buttonLabel: "Shop Now",
      contentAlign: "top-left",
      textAlign: "ta-center",
    },
    {
      type: "slider",
      preHeading: "HEADPHONE",
      heading: "SECOND FEST",
      imageUrl:
        "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=600",

      buttonLink: "#",
      buttonLabel: "Shop Now",
      contentAlign: "top-middle",
      textAlign: "ta-center",
    },
    {
      type: "slider",
      preHeading: "SMART WATCH",
      heading: "THIRD FEST",
      imageUrl:
        "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=600",

      buttonLink: "#",
      buttonLabel: "Shop Now",
      contentAlign: "top-right",
      textAlign: "ta-center",
    },

    {
      type: "slider",
      preHeading: "SMART BAND",
      heading: "FOURTH FEST",
      imageUrl:
        "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=600",

      buttonLink: "#",
      buttonLabel: "Shop Now",
      contentAlign: "middle-left",
      textAlign: "ta-end",
    },
    {
      type: "slider",
      preHeading: "SMART BAND",
      heading: "FOURTH FEST",
      imageUrl:
        "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=600",

      buttonLink: "#",
      buttonLabel: "Shop Now",
      contentAlign: "middle-center",
      textAlign: "ta-center",
    },
    {
      type: "slider",
      preHeading: "SMART BAND",
      heading: "FOURTH FEST",
      imageUrl:
        "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=600",

      buttonLink: "#",
      buttonLabel: "Shop Now",
      contentAlign: "middle-right",
      textAlign: "ta-end",
    },

    {
      type: "slider",
      preHeading: "SMART BAND",
      heading: "FOURTH FEST",
      imageUrl:
        "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=600",

      buttonLink: "#",
      buttonLabel: "Shop Now",
      contentAlign: "bottom-left",
      textAlign: "ta-start",
    },
    {
      type: "slider",
      preHeading: "SMART BAND",
      heading: "FOURTH FEST",
      imageUrl:
        "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=600",

      buttonLink: "#",
      buttonLabel: "Shop Now",
      contentAlign: "bottom-middle",
      textAlign: "ta-center",
    },
    {
      type: "slider",
      preHeading: "SMART BAND",
      heading: "FOURTH FEST",
      imageUrl:
        "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=600",

      buttonLink: "#",
      buttonLabel: "Shop Now",
      contentAlign: "bottom-right",
      textAlign: "ta-end",
    },
  ],
};

// per slider image
const perPageImage = SectionSliderData.perpage;
let splide;
// splide mount
document.addEventListener("DOMContentLoaded", function () {
  splide = new Splide(".splide", {
    perPage: perPageImage,
  });
  splide.mount();
});

let box_position;
box_class = document.querySelector("#box-align");
box_class.addEventListener("change", () => {
  box_position = box_class.value;
  console.log(box_position);

  renderSlide();
});

let text_position;
const text_class = document.querySelector("#text-align");
text_class.addEventListener("change", () => {
  text_position = text_class.value;
  console.log(text_position);

  renderSlide();
});

function renderSlide() {
  if (splide) {
    splide.destroy();
  }
  //Append Data to slider
  const allList = document.querySelector(".splide__list");
  allList.innerHTML = "";

  SectionSliderData.blocks.map((ele) => {
    const list = document.createElement("li");
    list.classList.add("splide__slide");
    list.innerHTML = `
            <div class="slider__box">
            <img
              src="${ele.imageUrl}"
              alt=""
            />

            <div class="des__box d-flex ${box_position || ele.contentAlign}">
              <div class="des__content ${text_position || ele.textAlign}">
                <span class="preHeading">${ele.preHeading}</span>
                <h1>${ele.heading}</h3>
                <button class="shop-btn">${ele.buttonLabel}</button>
              </div>
            </div>
          </div>
  `;

    allList.appendChild(list);
  });

  splide = new Splide(".splide", {
    perPage: perPageImage,
  });
  splide.mount();
}

renderSlide();
