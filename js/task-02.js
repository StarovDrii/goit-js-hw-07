const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
  {
    url: 'https://images.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Elephant Beside on Baby Elephant',
  },
  {
    url: 'https://images.pexels.com/photos/37833/rainbow-lorikeet-parrots-australia-rainbow-37833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Blue Geeen and Orange Parrot',
  },
  {
    url: 'https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Zebras on Zebra',
  },
];
const body = document.querySelector('body');
body.style.width = '1440px';
body.style.display = 'flex';
body.style.flexWrap = 'wrap';
body.style.padding = '100px 156px';

const galleryList = document.querySelector('.gallery');
galleryList.style.listStyle = 'none';
galleryList.style.display = 'flex';
galleryList.style.flexWrap = 'wrap';
galleryList.style.gap = '48px 24px';
galleryList.style.justifyContent = 'center';

const galleryListItem = document.createElement('li');
const markup = images
  .map(
    img =>
      `<li>
          <img src="${img.url}" alt="${img.alt}" width="360px" height="300px">
    </li>`
  )
  .join('');
galleryList.innerHTML = markup;
