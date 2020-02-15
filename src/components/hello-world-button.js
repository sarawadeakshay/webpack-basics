import './hello-world-button.scss';

function helloWorldButton() {
  const btn = document.createElement('button');
  btn.innerHTML = 'Hello World Btn';
  btn.className = 'btn';
  btn.onclick = function() {
    console.log('btn clicked!');
  };
  const br = document.createElement('br');
  document.querySelector('body').appendChild(br);
  document.querySelector('body').appendChild(btn);
}

export default helloWorldButton;