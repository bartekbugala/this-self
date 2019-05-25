function Button(text) {
    this.text = text || 'Click me';
}

Button.prototype = {
    create: function() {
        let self = this;
        this.element = document.createElement('button');
        this.element.innerText = this.text;
        this.element.addEventListener('click', function() {
            alert(self.text);
        });
        document.body.appendChild(this.element);
    }
}

let btn1 = new Button('Start');
let btn2 = new Button('Stop');
let btn3 = new Button();

btn1.create();
btn2.create();
btn3.create();



