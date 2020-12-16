document.addEventListener('DOMContentLoaded', function () {

    var content = document.querySelector("#block2")
    var items = document.querySelectorAll('ul>li');

    items.forEach(function (li) {

        li.addEventListener('click', function () {

            let p = document.createElement('p');
            p.textContent = li.textContent;
            content.appendChild(p);
        });
    });
});