const radios = document.querySelectorAll('input[type="radio"]'); //Selecciona todos los elementos radio
radios.forEach(radio => {   //por cada radio cuando cambia llama a una función que cambia el color de fondo del body
  radio.addEventListener('change', function() {
    document.body.style.backgroundColor = this.value;
  });
});
