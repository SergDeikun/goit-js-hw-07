import { galleryItems } from "./gallery-items.js";

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const listImagesMarkup = createListImagesMarkup(galleryItems);

galleryContainer.addEventListener("click", handleImgClick);

function handleImgClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox
    .create(
      `<img src="https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg" width="800" height="600">`
    )
    .show();
}

// Замена значения атрибута src элемента <img> в модальном окне перед открытием.

function createListImagesMarkup(images) {
  return images
    .map(
      (imgItem) => `
      <div class="gallery__item">
        <a class="gallery__link" href="${imgItem.original}">
          <img
            class="gallery__image"
            src="${imgItem.preview}"
            data-source="${imgItem.original}"
            alt="${imgItem.description}"
          />
        </a>
      </div>`
    )
    .join("");
}

galleryContainer.innerHTML = listImagesMarkup;

//Модальне вікно зі збільшеним зображенням повинне відкриватися виключно при натисканні на саме зображення (робіть перевірку на те, куди припав клік користувача, всередині функції, що відповідає за відкриття модального вікна)

//* const images = document.getElementsByTagName('img');
//* const sources = Array.from(images, image => image.src);
//* const insecureSources = sources.filter(link => link.startsWith('http://'));
