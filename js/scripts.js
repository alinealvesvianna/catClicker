$(function() {

    var data = {
        dadosGatos: [{
                nomeGato: "Bananinha",
                // tituloGato: "esse é o primeiro gatinho, Bananinha",
                imagemGato: "img/catImage.jpg",
                contagemCliques: 0
            },

            {
                nomeGato: "Tintim",
                // tituloGato: "esse é o segundo gatinho, Tintim",
                imagemGato: "img/catImage2.jpg",
                contagemCliques: 0
            },

            {
                nomeGato: "Bolinha",
                // tituloGato: "esse é o segundo gatinho, Bolinha",
                imagemGato: "img/catImage3.jpg",
                contagemCliques: 0
            }

        ]
    };

    var octopus = {

        adicionarLista: function(){
            var
        };

        selecionarGato: function() {

        };

        removerGato: function() {

        };

        tornaGatoVisivel: function() {

        };

        init: function() {
          view.init();
        };
    };


    var view = {
        init: function() {
          this.$listaGatos = $('lista-gatos');
          this.ListaGatoTemplate = $('script[data-template="gato"]');
        };

        render: function() {

        };
    }

    octopus.init();

})();


// (function() {
//     var containerGeral = document.getElementById('container'),
//         containerListaGato = document.createElement('ul'),
//         containerMostrarGato = document.getElementById('seletor-gato');
//
//
//     containerGeral.appendChild(containerListaGato);
//
//
//     var dadosGatos = [{
//         "nome_gato": "Bananinha",
//         "titulo_gato": "esse é o primeiro gatinho, Bananinha",
//         "imagem_gato": "img/catImage.jpg"
//     }, {
//         "nome_gato": "Tintim",
//         "titulo_gato": "esse é o segundo gatinho, Tintim",
//         "imagem_gato": "img/catImage2.jpg"
//     }];
//
//     function gerarContainerGatinhos(i) {
//         var containerGato,
//             tituloGato,
//             nomeGato,
//             imagemGato,
//             contadorGato;
//
//         containerGato = document.createElement('li');
//         tituloGato = document.createElement('h1');
//         nomeGato = document.createElement('a')
//         imagemGato = document.createElement('img');
//         contadorGato = document.createElement('p');
//
//         containerListaGato.classList.add('container-lista-gato')
//         containerGato.classList.add('container-gato');
//         tituloGato.classList.add('titulo-gato');
//         nomeGato.classList.add('nome-gato');
//         imagemGato.classList.add('imagem-gato');
//         contadorGato.classList.add('txtContador');
//
//         tituloGato.id = "tituloGato" + i;
//         nomeGato.id = "nomeGato" + i;
//         contadorGato.id = "placarCliques" + i;
//         imagemGato.id = "imagemGato" + i;
//         imagemGato.atributoClique = contadorGato.id;
//         imagemGato.contador = 0;
//
//         imagemGato.src = dadosGatos[i].imagem_gato;
//         nomeGato.innerHTML = dadosGatos[i].nome_gato;
//         tituloGato.innerHTML = dadosGatos[i].titulo_gato;
//
//
//         nomeGato.addEventListener('click', function() {
//             containerMostrarGato.innerHTML = '';
//             containerMostrarGato.appendChild(tituloGato);
//             containerMostrarGato.appendChild(imagemGato);
//             containerMostrarGato.appendChild(contadorGato);
//         });
//
//         imagemGato.addEventListener('click', function(){
//           var contador = imagemGato.contador += 1;
//           var placar = document.getElementById(imagemGato.atributoClique);
//           placar.innerHTML = "já tenho " + contador + " cliques";
//         });
//
//
//         containerListaGato.appendChild(containerGato);
//         containerGato.appendChild(nomeGato);
//
//
//     };
//
//
//     for (var i = 0, j = dadosGatos.length; i < j; i++) {
//         gerarContainerGatinhos(i);
//     }
//
//
// })()




(function () {

    var data = {

        current: null,

        dados: [
            {
                nome: "nome1",
                imagem: "img/imagem.jpg",
                contagemCliques: 0
            },

            {
                nome: "nome2",
                imagem: "img/imagem2.jpg",
                contagemCliques: 0
            },

            {
                nome: "nome3",
                imagem: "img/imagem3.jpg",
                contagemCliques: 0
            }

        ]
    };

    var octopus = {

        init: function () {
            data.current = data.dados[0];
            view1.init();
            //view2.init();
        },

        pegarAtual: function () {
            return data.current;
        },

        pegarTodos: function () {
            return data.dados;
        },

        selecionarAtual: function (atual) {
            data.current = atual;
        },

        incrementarClique: function () {
            data.current.contagemCliques++;
            view2.render();
        }

    };


    var view1 = {
        init: function () {
            //this.$lista = $('lista');

            this.lista = document.getElementsByClassName('lista')
            this.render();
        },

        render: function () {
            var elem,
                i,
                cals = octopus.pegarTodos();

            this.lista.innerHTML = "";

            for (var i = 0; i < cals.length; i++) {
                cal = cals[i];


                elem = document.createElement("li");
                elem.textContent = cal.nome


                elem.addEventListener('click', (function (calCopy) {
                    return function () {
                        octopus.selecionarAtual(calCopy);
                        //view1.render();
                    };
                })(cal));


                this.lista.appendChild(elem);

                console.log(this)
            };
        },
    };

    var view2 = {

    };


    octopus.init();

})();
