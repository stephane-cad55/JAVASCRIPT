document.addEventListener("DOMContentLoaded", function () {

    var button1 = document.querySelector('#right>:nth-child(1)');
    var button2 = document.querySelector('#right>:nth-child(2)');
    var button3 = document.querySelector('#right>:nth-child(3)');
    var button4 = document.querySelector('#right>:nth-child(4)');
    var button5 = document.querySelector('#right>:nth-child(5)');

    var content = document.querySelector("#container")

    button1.addEventListener('click', red);
    button2.addEventListener('click', green);
    button3.addEventListener('click', blue);
    /*  button4.addEventListener('click', changeColor);*/
    /*  button5.addEventListener('click', ArcEnCiel);*/

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

    }
}

    /*function ArcEnCiel() {
    
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
            }
        }*/
);
