fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => response.json())
    .then(json => console.log(json))

fetch('https://jsonplaceholder.typicode.com/posts/2')
    .then(response => response.json())
    .then(json => console.log(json))

var header = document.querySelector('header');

var nav = document.querySelector('nav');

var main = document.querySelector('main');

//fonction pour afficher les utilisateurs

//fonction pour afficher les posts des utilisateurs

// fonction pour inserer le header
function leHeader(json) {
    var header = document.createElement('header');
    header.textContent = 'users ' + json['users'];
    header.appendChild(header);
}