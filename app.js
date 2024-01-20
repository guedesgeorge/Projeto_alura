alert('Boas vindas ao jogo do número secreto!');
let numeroSecreto = 6
console.log(numeroSecreto)
let chute = prompt('Escolha um número secreto entre 1 e 10');

// se for igual ao numero secreto //

if (chute == numeroSecreto){
  alert(`Isso ai! você descobriu o núnmero secretro ${numeroSecreto}`);
}else{
  alert('você errou :(')
}
