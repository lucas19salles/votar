function votar() {
  let nome = document.getElementById("name").value;
  let dataNascimento = document.getElementById("data").value;
  let currentTime = new Date();
  let year = currentTime.getFullYear();
  let newYear = year - dataNascimento;

  if (newYear < 18) {
    alert(`Não poderá votar ${nome} você menor de idade`);
  } else {
    alert(`Você poderá votar ${nome} você maior de idade`);
  }
}
