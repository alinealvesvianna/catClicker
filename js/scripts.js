(function() {
  var contador = 0;

    function contarCliques() {
        contador++;
        var placar = document.getElementById('placarCliques');
        placar.innerHTML = "já tenho "+ contador + " cliques";
    }
    document.getElementById('imagemContador').addEventListener("click", contarCliques)


})()
