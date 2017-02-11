(function() {

    var data = {

        current: null,

        dados: [{
                nome: "nome1",
                imagem: "img/catImage.jpg",
                contagemCliques: 0
            },

            {
                nome: "nome2",
                imagem: "img/catImage2.jpg",
                contagemCliques: 0
            },

            {
                nome: "nome3",
                imagem: "img/catImage3.jpg",
                contagemCliques: 0
            }

        ]
    };

    var octopus = {

        init: function() {
            data.current = data.dados[0];
            lista.init();
            container.init();
        },

        pegarAtual: function() {
            return data.current;
        },

        pegarTodos: function() {
            return data.dados;
        },

        selecionarAtual: function(atual) {
            data.current = atual;
        },

        incrementarClique: function() {
            data.current.contagemCliques++;
            container.render();
        }

    };


    var lista = {
        init: function() {
            //this.$lista = $('lista');

            this.listaGatos = document.getElementsByClassName('lista-gatos');
            this.render();
            // console.log(this);
        },

        render: function() {
            var elem,
                i,
                cats = octopus.pegarTodos();

            this.listaGatos.innerHTML = "";

            for (var i = 0; i < cats.length; i++) {
                cat = cats[i];
                elem = document.createElement("li");
                elem.textContent = cat.nome

                elem.addEventListener('click', (function(catCopy) {
                    return function() {
                        octopus.selecionarAtual(catCopy);
                        octopus.incrementarClique();
                    };
                })(cat));

                this.listaGatos[0].appendChild(elem);
            };
        },
    };

    var container = {

        init: function() {
            this.container = document.getElementsByClassName('container-gatos');

        },

        render: function() {
            var containerGatoClicado,
                elemImagem,
                elemTitulo,
                elemContador,
                cat = octopus.pegarAtual();


            this.container[0].innerHTML = "";

            containerGatoClicado = document.createElement("div");



            elemImagem = document.createElement("img");
            elemImagem.src = cat.imagem;

            elemTitulo = document.createElement("h1");
            elemTitulo.textContent = cat.nome;

            elemContador = document.createElement("p");
            elemContador.textContent = "Já tenho " + cat.contagemCliques;

            containerGatoClicado.appendChild(elemTitulo);
            containerGatoClicado.appendChild(elemContador);
            containerGatoClicado.appendChild(elemImagem);


            this.container[0].appendChild(containerGatoClicado);

        }
    };


    octopus.init();

})();
