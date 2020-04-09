# Sessão Brinquedo 1

## SORTEIO

* ### A captura dos nomes
   Para fazer o sorteio o usuário deverá inserir (um item de cada) os itens do sorteio.  
   Nosso sistema se encarrega de fazer uma captura do nomes (itens) atraves do codigo javascript.
   Utilizamos de um `if` para verificar SE o valor digitado é vazio e se ja existe em nossa lista.

   Antes de enviar `push()` o item pra nossa lista convertemos o item para LETRAS MAIUSCULAS.
   Para assim ajudar na hora de comparar os itens digitados com os que ja haviam na lista.

``` js
capturarNomes(event) {
   event.preventDefault();

   if (this.nome.value != "" && this.listaNomes.indexOf(this.nome.value) == -1) {
         console.log(this.listaNomes.indexOf(this.nome.value))
         this.listaNomes.push(this.nome.value.toUpperCase());
         this.nome.focus();
         
         this.resultado.innerHTML = `"${this.nome.value}" INSERIDO NA LISTA`
         this.nome.value = "";
      } else {
         
         this.resultado.innerHTML = 'VOCÊ JA INSERIU ESSE ITEM'
      }
   }
}
```

   Esses valores serão capturados através do `document.querySelector` dentro do construtor da classe  


```js
   constructor() {
      this.nomes = document.querySelector('#names');
      this.resultado = document.querySelector('#resultado');
   }
```

   Iremos inserir também no `constructor` um array vazio (listaNomes) que irá armazenar os itens do sorteio:  


```js
   constructor() {
      this.nomes = document.querySelector('#names');
      this.resultado = document.querySelector('#resultado');
      this.listaNomes = [];
   }
```

* ### O sorteio
   Com tudo pronto, nomes capturados, iremos fazer nosso primeiro sorteio.  
   Neste metodo, criamos uma variavel que irá capturar o numero de itens do sorteio através do `.length`.

   Para evitar que o nosso sorteio fique infinito dando `undefined` pela ausencia de itens no final, faremos um `if` que verificará se ainda ha itens a serem sorteados.

   `Math.floor(Math.random() * contador)` gera um numero aleatorio entre 0 e o numero de itens do sorteio, esse valor é passado para a variavel `index` que iremos usar para buscar nosso item sorteado `this.listaNomes[index]` que será impresso na tela.

   Caso, ou `else` nossa lista (contaddor) esteja vazia, iremos imprimir na tela a mensagem "ACABOU !!!"

```js
sorteiaNome() {

      let contador = this.listaNomes.length;
      if (contador > 0) {

         let index = Math.floor(Math.random() * contador);
         this.resultado.innerHTML = this.listaNomes[index];

         this.eliminaNome(index);
      } else {

         this.resultado.innerHTML = 'ACABOU !!!';
      }
   }
```

   Voltando um pouco em nosso ultimo codigo, não podemos deixar de falar da função `eliminaNome()`, que recebe o valor do index e apaga da lista o nome sorteado, evitando assim que ele seja sorteado uma outra vez.

   Para isso usamos o `splice()` que deleta a partir da posição que você deseja quantos itens você quizer respectivamente.  

```js
   eliminaNome(index) {

      this.listaNomes.splice(index, 1);
   }
```
