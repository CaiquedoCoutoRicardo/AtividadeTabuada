function gerarTabuada() {
    var multiplicador = parseInt(document.getElementById("multiplicador").value);
    var table = document.getElementById("tabuada");
    table.innerHTML = ''; 
  

    for (var i = 1; i <= 10; i++) {
        var resultado = multiplicador * i;
        var newRow = table.insertRow();
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        cell1.textContent = multiplicador + " x " + i;
        cell2.textContent = resultado;
    }
}
