document.addEventListener("DOMContentLoaded", function () {

    var content = document.querySelector("#container")
    var button1 = document.querySelector('#right>:nth-child(1)');
    var button2 = document.querySelector('#right>:nth-child(2)');
    var button3 = document.querySelector('#right>:nth-child(3)');
    var button4 = document.querySelector('#right>:nth-child(5)');
    var button5 = document.querySelector('#right>:nth-child(7)');
    var style = document.querySelector('#right>input');
    var buttonHello = document.querySelector('#name>:nth-child(2)');
    var buttonCustum = document.querySelector('#name>:nth-child(5)');

    button1.addEventListener('click', red);
    button2.addEventListener('click', green);
    button3.addEventListener('click', blue);
    button4.addEventListener('click', changeColor);
    button5.addEventListener('click', rainbow);
    style.addEventListener('change', size);
    buttonHello.addEventListener('click', text);
    buttonCustum.addEventListener('click', textCustum);

    function red() {
        content.style.backgroundColor = "red"
    }

    function green() {
        content.style.backgroundColor = "green"
    }

    function blue() {
        content.style.backgroundColor = "blue"
    }

    function changeColor() {
        if (content.style.backgroundColor == "white") {
            content.style.backgroundColor = "black";
        } else {
            content.style.backgroundColor = "white";
        }
    }

    function rainbow() {
        console.log(content.style.backgroundColor);
        switch (content.style.backgroundColor) {
            case "red":
                content.style.backgroundColor = "orange";
                break;
            case "orange":
                content.style.backgroundColor = "yellow";
                break;
            case "yellow":
                content.style.backgroundColor = "green";
                break;
            case "green":
                content.style.backgroundColor = "turquoise";
                break;
            case "turquoise":
                content.style.backgroundColor = "blue";
                break;
            case "blue":
                content.style.backgroundColor = "purple";
                break;
            case "purple":
                content.style.backgroundColor = "red";
                break;
            default:
                content.style.backgroundColor = "red";
                break;
        }
    }

    function size() {
        content.style.border = "black " + style.value + "px solid";
    }

    function text() {
        var hello = document.createTextNode("Hello World ");
        content.appendChild(hello);
    }

    function textCustum() {
        var input = document.querySelector("#text");
        var div = document.querySelector("#container");
        div.innerHTML = input.value;
    }
});
