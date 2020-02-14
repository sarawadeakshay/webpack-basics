
import trek from './assets/trek.JPG';

function addImage() {
  const img = document.createElement('img');
  img.width = 400;
  img.height = 300;
  img.src = trek;
  document.querySelector('body').appendChild(img);
}

export default addImage;