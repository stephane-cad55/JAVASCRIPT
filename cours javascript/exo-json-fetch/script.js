var nav = document.querySelector('nav');

function listUsers(jsonObj) {
    for (var i = 0; i < jsonObj.length; i++) {
        var nom = jsonObj[i].name;
        console.log(nom);
        var user = document.createElement('li');
        user.textContent = nom;
        nav.appendChild(user);
    }

}
var p = fetch('https://jsonplaceholder.typicode.com/users')

    .then(function (response) {
        response.json()
            .then(function (contenu) {
                listUsers(contenu);
                leHeader(contenu);

            })
    });

var header = document.querySelector('header');

function leHeader(jsonObj) {
    for (var i = 0; i < jsonObj.length; i++) {
        var nom1 = jsonObj[i].name;
        var toto = document.createElement('p');
        toto.textContent = nom1;
        header.appendChild(toto);
    }
}

var yo = document.querySelector('main');

function listPosts(jsonObj){
    for (var i = 0; i < jsonObj.length; i++) {
        var nom2 = jsonObj[i].name;
       
        var post = document.createElement('li');
        post.textContent = nom2;
        main.appendChild(post);
    

} 
}

fetch('https://jsonplaceholder.typicode.com/posts')
.then(function (response2) {
    response2.json()
        .then(function (contenu2) {
           
            listPosts(contenu2);

        })
});