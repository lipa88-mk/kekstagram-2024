const ITEMS = 25;

const commentsList = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const names = ['Аполлон', 'Геннадий', 'Вениамин', 'Георгий', 'Дамир', 'Елисей'];

const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomFromArray = (arr) => {
  const index = getRandomPositiveInteger(0, arr.length-1);
  return arr[index];
};

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

// eslint-disable-next-line no-unused-vars
const isMaxLengthFit = (str, maxLength) => (str.length <= maxLength);

const getData = () => {
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

// eslint-disable-next-line no-console
console.log(getData());

