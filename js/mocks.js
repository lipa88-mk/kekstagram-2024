import {getRandomPositiveInteger, getRandomFromArray} from './utils.js';
import {commentsList, names, ITEMS} from './consts.js';

const getComments = (amount) => {
  const comments = [];
  for (let i = 1; i <= Math.abs(amount); i++) {
    const comment =  new Object();
    comment.id = i;
    comment.avatar = `img/avatar-${getRandomPositiveInteger(1,6)}.svg`;
    comment.message = getRandomFromArray(commentsList);
    comment.name = getRandomFromArray(names);

    comments.push(comment);
  }
  return comments;
};

export const getData = () => {
  const gallery = [];
  for (let i = 1; i <= ITEMS; i++) {
    const galleryItem = new Object();
    galleryItem.id = i;
    galleryItem.url = `photos/${i}.jpg`;
    galleryItem.likes = getRandomPositiveInteger(15, 200);
    galleryItem.description = getRandomFromArray(commentsList);
    galleryItem.comments = getComments(getRandomPositiveInteger(1, 6));

    gallery.push(galleryItem);
  }
  return gallery;
};


