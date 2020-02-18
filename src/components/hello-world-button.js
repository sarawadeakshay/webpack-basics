import './hello-world-button.scss';

class HelloWorldButton {
  btnClass = 'btn';

  render() {
    const btn = document.createElement('button');
    btn.innerHTML = 'Hello World Btn';
    btn.className = this.btnClass;
    btn.onclick = function() {
      console.log('btn clicked after Hot module implementation --hot!');
    };
    const br = document.createElement('br');
    document.querySelector('body').appendChild(br);
    document.querySelector('body').appendChild(btn);
  }
}

export default HelloWorldButton;