import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galery = document.querySelector(".gallery");

const onCreateGalery = (large, small, alt) => {
  return `
  <div class="gallery__item">
    <a class="gallery__link" href="${large}">
        <img
            class="gallery__image"
            src="${small}"
            data-source="${large}"
            alt="${alt}"
        />
    </a>
</div>`;
};

const calcGalery = galleryItems
  .map((item) => {
    return onCreateGalery(item.original, item.preview, item.description);
  })
  .join("");

galery.insertAdjacentHTML("afterbegin", calcGalery);

function hadleClick(e) {
  e.preventDefault();

  if (e.currentTarget.nodeName !== e.target.nodeName) {
    const imgSource = e.target.dataset;
    const { source } = imgSource;

    createModalLightBox(source);
  }
}

function createModalLightBox(source) {
  const instance = basicLightbox.create(`<img src="${source}">`);
  instance.show();

  const visible = instance.visible();

  if (visible) {
    window.addEventListener(
      "keydown",
      (evt) => {
        const { code } = evt;
        if (evt.target.nodeName === "A" && code === "Escape") {
          instance.close();
        }
      },
      { once: true }
    );
  }
}

// listener
galery.addEventListener("click", hadleClick);
