(function() {
    var containerGeral = document.getElementById('container'),
        containerListaGato = document.createElement('ul'),
        containerMostrarGato = document.getElementById('seletor-gato');


    containerGeral.appendChild(containerListaGato);


    var dadosGatos = [{
        "nome_gato": "Bananinha",
        "titulo_gato": "esse é o primeiro gatinho, Bananinha",
        "imagem_gato": "img/catImage.jpg"
    }, {
        "nome_gato": "Tintim",
        "titulo_gato": "esse é o segundo gatinho, Tintim",
        "imagem_gato": "img/catImage2.jpg"
    }];

    function gerarContainerGatinhos(i) {
        var containerGato,
            tituloGato,
            nomeGato,
            imagemGato,
            contadorGato;

        containerGato = document.createElement('li');
        tituloGato = document.createElement('h1');
        nomeGato = document.createElement('a')
        imagemGato = document.createElement('img');
        contadorGato = document.createElement('p');

        containerListaGato.classList.add('container-lista-gato')
        containerGato.classList.add('container-gato');
        tituloGato.classList.add('titulo-gato');
        nomeGato.classList.add('nome-gato');
        imagemGato.classList.add('imagem-gato');
        contadorGato.classList.add('txtContador');

        tituloGato.id = "tituloGato" + i;
        nomeGato.id = "nomeGato" + i;
        contadorGato.id = "placarCliques" + i;
        imagemGato.id = "imagemGato" + i;
        imagemGato.atributoClique = contadorGato.id;
        imagemGato.contador = 0;

        imagemGato.src = dadosGatos[i].imagem_gato;
        nomeGato.innerHTML = dadosGatos[i].nome_gato;
        tituloGato.innerHTML = dadosGatos[i].titulo_gato;




        nomeGato.addEventListener('click', function() {

            containerMostrarGato.innerHTML = '';
            containerMostrarGato.appendChild(tituloGato);
            containerMostrarGato.appendChild(imagemGato);
            containerMostrarGato.appendChild(contadorGato);
            containerMostrarGato.appendChild(contadorGato);

        });

        imagemGato.addEventListener('click', function(){
          var contador = imagemGato.contador += 1;
          var placar = document.getElementById(imagemGato.atributoClique);
          placar.innerHTML = "já tenho " + contador + " cliques";
        });


        containerListaGato.appendChild(containerGato);
        // containerGato.appendChild(tituloGato);
        containerGato.appendChild(nomeGato);
        // containerGato.appendChild(imagemGato);
        // containerGato.appendChild(contadorGato);

    };


    for (var i = 0, j = dadosGatos.length; i < j; i++) {
        gerarContainerGatinhos(i);
        // document.getElementById('nomeGato' + i).innerHTML = dadosGatos[i].nome_gato;
        // document.getElementById('imagemGato' + i).src = dadosGatos[i].imagem_gato;

    }





    // function contarCliques(id, contador) {
    //     var contador = contador += 1;
    //     var placar = document.getElementById(id);
    //     placar.innerHTML = "já tenho " + contador + " cliques";
    // }




})()
