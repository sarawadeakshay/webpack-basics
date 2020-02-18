import HelloWorldButton from './components/hello-world-button';
import addImage from './add-image';

addImage();
const helloWorldBtn = new HelloWorldButton();
helloWorldBtn.render();

if (process.env.NODE_ENV) {
  console.log('prod mode');
}
