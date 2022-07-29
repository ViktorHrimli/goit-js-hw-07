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

let gallery = new SimpleLightbox(".gallery a", {
  captions: true,
  captionSelector: "img",
  captionType: "attr",
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
gallery.on("show.simplelightbox");
