    alert('Boas vindas ao jogo do número secreto!');
    let numeroSecreto = parseInt(Math.random() * 100 + 1);
    console.log(numeroSecreto);
    let chute;
    let tentativas = 1;

    // enquanto o chute não for igual ao número secreto //

    while (chute != numeroSecreto) {
      chute = prompt('Escolha um número entre 1 e 100');
      // se for igual ao numero secreto //

        if (chute == numeroSecreto){
          break; // O BREAK SERVE PARA PARAR O CODIGO//
        }else{

          if(chute > numeroSecreto){
            alert(`O número secreto é menor que ${chute}`);

          } else{
            alert(`O número secreto é maior que ${chute}`);
          }
          //tentativas = tentativas +1;//
          //Aqui toda vez que quiser incrementar um valor a mais eu coloco ++ //
          tentativas++;
        }
      }

      let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
      // operador ternario//
      alert(`Isso ai! você descobriu o número secretro ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

     //  if(tentativas > 1){
     //   alert(`Isso ai! você descobriu o número secretro ${numeroSecreto} com ${tentativas} tentativas,`);
     // }else{
    //    alert(`Isso ai! você descobriu o número secretro ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);
    //  } 
      