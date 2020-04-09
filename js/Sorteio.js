class Sorteio {

   constructor() {
      this.nome = document.querySelector('#names');
      this.resultado = document.querySelector('#resultado');
      this.listaNomes = [];
   }

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

      console.log(this.listaNomes)
   }

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

   eliminaNome(index) {

      this.listaNomes.splice(index, 1);
   }

}