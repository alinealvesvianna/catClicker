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

            this.listaGatos = document.getElementById('lista-gatos');
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
                        container.render();
                    };
                })(cat));

                this.listaGatos.appendChild(elem);
            };
        },
    };

    var container = {

        init: function() {
            this.container = document.getElementById('container-gatos');

            this.containerGatoClicado = document.createElement("div");
            this.elemImagem = document.createElement("img");
            this.elemTitulo = document.createElement("h1");
            this.elemContador = document.createElement("p");

            this.containerGatoClicado.appendChild(this.elemTitulo);
            this.containerGatoClicado.appendChild(this.elemContador);
            this.containerGatoClicado.appendChild(this.elemImagem);

            this.elemImagem.addEventListener("click", function(){
              octopus.incrementarClique();
            })

            this.container.appendChild(this.containerGatoClicado);

            // this.render();


        },

        render: function() {

          var currentCat = octopus.pegarAtual();



          this.elemImagem.src = currentCat.imagem;
          this.elemTitulo.textContent = currentCat.nome;
          this.elemContador.textContent = "Já tenho " + currentCat.contagemCliques;
        }
    };


    octopus.init();

})();
