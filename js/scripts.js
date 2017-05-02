(function() {

    var data = {

        current: null,

        modoAdmin: false,

        dados: [{
                nome: "Clicar no gato 1",
                imagem: "img/catImage.jpg",
                contagemCliques: 0
            },

            {
                nome: "Clicar no gato 2",
                imagem: "img/catImage2.jpg",
                contagemCliques: 0
            },

            {
                nome: "Clicar no gato 3",
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
            areaAdminstrativa.init();
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
          if (data.modoAdmin === false) {
            data.current.contagemCliques++;
            container.render();
          }
        },

        mostrarAdmin: function() {
            data.modoAdmin = true;
            areaAdminstrativa.render();
        },

        cancelarAdmin: function() {
            data.modoAdmin = false;
            areaAdminstrativa.cancelar();
        },
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
                //Para guardar o clique em cada cópia do gato, e não no último gato do loop
                //Immediately-invoked function expression
                //https://en.wikipedia.org/wiki/Immediately-invoked_function_expression
                elem.addEventListener('click', (function(catCopy) {
                    return function() {
                        octopus.selecionarAtual(catCopy);
                        container.render();
                        octopus.cancelarAdmin();
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

            this.elemImagem.addEventListener("click", function() {
                octopus.incrementarClique();
            });

            this.container.appendChild(this.containerGatoClicado);
        },

        render: function() {
            var currentCat = octopus.pegarAtual();

            this.elemImagem.src = currentCat.imagem;
            this.elemTitulo.textContent = currentCat.nome;
            this.elemContador.textContent = "Já tenho " + currentCat.contagemCliques;
        }
    };


    var areaAdminstrativa = {
        init: function() {
            this.buttonAdmin = document.getElementById('admin-button');
            this.buttonSalvar = document.getElementById('salvar-alteracoes');
            this.buttonCancelar = document.getElementById('cancelar-alteracoes');
            this.campoNome = document.getElementById('nome-gato-admin');
            this.campoImagem = document.getElementById('imagem-gato-admin');
            this.campoClique = document.getElementById('cliques-gato-admin');

            this.buttonAdmin.addEventListener('click', function() {
                octopus.mostrarAdmin();
            });

            this.buttonSalvar.addEventListener('click', function(e){
              e.preventDefault()
              areaAdminstrativa.salvar();
            });

            this.buttonCancelar.addEventListener('click', function(e){
              e.preventDefault()
              octopus.cancelarAdmin();
            });
        },

        cancelar: function() {
            this.containerAdmin = document.getElementById('admin-section');
            this.containerAdmin.setAttribute('class', 'ocultar');
        },

        render: function() {
            this.containerAdmin = document.getElementById('admin-section');
            this.containerAdmin.setAttribute('class', '');
            var currentCat = octopus.pegarAtual();

            this.campoNome.value = currentCat.nome;
            this.campoImagem.value =  currentCat.imagem;
            this.campoClique.value = currentCat.contagemCliques;
            console.log(currentCat);

        },

        salvar: function(){

          var currentCat = octopus.pegarAtual();
          currentCat.nome = this.campoNome.value;
          currentCat.imagem = this.campoImagem.value;
          currentCat.contagemCliques = this.campoClique.value;
          container.render();
          lista.render();
          octopus.cancelarAdmin();

        }

    };


    octopus.init();

})();
