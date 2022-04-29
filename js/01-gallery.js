import { galleryItems } from "./gallery-items.js";

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const listImagesMarkup = createListImagesMarkup(galleryItems);

galleryContainer.addEventListener("click", handleImgClick);

function createListImagesMarkup(images) {
  return images
    .map(
      ({ original, preview, description }) => `
      <div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`
    )
    .join("");
}

galleryContainer.innerHTML = listImagesMarkup;

function handleImgClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }
  basicLightbox
    .create(
      `<img src="${event.target.dataset.source}" width="800" height="600">`
    )
    .show();
}
