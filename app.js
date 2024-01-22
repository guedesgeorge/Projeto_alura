alert('Boas vindas ao jogo do número secreto!');
let numeroSecreto = 6
console.log(numeroSecreto)
let chute 

// enquanto o chute não for igual ao número secreto //

while (chute != numeroSecreto) {
  chute = prompt('Escolha um número entre 1 e 10');
}

// se for igual ao numero secreto //

if (chute == numeroSecreto){
  alert(`Isso ai! você descobriu o número secretro ${numeroSecreto}`);
}else{

  if(chute > numeroSecreto){
    alert(`O número secreto é menor que ${chute}`);

  } else{
    alert(`O número secreto é maior que ${chute}`)
  }
}
