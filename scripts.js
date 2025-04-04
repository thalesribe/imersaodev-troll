rodada = 1
while (rodada <= 3) {
  console.log("Rodada:" + rodada);

   function jogar() { pc = prompt("Tentativa: " + rodada + " Escolha um numero: 1, 2 ou 3?");
    rn = Math.floor(Math.random() * 3) + 1;
    if (pc !== "1" && pc !== "2" && pc !== "3") {
      alert("Só 1, 2 ou 3 são opções!");
    }
    if (pc != rn) {
      alert("Você errou humano, Tente novamente! 🥱");
      rodada = 30;
    } else {
      alert("Você acertou humano 😤! estava pensando no numero: " + rn);
    }
    rodada = rodada + 1;
  }
  if (rodada == 4) {
    alert("Você pode passar pela minha ponte humano! SUMA DAQUI😡!!!");
  }
     
   } 
