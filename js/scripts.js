(function() {
    var containerGeral = document.getElementById('container');

    var dadosGatos = [{
        "titulo_gato": "esse é o primeiro gatinho",
        "imagem_gato": "img/catImage.jpg"
    }, {
        "titulo_gato": "esse é o segundo gatinho",
        "imagem_gato": "img/catImage2.jpg"
    }];

    function gerarContainerGatinhos(i) {
        var containerGato,
            tituloGato,
            imagemGato,
            contadorGato;

        containerGato = document.createElement('div');
        tituloGato = document.createElement('h1');
        imagemGato = document.createElement('img');
        contadorGato = document.createElement('p');

        containerGato.classList.add('container-gato');
        tituloGato.classList.add('titulo-gato');
        imagemGato.classList.add('imagem-gato');
        contadorGato.classList.add('txtContador');

        tituloGato.id = "tituloGato" + i;
        contadorGato.id = "placarCliques" + i;
        imagemGato.id = "imagemGato" + i;
        imagemGato.atributoClique = contadorGato.id;
        imagemGato.contador = 0;

        imagemGato.addEventListener('click', function() {
            // contarCliques(imagemGato.atributoClique, imagemGato.contador)
            var contador = imagemGato.contador += 1;
            var placar = document.getElementById(imagemGato.atributoClique);
            placar.innerHTML = "já tenho " + contador + " cliques";

        });


        containerGeral.appendChild(containerGato);
        containerGato.appendChild(tituloGato);
        containerGato.appendChild(imagemGato);
        containerGato.appendChild(contadorGato);

    };


    for (var i = 0, j = dadosGatos.length; i < j; i++) {
        gerarContainerGatinhos(i);
        document.getElementById('tituloGato' + i).innerHTML = dadosGatos[i].titulo_gato;
        document.getElementById('imagemGato' + i).src = dadosGatos[i].imagem_gato;

    }





    // function contarCliques(id, contador) {
    //     var contador = contador += 1;
    //     var placar = document.getElementById(id);
    //     placar.innerHTML = "já tenho " + contador + " cliques";
    // }




})()
