const randomNumber = Math.round(Math.random() * 10);
let xAttempts = 1;
let alertElement = document.querySelector("h1");

function handleClick(event) {
  event.preventDefault();

  const inputNumber = document.querySelector("#input-number").value; // Pegando o valor do input

  console.log(xAttempts);

  if (Number(inputNumber) !== randomNumber) {
    alertElement.innerText = "Você errou, tente novamente";
    xAttempts++;
  } else {
    let gameInputs = document.querySelector("#gameInputs");
    alertElement.innerText = `Você Acertou em ${xAttempts} tentativas!, A resposta era ${randomNumber}`;
    gameInputs.style.display = "none";
  }
}
