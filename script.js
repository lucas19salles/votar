function votar() {
  let nome = document.getElementById("name").value;
  let dataNascimento = document.getElementById("data").value;
  let currentTime = new Date();
  let year = currentTime.getFullYear();
  let newYear = year - dataNascimento;

  if (newYear < 18) {
    alert(
      ` Sua idade é: ${newYear}\n Não poderá votar ${nome}, pois é menor de idade`
    );
  } else {
    alert(
      ` Sua idade é: ${newYear}\n Você poderá votar ${nome}, pois é maior de idade`
    );
  }
}
