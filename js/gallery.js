const container = document.querySelector('.pictures');

export const renderGallery = (items) => {
  const pictureElement = document.querySelector('#picture').content;

  items.map((item)=> {
    const {url, comments, likes} = item;
    const itemElement = pictureElement.cloneNode(true);
    const imgElement = itemElement.querySelector('.picture__img');
    imgElement.src = url;
    const commentsAmountElement = itemElement.querySelector('.picture__comments');
    commentsAmountElement.textContent = comments.length;
    const likesAmountElement = itemElement.querySelector('.picture__likes');
    likesAmountElement.textContent = likes;

    container.appendChild(itemElement);
  });
};
