function media() {
  var nota1Bim = parseFloat(document.getElementById("n1").value);
  var nota2Bim = parseFloat(document.getElementById("n2").value);
  var nota3Bim = parseFloat(document.getElementById("n3").value);
  var nota4Bim = parseFloat(document.getElementById("n4").value);
  var mediaFinal = parseFloat(document.getElementById("mediaFinal").value);

  document
    .getElementById("mediaFinal")
    .setAttribute(
      "value",
      (mediaFinal = ((nota1Bim + nota2Bim + nota3Bim + nota4Bim) / 4).toFixed(
        1
      ))
    );

  if (mediaFinal >= 6) {
    document.getElementById("resultado").innerHTML =
      "Nota " + mediaFinal + " | Aprovado";
    document.getElementById("resultado").style.color = "rgb(74, 153, 0)";
  } else {
    document.getElementById("resultado").innerHTML =
      "Nota " + mediaFinal + " | Reprovado";
    document.getElementById("resultado").style.color = "rgb(102, 0, 0)";
  }
}
